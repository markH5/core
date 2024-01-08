// eslint-disable-next-line node/no-unpublished-require
const { ConsumeSharedPlugin } = require('../../../../dist/src');

/** @type {import("../../../../").Configuration} */
module.exports = {
  output: {
    ignoreBrowserWarnings: true,
  },
  plugins: [
    new ConsumeSharedPlugin({
      consumes: {
        shared: {
          import: false,
          strictVersion: true,
        },
        shared2: {
          import: false,
        },
      },
    }),
  ],
};
