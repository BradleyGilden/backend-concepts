import express from "express";
import { pageIndex } from './helper.js';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import { graphqlHTTP } from "express-graphql";
import { authors, books } from "./data.js";
const app = express();


const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represents authors of one or many books",
  fields: () => ({
    // GraphQLNonNull ensures id data is not null
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString)},
    books: {
      description: 'a list of books',
      type: new GraphQLList(BookType),
      resolve: (parentAuthor) => books.filter((book) => book.authorId === parentAuthor.id) 
    }
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString)},
    authorId: { type: new GraphQLNonNull(GraphQLInt)},
    author: {
      type: AuthorType,
      // resolve(parent, args, context)
      // parent is the parent object of the fields, in this case an Object of Type Book
      resolve: (parentBook) => authors.find((author) => author.id === parentBook.authorId)
    }
  }),
});

/**
 * Key Concepts of the Root Query

 * Entry Point: The root query is the main entry point for querying data.
    It allows clients to request specific data and shapes the structure of the responses.

 * Field Definitions: The fields in the root query type define the available queries.
    Each field typically maps to a specific resolver function that fetches or computes the requested data.

 * Arguments: Fields in the root query can accept arguments to filter, sort, or paginate data.

 * Resolvers: Resolver functions are used to return the data for each field.
    These functions contain the logic to fetch data from databases, APIs, or other data sources.
 */

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    book: {
      description: 'a single book',
      type: BookType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (_parentAuthor, args) => books.find((book) => book.authorId === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of All Books",
      args: {
        page: { type: GraphQLInt, defaultValue: 1},
        limit: { type: GraphQLInt, defaultValue: books.length }
      },
      resolve: (_parent, args) => {
        const index = pageIndex(args.page, args.limit)
        return books.slice(index.start, index.end + 1)
      },
    },
    author: {
      description: 'a single author',
      type: AuthorType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (_parentAuthor, args) => authors.find((author) => author.id === args.id)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of All Authors",
      resolve: () => authors
    }
  }), // wrap it in parenthesis to avoid using return statement
});

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
