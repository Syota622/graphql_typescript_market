import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import { createServer } from 'http';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  const httpServer = createServer(app);
  httpServer.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
