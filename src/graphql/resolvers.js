const resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name || 'World'}`,
    add: (parent, { a, b }) => a + b,
  },
};

export { resolvers as default };
