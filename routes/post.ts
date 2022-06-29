import { server } from '../server';

type RequstQuerystring = {
    id: number,
    title: string,
    article: string
}

const postRoute = async () => server.route({
  method: 'GET',
  url: '/posts/:id',
  schema: {
    querystring: {
      id: { type: 'number' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          title: { type: 'string' },
          article: { type: 'string' },
          message: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    const posts = [
      { id: 0, title: 'Introduction to Apollo Server', article: 'Apollo Server is an open-source, spec-compliant GraphQL server thats compatible with any GraphQL client, including Apollo Client. Its the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.' },
      { id: 1, title: 'Get started with Apollo Server', article: 'Now that weve defined the structure of our data, we can define the data itself. Apollo Server can fetch data from any source you connect to (including a database, a REST API, a static object storage service, or even another GraphQL server). For the purposes of this tutorial, well just hardcode some example data.' },
    ];

    const { id } = request.params as RequstQuerystring;
    const post = posts.find(post => post.id === Number(id));

    return post || { message: 'post not found' };
  }
});

export default postRoute;
