const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    const emailTaken = await prisma.exists.User({ email: args.data.email });

    if (emailTaken) {
      throw new Error('Email already in use!');
    }

    return prisma.mutation.createUser({ data: args.data }, info);
  },

  async updateUser(parent, args, { prisma }, info) {
    return prisma.mutation.updateUser(
      {
        where: {
          id: args.id,
        },
        data: args.data,
      },
      info,
    );
  },

  async createBlog(parent, args, { prisma }, info) {
    return prisma.mutation.createBlog(
      {
        data: {
          title: args.data.title,
          body: args.data.body,
          published: args.data.published,
          author: {
            connect: {
              id: args.data.author,
            },
          },
        },
      },
      info,
    );
  },

  async updateBlog(parent, args, { prisma }, info) {
    return prisma.mutation.updateBlog({ data: args.data, where: { id: args.id } }, info);
  },

  async deleteBlog(parent, args, { prisma }, info) {
    return prisma.mutation.deleteBlog({ where: { id: args.id } }, info);
  },

  async createBlogComment(parent, args, { prisma }, info) {
    return prisma.mutation.createBlogComment({ data: args.data }, info);
  },

  async updateBlogComment(parent, args, { prisma }, info) {
    return prisma.mutation.updateBlogComment({ data: args.data, where: { id: args.id } }, info);
  },

  async deleteBlogComment(parent, args, { prisma }, info) {
    return prisma.mutation.deleteBlogComment({ where: { id: args.id } }, info);
  },
};

export { Mutation as default };
