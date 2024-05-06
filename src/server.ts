import express from 'express';
import server from './server';

const PORT = process.env.PORT || 4000;
const app = express();

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
