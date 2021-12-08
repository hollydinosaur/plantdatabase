module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: "4.0.3",
      skipMD5: true,
    },
    instance: {
      dbName: "jest",
    },
    autoStart: false,
  },
};

// module.exports = {
//   mongodbMemoryServerOptions: {
//     binary: {
//       version: '4.0.3',
//       skipMD5: true,
//     },
//     instance: {},
//     autoStart: false,
//   },
//   mongoURLEnvName: 'MONGODB_URI',
// };
