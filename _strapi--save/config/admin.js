module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8523ab7f6246de0d56e60ac252c3fcb5'),
  },
});
