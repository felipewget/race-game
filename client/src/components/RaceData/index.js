import { Block } from './styles';

import React,
       { Component }            from 'react';


/**
 * Painel com informacoes sobre a velocidade e o mapa 
 */
class RaceData extends Component {

  constructor( props )
  {

    super();

    this.state = {
        velocity: props.velocity ? props.velocity : 1, // Velocidade do Veiculo
        loop: props.loop ? props.loop : '--',          // Numero da volta
        percent: props.percent ? props.percent : '--', // Porcentagem do percurso que ja percorri
    };

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

  render()
  {

    let { velocity, loop, percent } = this.state;

    return (
        <Block>
            <div>
                <ul>
                <li>Velocidade: {velocity * 10}</li>
                <li>Volta: {loop}</li>
                <li>% Percurso: {percent}%</li>
                    
                </ul>
            </div>
        </Block>
    );

  }

}

export default RaceData;
