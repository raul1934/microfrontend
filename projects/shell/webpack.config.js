const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "shell",
  remotes: {
    mfe1: "http://localhost:8101/remoteEntry.js",
    mfe2: "http://localhost:8102/remoteEntry.js",
  },
  exposes: {
    "./Component": "./projects/shell/src/app/app.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
