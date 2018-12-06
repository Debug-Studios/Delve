const resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name || 'World'}`,
  },
};

export { resolvers as default };
