const NextFederationPlugin = require("@module-federation/nextjs-mf");
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  const NODE_ENV = process?.env?.NODE_ENV;

  return {
    shop: `shop@${process.env.NEXT_PUBLIC_SHOP_BASE_URL}_next/static/${location}/remoteEntry.js`,
    checkout: `checkout@${process.env.NEXT_PUBLIC_CHECKOUT_BASE_URL}_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        dts: false,
        exposes: {
          "./home": "./pages/index.js",
          "./store": "./store/index.js",
          "./BannerSection": "./components/BannerSection.js",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};
