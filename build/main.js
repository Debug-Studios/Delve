'use strict';

var _graphqlYoga = require('graphql-yoga');

var _resolvers = require('./graphql/resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = 'src/graphql/schema.graphql';
console.log(typeDefs);

var server = new _graphqlYoga.GraphQLServer({ typeDefs: typeDefs, resolvers: _resolvers2.default });

var opts = {
  port: process.env.PORT || 4000
};

server.start(opts, function () {
  console.log('Server is running on port', opts.port);
});
//# sourceMappingURL=main.js.map