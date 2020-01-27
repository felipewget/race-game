/**
 * Collection leaderBoardDAO
 *
 * @description Este DAO representa as acoes realizadas na colllection leaderboard
 *
 * @version 	0.0.1
 */
function leaderBoardDAO( connection ){

	this._db_name			= process.env.DB;
	this._conn 				= connection( this._db_name );
	this._collection_name 	= "leaderboard";

}


/**
 *	Lista os 10 tops seconds
 *
 *	@internal In SQL: SELECT name, seconds FROM leaderboard ORDER BY seconds DESC LIMIT 10;
 */
leaderBoardDAO.prototype.listTopSeconds = async function()
{

	let self = this;
	let fields = { name: 1, seconds: 1 };
	let query = {};

  	let mongoclient = await this._conn( self._db_name ).open();
  	let collection  = await mongoclient.collection( self._collection_name );
  	let response    = await collection.find( query, fields ).sort({seconds: 1}).limit(10).toArray();

	mongoclient.close();

	return response;

}

/**
 * Salva um novo Record
 * 
 * @internal In SQL: INSERT INTO leaderboard ( name, seconds ) VALUES ( '---', '----' );
 */
leaderBoardDAO.prototype.saveRecord = async function( obj )
{

	let self = this;

  	let mongoclient = await this._conn( self._db_name ).open();
  	let collection  = await mongoclient.collection( self._collection_name );
  	await collection.save( obj );

	mongoclient.close();

	return obj;

}

module.exports = leaderBoardDAO;
