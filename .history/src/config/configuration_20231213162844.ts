/* eslint-disable prettier/prettier */
export default () => ({
  env: process.env.NODE_ENV,
  http: {
    host: process.env.HTTP_HOST,
    port: parseInt(process.env.HTTP_PORT, 10),
  },

  kadco: {
    client_id: process.env.CLIENT_ID || '',
    client_secret: process.env.CLIENT_SECRET || '',
    grant_type: process.env.GRANT_TYPE || '',
  },
});
