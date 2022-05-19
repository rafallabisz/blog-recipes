module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    proxy:true,
    app: {
        keys: env.array("APP_KEYS",['keys','keys'])
        // keys: env.array("APP_KEYS")
    }
    // host: env('HOST', '0.0.0.0'),
    // port: env.int('PORT', 1337),
    // admin: {
    //   auth: {
    //     secret: env('ADMIN_JWT_SECRET', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    //   },
    // },
  });