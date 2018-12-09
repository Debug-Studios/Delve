import { GraphQLServer } from 'graphql-yoga';
import prisma from './prisma';
import Query from './graphql/resolvers/Query';
import Mutation from './graphql/resolvers/Mutation';
import User from './graphql/resolvers/User';
import Blog from './graphql/resolvers/Blog';
import BlogComment from './graphql/resolvers/BlogComment';

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Blog,
    BlogComment,
  },
  context: { prisma },
});

const opts = {
  port: process.env.PORT || 4000,
};

server.start(opts, () => {
  console.log('Server is running on port', opts.port);
});
