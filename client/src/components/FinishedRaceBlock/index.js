
import { Block } from './styles';

import React,
       { Component }        from 'react';

import { gerateRoomToken }  from './../../utils/tokenUtil' 
import { myData }           from './../../utils/userUtil'
import { saveRecord }       from './../../actions/leaderboardAction'

/**
 * Bloco que indica que a corrida terminou
 */
class FinishedRaceBlock extends Component {

  constructor( props )
  {
    super();

    this.state = {
      seconds: props.seconds ? props.seconds : 0 // Segundos a corrida durou
    }

  }

  /**
   * Nao apenas mostra o segundo mas guarda os dados em uma base de dados
   */
  async componentDidMount(){

    let { seconds } = this.state;

    let response = await myData();

    if( response.success ){

      if( seconds > 0 ){
        saveRecord( response.metadata.nickname, seconds )
      }
      
    }

  }

  /**
   * Ao clicar no botao "ir para outra corrida", o usuario
   * e direcionado para outra sala
   */
  async switchOtherRoom()
  {

    let hash = await gerateRoomToken();     
    window.location.href="/room/" + hash

  }

  render()
  {

    let { seconds } = this.state;

    return (
      <Block>
        <div>
            <h1>Parabéns! Você completou todo o percurso da corrida</h1>
            <p data-description>Seu tempo foi:</p>
            <p data-time>{seconds} Segundos</p>
            <button onClick={() => this.switchOtherRoom() }>Ir para outra corrida</button>
        </div>
      </Block>
    );

  }

}

export default FinishedRaceBlock;
