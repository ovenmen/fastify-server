import * as Fastify from 'fastify';

import indexRoute from './routes/index';
import postsRoute from './routes/posts';
import postRoute from './routes/post';

export const server: Fastify.FastifyInstance = Fastify.fastify({
  logger: {
    level: 'info',
    messageKey: 'message'
  }
});

server.register(indexRoute);
server.register(postsRoute);
server.register(postRoute);

const start = async () => {
  try {
    server.listen({ port: 3000 }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();