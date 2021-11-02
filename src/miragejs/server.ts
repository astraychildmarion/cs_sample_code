import { createServer, Response } from 'miragejs';
import servers from '@/miragejs/fakeData/servers.json';
import dashboard from '@/miragejs/fakeData/dashboard.json';

export default function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    factories: {},

    models: {},

    routes() {
      this.namespace = 'api/v1/cs';

      this.get('servers', (schema) => schema.db.servers);

      this.get('dashboard', (schema) => schema.db.dashboard);

      this.post(
        'server',
        () =>
          new Response(
            200,
            {},
            {
              code: 'CSTAPI2000001',
              message: 'Success',
              data: 'Success',
            },
          ),
      );
    },

    seeds(server) {
      server.db.loadData({
        servers,
        dashboard,
      });
    },
  });
}
