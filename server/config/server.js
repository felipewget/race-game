
try {

  // GraphQL
  let { GraphQLServer } = require('graphql-yoga');

  // Para REST vou usar o GraphQL porem vou separa as rotas RESTS das de WS, que vou usar com Socket.io
  let server_socket = require('socket.io');

  // Path, usado pra pegar os schemas do Graphql
  let path      = require('path');

  // Resolvers para pegar o "resolvedores", similar as "routes" que chamam os controllers
  let resolvers = require('./../app/routes/resolvers');

  // Configuro o servidor de GraphQl
  let server = new GraphQLServer({
    typeDefs : path.resolve( __dirname + '/../app/routes/', 'schema.graphql' ),
    resolvers: resolvers
  });

  // Inicio o servidor de GraphQl
  server.start(( response ) => {
    let { port } = response;
    console.log('Servidor REST - ON | Porta: ' + port )
  });

  let io = new server_socket( process.env.SOCKET_PORT );
  let sockets = require('./socket')(io);
  console.log('Servidor WS - ON | Porta: ' + process.env.SOCKET_PORT )

} catch ( e ){

  console.log( "Houve um arro ao tentar startar o servidor.")
  console.log( "Msg: " + e.message);

}