import React,
       { Component }            from 'react';

import Car    from './../../components/Car'
import Street from './../../components/Street'

import { URL_WS } from './../../constants';
import io         from 'socket.io-client';

import WaitingStartBlock  from './../../components/WaitingStartBlock'
import CounterToBegin     from './../../components/CounterToBegin'
import LoadRoomBlock      from './../../components/LoadRoomBlock'
import HomePanel          from './../../components/HomePanel'
import FinishedRaceBlock  from './../../components/FinishedRaceBlock'
import Sky                from './../../components/Sky' 
import { myData }         from './../../utils/userUtil'

/**
 * Tela da corrida
 */
class Race extends Component {

  constructor()
  {

    super();

    this.state = {
      seconds   : 0,      // Segundos na corrida
      finished  : false,  // Se a corrida ja foi conluida
      my_id     :  null,  // Meu ID, uma vez ligado via WS com o servidor
      users     : [],     // Usuarios conectados a sala
      loading_data: true, // Se esta carregando os dados de usuario
      room      : null,   // ID da sala
      velocity  : 0,      // Velocidade do Veiculo
    };

    this.componentDidMount  = this.componentDidMount.bind(this);
    this.manageControls     = this.manageControls.bind( this );
    this.manageStopControls = this.manageStopControls.bind( this );
    this.updateVelocity     = this.updateVelocity.bind( this );
    this.finishRace         = this.finishRace.bind(this);

  }

  /**
   * Apos o componente ser incializado, recupero os meus dados e me autentico
   * no WebSocket para emitir e receber eventos
   */
  async componentDidMount(){

    document.title    = "The Race Game";

    // Recupero meus dados para conectao ao WS
    let response = await myData();

    if( response.success ){
      
      let room_name = this.props.match.params.room_id;
      let name  = response.metadata.nickname;
      let token = response.metadata.token;

      let socket = await io( URL_WS, {query:`name=${name}&token=${token}&ready_to_race=false`} );

      // Autenticacao no WS
      socket.emit('authenticate', {
        name: name,
        token: token,
        room_name: room_name
      })

      // Uma vez conectado, atualizo minhas variaveis de usuario
      // e informacoes como se estou pronto pra inciar a corrida
      socket.on('connected', async ( params ) => {

        if( params.success ){ 

          this.setState({
            my_id: params.id,
            users: params.users,
            ready_to_race: params.ready_to_race,
            socket: socket,
            room: room_name,
            loading_data: false,
          })

        }

      })

      // Atualizo os usuarios da sala
      socket.on('room_users', async ( params ) => {

        if( params.success ){ 
          await this.setState({ users: params.users });
        }

      })

      // Evento de apertar e soltar a tecla
      // @internal Criei o acelerador ao inves do nitro porem nao consegui comecar
      //           o evento de nitro que iria usar o keydown para inicializar o nitro
      //           e o keyup pra finalizar o periodo de uso do nitro(tecla space)
      document.addEventListener("keydown", this.manageControls, false);
      document.addEventListener("keyup", this.manageStopControls, false);

    } else {
      this.setState({
        loading_data: false,
      })
    }

  }

  /**
   * Regencia eventos de soltar a tecla
   * 
   * @param {*} event 
   */
  manageStopControls( event )
  {

    let { socket } = this.state;

    if( socket === null ){
      return null;
    }

  }

  /**
   * Regencia eventos de apertar uma tecla
   * 
   * @param {*} event 
   */
  manageControls( event )
  {

    let { socket } = this.state;

    if( socket === null ){
      return null;
    }

    switch( event.keyCode ){

      // Turn Right
      case 39:
      case 68:
        socket.emit('process_turn_right', {});
        break;
      
      // Turn Left
      case 65:
      case 37:
        socket.emit('process_turn_left', {});
        break;

      // ESC - Pause/Dispause
      case 27:
        socket.emit('process_pause', {});
        break;

      // Up - Accelerator
      case 38:
      case 87:
        socket.emit('process_accelerator', {});
        break;

      // Down - Stop
      case 40:
      case 83:
        socket.emit('process_stop', {});
        break;

      // Space - Nitro
      case 32:

        break;
      default:
        break;
      
    }

  }

  /**
   * Processa os carros que serao listados na corrida(ja pensando no multiplayer)
   */
  processCars()
  {

    let { users, socket, my_id } = this.state;
    return users.map( ( data ) => <Car id={ data.id } socket={socket} me={ data.id === my_id ? true : false } funcUpdateVelocity={this.updateVelocity} />);

  }

  /**
   * Atualiza a velocidade do veiculo
   * 
   * @param {Int} new_velocity 
   */
  updateVelocity( new_velocity )
  {
    this.setState({ velocity: new_velocity })
  }

  /**
   * Retorna os segundos para serem atualizados apos terminar a corrida
   * 
   * @param {Int} seconds 
   */
  finishRace( seconds )
  {

    this.setState({
      finished: true,
      velocity: 1,
      seconds: seconds
    })

  }

  /**
   * Renderiza o componente na corrida
   */
  renderRace()
  {

    let cars = this.processCars();
    let { socket, velocity, finished, seconds } = this.state;

    // Se ja foi finalizada, mostra a tela de corrida finalizada, se nao, 
    // renderiza a corrida
    return finished
          ? (
            <div>
              <FinishedRaceBlock
                seconds={seconds} />
              <Sky />
              <Street 
                cars={[]}/>
            </div>
          )
          : (
              <div>
                  <CounterToBegin></CounterToBegin>
                  <Sky />
                  <Street 
                    funcFinishRace={this.finishRace}
                    velocity={velocity}
                    socket={socket}
                    cars={ cars }/>
                  
              </div>
          );

  }

  /**
   * Renderiza telas de espera
   */
  renderLoading()
  {

    let { users, socket, room, my_id, loading_data } = this.state
    
    if( loading_data === true ){

      return (
        <div>
          <LoadRoomBlock />
          <Sky />
          <Street 
            cars={[]}/>

        </div>

      )

    } else {

      return my_id === null
              ? (
                <div>
                  <HomePanel room_id={room} />
                  <Sky />
                  <Street 
                    cars={[]}/>
                </div>
              )
              : (
                <div>

                  <div>
                    <WaitingStartBlock 
                      socket={socket}
                      users={users}
                      velocity={5}
                      room={room}/>
                  </div>

                  <Sky />
                  <Street 
                    cars={[]}/>

                </div>
              );

    }
  }

  render()
  {

    let { users } = this.state;
    let users_not_ready =  users.filter( user => !user.ready_to_race || user.ready_to_race !== true );
    
    return users_not_ready.length === 0 && users.length > 0
            ? this.renderRace()
            : this.renderLoading()

  }

}

export default Race;
