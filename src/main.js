import { GraphQLServer, PubSub } from 'graphql-yoga';
import prisma from './prisma';
import Query from './graphql/resolvers/Query';
import Mutation from './graphql/resolvers/Mutation';
import User from './graphql/resolvers/User';
import Blog from './graphql/resolvers/Blog';
import BlogComment from './graphql/resolvers/BlogComment';
import Subscription from './graphql/resolvers/Subscription';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Blog,
    BlogComment,
  },
  context: { pubsub, prisma },
});

const opts = {
  port: process.env.PORT || 4000,
};

server.start(opts, () => {
  console.log('Server is running on port', opts.port);
});
