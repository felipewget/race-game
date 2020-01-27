import React,
       { Component }            from 'react';

import { StyleCounter } from './styles';

/**
 * Um contador de 3,2,1, vai! no inicio da corrida
 */
class CounterToBegin extends Component {

  constructor( props )
  {

    super();

    this.state = {
        since: 3 // Contar decrementando a partir do valor na variavel since
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

  /**
   * Renderizo o contador enquanto o valor de "since" for maior que 0(vai! é 0)
   */
  renderCounter()
  {

    let { since } = this.state;
    let self = this;

    setTimeout( () => {

        since--;

        self.setState({
            since: since
        });

    }, 1000 )

    return (
        <StyleCounter>
        <div>
            {
                since > 0
                    ? <i className={"icon-filter_" + since}></i>
                    : <p>Vai!</p>
            }
        </div>
        </StyleCounter>
    )
  }

  render()
  {

    let { since } = this.state;

    return since < 0
            ? null
            : this.renderCounter()

  }

}

export default CounterToBegin;
