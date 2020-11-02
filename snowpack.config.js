module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-typescript'],
  install: [
    'htm'
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
