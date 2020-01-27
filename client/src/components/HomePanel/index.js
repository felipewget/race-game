
import { Panel } from './styles';

import React,
       { Component }                    from 'react';

import { writeData }                    from './../../utils/userUtil'      
import { gerateToken, gerateRoomToken } from './../../utils/tokenUtil' 

/**
 * Todo usuario necessita de um nome e um token para se conctar a uma corrida,
 * esse painel contem o input "apelido" para o competidor de cadastrar
 */
class HomePanel extends Component {

  constructor( props )
  {

    super();

    this.state = {
        name: props.nickname ? props.nickname : "",     // Nickname
        room_id: props.room_id ? props.room_id : null,  // ID da sala, se houver, redireciona para 
                                                        // uma sala especifica, se nao, cria uma sala nova
    };

    this.saveData = this.saveData.bind(this);

  }

  updateState( key, value )
  {

      this.setState({
        [key]: value
      });

  }

  /**
   * Grava meus dados em LocalStorage e me direciona para uma corrida
   * 
   * @param {*} e 
   */
  async saveData( e )
  {

    e.preventDefault();

    let { name, room_id } = this.state;
        
    let token = await gerateToken();
    let response = await writeData( name, token );

    if( response.success ){
        let hash = room_id !== null 
                    ? room_id
                    : await gerateRoomToken(); 
        
        window.location.href="/room/" + hash
    }

  }

  render()
  {

    let { name, room_id } = this.state;
    
    return (
        <Panel>
          <div>
              <div className="controls">
                  <div>Controles</div>
                  <p><span>A ou Left</span> - Ir para a pista da direita</p>
                  <p><span>D ou Right</span> - Ir para a pista da esquerda</p>
                  <p><span>W ou Up</span> - Acelerar(substitui o turbo)</p>
                  <p><span>S ou Down</span> - Desacelerar</p>
                  <p><span>ESC</span> - Pausar(Apenas no Single Player)</p>
              </div>
              <div className="register" >
                  <p>The Race Game</p>
                  
                  <form onSubmit={this.saveData}>
                    
                    <div>
                      <i className="icon-user"></i>
                      
                          <input  type="text" 
                                  placeholder="Digite nickname" 
                                  onChange={( e ) => { this.updateState( "name", e.target.value) }} 
                                  value={name} />
                    </div>

                    <button>
                      {
                        room_id !== null 
                          ? "Entrar na Sala"
                          : "Criar uma Corrida"
                      }
                    </button>

                  </form>
              </div>
          </div>
        </Panel>
    )

  }

}

export default HomePanel;
