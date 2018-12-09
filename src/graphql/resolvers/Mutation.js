import jwt from 'jsonwebtoken';
import nanoid from 'nanoid';

const Mutation = {
  async login(parent, args, { prisma }) {
    // TODO: Mock Google API
    const user = await prisma.query.user({ where: { googleOAuthToken: args.googleOAuthCode } });

    if (user === null) {
      throw new Error('User not Found!');
    }

    return {
      user,
      token: jwt.sign({ userId: user.id }, 'samplesecret'),
    };
  },

  async createUser(parent, args, { prisma }) {
    const emailTaken = await prisma.exists.User({ email: args.data.email });

    if (emailTaken) {
      throw new Error('Email already in use!');
    }

    // TODO: Mock Google API
    const token = nanoid();
    let user;
    try {
      user = await prisma.mutation.createUser({
        data: {
          email: args.data.email,
          name: args.data.name,
          googleOAuthToken: token,
        },
      });
    } catch (err) {
      return err;
    }

    return {
      user,
      token: jwt.sign({ userId: user.id }, 'samplesecret'),
    };
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
