import express from "express";
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

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString)},
    authorId: { type: new GraphQLNonNull(GraphQLInt)}
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
    books: {
      type: new GraphQLList(BookType),
      description: "List of All Books",
      resolve: () => books,
    },
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
