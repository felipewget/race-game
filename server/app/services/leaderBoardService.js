/**
 * leaderBoardService
 *
 * @description Contem servicos relacionado a leaderboard
 */
 var leaderBoardService = function() {} // leaderBoardService constructor

/**
 *	Lista o top 10 de tempo nas corridas
 */
leaderBoardService.prototype.listLeaderBoard = async () => {

	try {

		let conn 			= require("./../../config/dbConnect");
		let leaderBoardDAO 	= require("../models/leaderBoardDAO");

		leaderBoardDAO 	= new leaderBoardDAO( conn );
		let response 		= await leaderBoardDAO.listTopSeconds();

		return response;

	} catch( e ){
		console.log("Erro ao listar leaderboards: ", e.message )
	}

}

/**
 * Salva um novo registro de tempo no leaderboard
 */
leaderBoardService.prototype.saveLeaderBoard = async ( params ) => {

	try {

		let conn 			= require("./../../config/dbConnect");
		let leaderBoardDAO 	= require("../models/leaderBoardDAO");

		leaderBoardDAO 	= new leaderBoardDAO( conn );
		let response 		= await leaderBoardDAO.saveRecord( params );

		return response;

	} catch( e ){
		console.log("Erro ao salvar leaderboards: ", e.message )
	}

}

















/**
 *	Faz loggout do token
 *
 *	@param string token
 *	@param obj 		app
 */
leaderBoardService.prototype.logout = async function( token, app ) {

	var conn 							= require("./../../config/dbConnect");
	let sessionsDAO 	= new app.app.models.sessionsDAO( conn );

	var response = {};

	try {

		let logout_response = await sessionsDAO.deleteSession( token );
		return logout_response;

	} catch ( e ) {

		response = {
			success: false,
			metadata: {
				error 		: "Problema interno",
				message 	: "Houve um erro interno, nossos engenheiros ja receberam o log estao trabalhando no caso"
			}
		}

		// Save error log
		let logService 	= new ( require("./logService.js") )();

		var obj_log 	 		= {
			controller 		: 'leaderBoardService',
			method 				:	'logout',
			error 				: e.message,
			method_params	: {
				token		: token,
			},
			show_to_user: response
		};
		await logService.saveLog( obj_log, 'error', app );

		return response;

	}

}


leaderBoardService.prototype.updatePassword = async function( params, app )
{

	try {

    // editUser

    var conn 							= require("./../../config/dbConnect");
  	let usersDAO 	= new app.app.models.usersDAO( conn );

    let formUtil 				  = new app.app.utils.formUtil;
    let tokensUtil 				= new app.app.utils.tokensUtil;

    let {
  		auth_token,
  		actual_password,
  		new_password
  	} = params;

    let leaderBoardService 	= new ( require("./leaderBoardService.js") )();
    var conn	   = require("./../../config/dbConnect");

    let response_auth = await leaderBoardService.isAuthenticated( auth_token, app );

    if( response_auth.success && response_auth.metadata && response_auth.metadata.authenticated == true ){

      if( !formUtil.checkHasValue( new_password ) && !formUtil.checkHasValue( actual_password ) ){
        throw new Error(" senha atual ou nova senha nao preenchida")
      }

      if( !formUtil.checkPassword( new_password ) ){
        throw new Error("password invalido")
      }

      let actual_password_hash	= await tokensUtil.createUserPasswordToken( actual_password );
      let new_password_hash	    = await tokensUtil.createUserPasswordToken( new_password );

      let ObjectId            = require('mongodb').ObjectId;

      let object_user_id = new ObjectId( response_auth.metadata.user_id );
      let object_acc_id =  new ObjectId( response_auth.metadata.acc_id );

      let response_user = await usersDAO.getUserByEmail( object_acc_id, response_auth.metadata.email );

      if( response_user.success == true ){

        let obj_user = response_user.metadata[0].users[0];

        // @TODO continuar aki
        // check se acc_id e user_id e igual ao hash
        // actual_password_hash
        if( obj_user.auth.password == actual_password_hash.password ){

          obj_user.updated  = Date.now();
          obj_user.auth.password = new_password_hash.password;

          await usersDAO.deleteUserByEmail( object_acc_id, response_auth.metadata.email );
          let new_user = await usersDAO.createUser( object_acc_id, obj_user );

          return {
            success: true,
            metadata : new_user
          };

        } else {

          return {
            success : false,
            error   : "Senha atual invalida"
          }

        }

      } else {

        return {
          success : false,
          error   : "Erro ao atualizar a senha"
        }

      }

    } else {

      return {
        success : false,
        error   : "Autenticacao Invalida"
      }

    }

		// let logout_response = await sessionsDAO.deleteSession( token );
		// return logout_response;

	} catch ( e ) {

		response = {
			success: false,
			metadata: {
				error 		: "Problema interno",
				message 	: "Houve um erro interno, nossos engenheiros ja receberam o log estao trabalhando no caso"
			}
		}

		// Save error log
		let logService 	= new ( require("./logService.js") )();

		var obj_log 	 		= {
			controller 		: 'leaderBoardService',
			method 				:	'updatePassword',
			error 				: e.message,
			method_params	: params,
			show_to_user: response
		};
		await logService.saveLog( obj_log, 'error', app );

		return response;

	}

}

module.exports = leaderBoardService;
