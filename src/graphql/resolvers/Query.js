const Query = {
  users(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [{ name_contains: args.query }, { email_contains: args.query }],
      };
    }

    return prisma.query.users(opArgs, info);
  },

  blogs(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [{ title_contains: args.query }, { body_contains: args.query }],
      };
    }

    return prisma.query.blogs(opArgs, info);
  },

  blogComments(parent, args, { prisma }, info) {
    return prisma.query.blogComments(null, info);
  },
};

export { Query as default };
