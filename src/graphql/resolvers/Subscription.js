const Subscription = {
  blogComment: {
    subscribe(parent, { blogId }, { prisma }, info) {
      return prisma.subscription.comment(null, info);
    },
  },
};

export { Subscription as default };
