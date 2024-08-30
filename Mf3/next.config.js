const NextFederationPlugin = require("@module-federation/nextjs-mf");
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  const NODE_ENV = process?.env?.NODE_ENV;

  return {
    home: `home@${process.env.NEXT_PUBLIC_HOME_BASE_URL}_next/static/${location}/remoteEntry.js`,
    checkout: `checkout@${process.env.NEXT_PUBLIC_CHECKOUT_BASE_URL}_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  // images: {
  //   domains: ["images.pexels.com"], // Add pixabay.com or any other domains you need
  // },

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shop",
        filename: "static/chunks/remoteEntry.js",
        dts: false,
        exposes: {
          "./shop": "./pages/index.js",
          "./pdp": "./pages/p/[...slug].js",
          "./pages-map": "./pages-map.js",
          "./f2/Component1": "./components/componentsF2/Component1.js",
          "./f2/Component2": "./components/componentsF2/Component2.js",
          "./f2/Component3": "./components/componentsF2/Component3.js",
          "./f2/Component4": "./components/componentsF2/Component4.js",
          "./f2/Component5": "./components/componentsF2/Component5.js",
          "./f2/Component6": "./components/componentsF2/Component6.js",
          "./f2/Component7": "./components/componentsF2/Component7.js",
          "./f2/Component8": "./components/componentsF2/Component8.js",
          "./f2/Component9": "./components/componentsF2/Component9.js",
          "./f2/Component10": "./components/componentsF2/Component10.js",
          "./f2/Component11": "./components/componentsF2/Component11.js",
          "./f2/Component12": "./components/componentsF2/Component12.js",
          "./f2/Component13": "./components/componentsF2/Component13.js",
          "./f2/Component14": "./components/componentsF2/Component14.js",
          "./f2/Component15": "./components/componentsF2/Component15.js",
          "./f2/Component16": "./components/componentsF2/Component16.js",
          "./f2/Component17": "./components/componentsF2/Component17.js",
          "./f2/Component18": "./components/componentsF2/Component18.js",
          "./f2/Component19": "./components/componentsF2/Component19.js",
          "./f2/Component20": "./components/componentsF2/Component20.js",
          "./f2/Component21": "./components/componentsF2/Component21.js",
          "./f2/Component22": "./components/componentsF2/Component22.js",
          "./f2/Component23": "./components/componentsF2/Component23.js",
          "./f2/Component24": "./components/componentsF2/Component24.js",
          "./f2/Component25": "./components/componentsF2/Component25.js",
          "./f2/Component26": "./components/componentsF2/Component26.js",
          "./f2/Component27": "./components/componentsF2/Component27.js",
          "./f2/Component28": "./components/componentsF2/Component28.js",
          "./f2/Component29": "./components/componentsF2/Component29.js",
          "./f2/Component30": "./components/componentsF2/Component30.js",

          "./f3/Component1": "./components/componentsF3/Component1.js",
          "./f3/Component2": "./components/componentsF3/Component2.js",
          "./f3/Component3": "./components/componentsF3/Component3.js",
          "./f3/Component4": "./components/componentsF3/Component4.js",
          "./f3/Component5": "./components/componentsF3/Component5.js",
          "./f3/Component6": "./components/componentsF3/Component6.js",
          "./f3/Component7": "./components/componentsF3/Component7.js",
          "./f3/Component8": "./components/componentsF3/Component8.js",
          "./f3/Component9": "./components/componentsF3/Component9.js",
          "./f3/Component10": "./components/componentsF3/Component10.js",
          "./f3/Component11": "./components/componentsF3/Component11.js",
          "./f3/Component12": "./components/componentsF3/Component12.js",
          "./f3/Component13": "./components/componentsF3/Component13.js",
          "./f3/Component14": "./components/componentsF3/Component14.js",
          "./f3/Component15": "./components/componentsF3/Component15.js",
          "./f3/Component16": "./components/componentsF3/Component16.js",
          "./f3/Component17": "./components/componentsF3/Component17.js",
          "./f3/Component18": "./components/componentsF3/Component18.js",
          "./f3/Component19": "./components/componentsF3/Component19.js",
          "./f3/Component20": "./components/componentsF3/Component20.js",
          "./f3/Component21": "./components/componentsF3/Component21.js",
          "./f3/Component22": "./components/componentsF3/Component22.js",
          "./f3/Component23": "./components/componentsF3/Component23.js",
          "./f3/Component24": "./components/componentsF3/Component24.js",
          "./f3/Component25": "./components/componentsF3/Component25.js",
          "./f3/Component26": "./components/componentsF3/Component26.js",
          "./f3/Component27": "./components/componentsF3/Component27.js",
          "./f3/Component28": "./components/componentsF3/Component28.js",
          "./f3/Component29": "./components/componentsF3/Component29.js",
          "./f3/Component30": "./components/componentsF3/Component30.js",
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
