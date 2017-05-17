const path = require('path');

console.log(path.resolve('src'));

module.exports = ({
  src: path.resolve('src'),
  modules: path.resolve('node_modules'),
  assets: path.resolve('./public'),
  public: "/public/"
})

