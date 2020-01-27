
import { Block } from './styles';

import React,
       { Component }            from 'react';

/**
 * Um bloco de loading enquanto carrego meus dados e me coneto ao websocket
 * Antes de entrar na lista de competidores na sala
 */
class LoadRoomBlock extends Component {

  componentDidMount(){}

  render()
  {

    return (
      <Block>
            <div>
                <i className="icon-loopsync"></i>
                <p>Carregando seus dados...</p>
            </div>
      </Block>
    );

  }

}

export default LoadRoomBlock;
