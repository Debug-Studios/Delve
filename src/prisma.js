import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'super-super',
});

const createBlogForUser = async (authorId, blogData) => {
  const blog = await prisma.mutation.createBlog(
    {
      data: {
        ...blogData,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    },
    '{ id }',
  );
  const user = await prisma.query.user(
    {
      where: { id: authorId },
    },
    '{ id name blogs { id, title, published } }',
  );
  return user;
};

createBlogForUser('cjpgl9uxb002o0710l3tmp26z', {
  title: 'Forth Test Blog',
  body: 'Lorem Ipsum Bald',
  published: false,
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
