import React,
       { Component }            from 'react';

import HomePanel from './../../components/HomePanel'
import LoadScreen from './../../components/LoadScreen'
import LeaderBoard from './../../components/LeaderBoard'
import { myData } from './../../utils/userUtil'
import { listTop10 } from './../../actions/leaderboardAction'

/**
 * Tela da Home
 */
class Home extends Component {

  constructor( props )
  {

    super();

    this.state = {
      loading: true, // Se a tela esta carregando
      nickname: null // Meu nickname
    };

  }

  // Apos a tela ser carregada, verifico se meu nickname ja esta gravado
  // de alguma outra sessao e tambem listo os melhores tempos de corrida
  async componentDidMount(){

    let response = await myData();
    let response_leaderboard = await listTop10();
    let { listRank } = response_leaderboard.data;
    
    if( response.success ){

      let { nickname } = response.metadata;

      this.setState({ 
        nickname: nickname, 
        loading: false,
        rank: listRank
      });

    } else {
      
      this.setState({ 
        loading: false,
        rank: listRank
      });

    }

  }

  /**
   * Renderizo uma tela de espera enquanto o componente carrega
   */
  renderLoading()
  {

    return <LoadScreen />
    
  }

  /**
   * Renderizo o painel de cadatro|ir para uma corrida 
   * e tambem a leaderboard
   */
  renderPanel()
  {

    let { nickname, rank } = this.state;

    return (
      <div>
        <HomePanel nickname={nickname} />
        <LeaderBoard 
          rank={rank}/>
      </div>
    )

  }

  render()
  {

    let { loading } = this.state;
    
    return loading  
            ? this.renderLoading()
            : this.renderPanel()

  }

}

export default Home;
