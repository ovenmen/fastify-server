import { server } from '../server';

const indexRoute = async () => server.route({
  method: 'GET',
  url: '/',
  schema: {
    querystring: {
      name: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return { hello: 'world' };
  }
});

export default indexRoute;
