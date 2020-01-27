// Dados de conexao para o mongodb
let mongo = require('mongodb');

let conn = function( dbName ){
	let db = new mongo.Db(
		dbName,
		new mongo.Server(
				'localhost', // Host onde esta do DB
				27017, 		 // Porta de Conexão
				{} 			 // Parametros de conexao como usar and pass
		),
		{}
	);
	return db;
}

module.exports = function(){
	return conn
}