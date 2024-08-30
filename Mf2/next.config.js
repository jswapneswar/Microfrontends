const NextFederationPlugin = require("@module-federation/nextjs-mf");
const packages = require("./package.json");

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  const NODE_ENV = process?.env?.NODE_ENV;

  return {
    home: `home@${process.env.NEXT_PUBLIC_HOME_BASE_URL}/_next/static/${location}/remoteEntry.js`,
    shop: `shop@${process.env.NEXT_PUBLIC_SHOP_BASE_URL}_next/static/${location}/remoteEntry.js`,
    // remoteReact1: `remoteReact1@http://localhost:3009/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "checkout",
        filename: "static/chunks/remoteEntry.js",
        dts: false,
        exposes: {
          "./title": "./components/exposedTitle.js",
          "./NextToReact": "./components/NextToReact.js",
          "./checkout": "./pages/checkout.js",
          "./pages-map": "./pages-map.js",
          "./CheckoutPage": "./pages/index.js",
          "./CompWithApiData": "./pages/Serverpage.js",

          "./NextToReact": "./components/NextToReact.js",
          "./checkoutC1": "./components/checkoutC1",
          "./checkoutC2": "./components/checkoutC2",
          "./checkoutC3": "./components/checkoutC3",
          "./checkoutC4": "./components/checkoutC4",
          "./checkoutC5": "./components/checkoutC5",
          "./checkoutC6": "./components/checkoutC6",
          "./checkoutC7": "./components/checkoutC7",
          "./checkoutC8": "./components/checkoutC8",
          "./checkoutC9": "./components/checkoutC9",
          "./checkoutC10": "./components/checkoutC10",
          "./checkoutC11": "./components/checkoutC11",
          "./checkoutC12": "./components/checkoutC12",
          "./checkoutC13": "./components/checkoutC13",
          "./checkoutC14": "./components/checkoutC14",
          "./CompWithApiDataComp": "./components/f2/CompWithApiData",
          "./BannerSection": "./components/f2/BannerSection.js",
        },
        remotes: remotes(options.isServer),
        // shared: packages.dependencies,
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};
