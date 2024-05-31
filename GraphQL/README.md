<h1 align="center"> GraphQL </h1>
<h3 align="center"> Interacting & Designing API's with a query language </h3>

<p align="center">
<img width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" alt="graphql image" />
</p>

<br />

## Properties of Graphql

1. **Query Language**: GraphQL allows clients to request exactly the data they need, nothing more, and nothing less. This avoids the over-fetching and under-fetching issues commonly associated with REST APIs.

2. **Strongly Typed Schema**: GraphQL APIs are defined by a schema using the GraphQL Schema Definition Language (SDL). This schema serves as the contract between the client and the server, specifying the types and the relationships between them.

3. **Hierarchical**: GraphQL queries mirror the shape of the JSON data they return, making it easy to understand and predict the structure of the responses.

4. **Single Endpoint**: Unlike REST APIs, which typically expose multiple endpoints for different resources, a GraphQL server exposes a single endpoint that handles all the requests.

5. **Real-time Updates**: GraphQL supports real-time data through subscriptions, allowing clients to receive updates whenever the data changes.

6. **Tooling and Ecosystem**: GraphQL has a rich ecosystem of tools for various tasks such as development, testing, and documentation. Tools like GraphiQL and Apollo Client make working with GraphQL easier and more efficient.

### Advantages of GraphQL:

- **Flexibility**: Clients can request exactly what they need.
- **Efficiency**: Reduces the amount of data transferred over the network.
- **Strong Typing**: Ensures that clients and servers agree on the structure of the data, catching errors early in the development process.
- **Powerful Tooling**: Excellent developer tools are available for exploring and testing APIs.
- **Backward Compatibility**: Evolving APIs without breaking existing clients is easier.
