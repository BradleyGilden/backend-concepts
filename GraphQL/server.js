import express from 'express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
const app = express();


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World',
      },
    },
  }),
});

app.use('/graphql',  graphqlHTTP({
  schema: schema,
  graphiql: true
}))



app.listen(3000, () => {
  console.log('server running on port 3000');
})
