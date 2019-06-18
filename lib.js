var Provider = require("susybraid-core/lib/provider");
var Server = require("susybraid-core/lib/server");

// This interface exists so as not to cause breaking changes.
module.exports = {
  server: function(options) {
    return Server.create(options);
  },
  provider: function(options) {
    return new Provider(options);
  }
};
