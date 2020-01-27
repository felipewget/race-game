import { Block, ContainerBlock } from './styles';

import React,
       { Component } from 'react';

import { URL_FRONT } from './../../constants'



/**
 * Renderiza uma tela de espera que é atualizada com os usuarios em tempo real
 * antes de comecar a corrida
 */
class WaitingStartBlock extends Component {

  constructor( props )
  {

    super();

    this.state = {
        copyed: false,  // Existe um botao "copiar"(copiar link), essa variavel guarda se esse botao ja foi clicado
        ready: false,   // Se o usuario esta pronto para comecar a corrida
        room: props.room ? props.room : null, // ID da room
        socket: props.socket ? props.socket : null, // Websocket Socket Client
        users: props.users ? props.users : [] // Usuarios conectados
    };

    this.setReady = this.setReady.bind( this );

  }

  /**
   * Atualizo os states com as novas props
   * 
   * @param {*} props 
   * @param {*} prev_state 
   */
  static getDerivedStateFromProps( props, prev_state )
  {
      return props;
  }

  /**
   * Crio um label ao lado do nome, pra deixar mais bonita a listagem de usuarios na sala
   * 
   * @param {String} title 
   */
  getTitleAcronym( title )
  {

    let n_space = title.indexOf(" ");

    if( n_space > 0 ){

      let arr_title = title.split(" ");

      return ( arr_title[0].substr( 0, 1 ) + arr_title[1].substr( 0, 1 ) ).toUpperCase();

    } else {

      return title.substr( 0, 2 ).toUpperCase();

    }

  }

  /**
   * Retorno uma lista de usuarios conectados a sala
   */
  processlistUsers()
  {

    let {users} = this.state;

    return (
        <ul>
            {
                users.map( (obj, i ) => { 
                    return (
                        <li key={i}>
                            <i>{this.getTitleAcronym(obj.name)}</i>
                            {obj.name}
                            {
                                obj.ready_to_race && obj.ready_to_race === true
                                    ? <i className="ready icon-check"></i>
                                    : null
                            }
                        </li>
                    );
                })
            }
        </ul>
    )

  }

  /**
   * Acao de copiar o link para o CONTROL + C
   */
  async copyLink()
  {

    let { room } = this.state;

    let input = document.createElement('input');

    input.value = URL_FRONT + 'room/' + room;
    input.id = 'copy_field';

    await window.document.body.appendChild(input);

    input = await window.document.getElementById('copy_field');
    await input.focus();
    await input.select()
    await window.document.execCommand('copy')
    window.document.body.removeChild(input);

    await this.setState({ copyed: true })

  }

  /**
   * Seleciono como pronto para corrida
   * 
   * @internal ideia e que no multiplayer, todos cliquem em "estou pronto", antes
   *           da corrida comecar
   */
  async setReady()
  {

    let { socket, room } = this.state;
    
    socket.emit('set_ready_to_race', { room: room });
    this.setState({ ready: true });

  }
  
  render()
  {

    let { copyed, ready } = this.state;

    return (
        <ContainerBlock>
            <Block>
                <div>
                    <div className="header">
                      Competidores
                      <button onClick={() => this.copyLink()}>{ copyed === false ? "Copiar Link" : "Copiado" }</button>
                    </div>
                    {this.processlistUsers()}

                    {
                      ready 
                        ? (<p className="waiting-others-players">Aguardando os outros jogadores...</p>)
                        : <button className="ready" onClick={this.setReady}>Estou Pronto</button>
                    }
                    
                </div>
            </Block>
        </ContainerBlock>
    )

  }
}

export default WaitingStartBlock;
