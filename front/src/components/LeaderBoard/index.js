import React,
       { Component }            from 'react';

import { Board } from './styles';

/**
 * Painel de Leaderboard
 */
class LeaderBoard extends Component {

  constructor( props )
  {

    super();

    this.state = {
        status: "closed",                   // Se o painel esta aberto ou fechado<opened|closed>
        rank: props.rank ? props.rank : []  // Colecao com dados dos melhores rempos
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
   * Se o painel estiver aberto, ao clicar no botao, chego o painel e vice versa
   */
  async toggleBoard()
  {

    let { status } = this.state

    status = status === "closed"
                ? "opened"
                : "closed"

    await this.setState({ status: status })

  }

  render()
  {

    let { status, rank } = this.state;

    return (
        <Board>
            <div data-status={status} className="container-board">
                <button className="icon-flag" onClick={() => this.toggleBoard()}></button>
                <div className="board">
                    <div className="header">Rank</div>
                    <ul>
                        { rank.map( obj => <li><i className="icon-flag"></i><span>{obj.name}</span><span data-time>{obj.seconds}seg</span></li>)}
                    </ul>
                </div>
            </div>
        </Board>
    )

  }

}

export default LeaderBoard;
