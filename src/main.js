import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const typeDefs = 'src/graphql/schema.graphql';
console.log(typeDefs);

const server = new GraphQLServer({ typeDefs, resolvers });

const opts = {
  port: process.env.PORT || 4000,
};

server.start(opts, () => {
  console.log('Server is running on port', opts.port);
});
