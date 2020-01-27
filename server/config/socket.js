module.exports = function(io){

	io.sockets.on('connection', function( client ){

		// Entra numa sala de corrida
		client.on('authenticate', async ( params ) => {

			let { room_name } = params;

			client.join( room_name );

			io.of('/').in( room_name ).clients(function(error,clients){
				
				// Retorna para o usuario seu ID unico dentro da sala e se
				// a autenticacao teve sucesso
				client.emit('connected', {
					success: true,
					users: clients.map( ( obj => { 
						return {
							ready_to_race: io.sockets.sockets[obj].handshake.query.ready_to_race,
							name: io.sockets.sockets[obj].handshake.query.name,
							id: io.sockets.sockets[obj].handshake.query.token
						}
					})),
					id: client.handshake.query.token
				})

				// Emite para o restante dos participantes da sala uma lista autalizada
				// de usuarios na sala
				client.broadcast.to( room_name ).emit('room_users', {
					success: true,
					users: clients.map( ( obj => { 
						return {
							ready_to_race: io.sockets.sockets[obj].handshake.query.ready_to_race,
							name: io.sockets.sockets[obj].handshake.query.name,
							id: io.sockets.sockets[obj].handshake.query.token
						}
					}))
				})
		        
			});
			
			// Usuario seta como pronto para corrida, atualizo o usuario e emito um broadcast com usuarios atualizados
			client.on('set_ready_to_race', async ( params ) => {

				let { room } = params;

				client.handshake.query.ready_to_race = true

				io.of('/').in( room ).clients(function(error,clients){
	
					client.emit('room_users', {
						success: true,
						users: clients.map( ( obj => { 
							return {
								ready_to_race: io.sockets.sockets[obj].handshake.query.ready_to_race,
								name: io.sockets.sockets[obj].handshake.query.name,
								id: io.sockets.sockets[obj].handshake.query.token
							}
						}))
					})

					client.broadcast.to( room ).emit('room_users', {
						success: true,
						users: clients.map( ( obj => { 
							return {
								ready_to_race: io.sockets.sockets[obj].handshake.query.ready_to_race,
								name: io.sockets.sockets[obj].handshake.query.name,
								id: io.sockets.sockets[obj].handshake.query.token
							}
						}))
					})

				})
	
			})

			// Cliente pede para virar para esquerda,
			// servidor envia para o msm cliente, para o component de seu ID 
			client.on('process_turn_right', async ( params ) => {
				client.emit('turn_right');
			});

			// Cliente pede para virar para direita,
			// servidor envia para o msm cliente, para o component de seu ID 
			client.on('process_turn_left', async ( params ) => {
				client.emit('turn_left');
			});

			// Cliente pede para acelerar,
			// servidor envia para o msm cliente, para o component de seu ID 
			client.on('process_accelerator', async ( params ) => {
				client.emit('accelerator');
			});

			// Cliente pede para freiar,
			// servidor envia para o msm cliente, para o component de seu ID 
			client.on('process_stop', async ( params ) => {
				client.emit('stop');
			});

			// Um participante se desconectou do WS na sala,
			// Atualizo os usuarios conectados na sala
			client.on('disconnect', function(){

				io.of('/').in( room_name ).clients(function(error,clients){

					client.broadcast.to( room_name ).emit('room_users', {
						success: true,
						users: clients.map( ( obj => { 
							return {
								ready_to_race: io.sockets.sockets[obj].handshake.query.ready_to_race,
								name: io.sockets.sockets[obj].handshake.query.name,
								id: io.sockets.sockets[obj].handshake.query.token
							}
						}))
					})

				})
				
			});

		});
	});

}
