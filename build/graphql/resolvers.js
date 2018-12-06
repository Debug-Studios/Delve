'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var resolvers = {
  Query: {
    hello: function hello(parent, _ref) {
      var name = _ref.name;
      return 'Hello ' + (name || 'World');
    },
    add: function add(parent, _ref2) {
      var a = _ref2.a,
          b = _ref2.b;
      return a + b;
    }
  }
};

exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map