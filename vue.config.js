// module.exports = {
//     devServer: {
//         proxy: {
//             '^/api': {
//                 target: 'http://localhost:8080',
//                 changeOrigin: true
//             }
//         }
//     }
// };

module.exports = {
    devServer: {
      before: function (app) {
        app.use(cors());
      },
    },
  };
  