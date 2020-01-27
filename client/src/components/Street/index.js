import React,
       { Component }            from 'react';

import map_1 from './../../assets/maps/map1.js';

import { StreetStyle, SideStreet, ContainerScenarie } from './styles';

import RaceData from './..//RaceData'
import Obstacle from './../Obstacle';

/**
 * Renderizo a estrada, faixa, carros e demais componente da estrada
 * 
 * @internal no path './../../assets/maps/map1.js' há um arquivo, a ideia 
 *           era permitir escolher multiplos mapas ou alterar a posicao dos obstaculos,
 *           aumentar a duracao da corrida, tudo por um arquivo de mapa
 */
class Street extends Component {

  constructor( props )
  {

    super();

    this.state = {
        finished: false, // Se a corrida ja foi finalizada
        position: 0,     // minha posicao em relacao ao mapa
        velocity: 1,     // Velocidade do veiculo
        started: false,  // Se a corrida ja comecou
        my_id: props.my_id ? props.my_id : null, // Meu ID
        socket: props.socket ? props.socket : null, // Web Socket Client
        cars: props.cars ? props.cars : [], // Carros na corrida
        seconds: 0, // Segundos na corrida
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
   * Processo o mapa e atualizo dados de posicao
   */
  processMap()
  {

    let self = this;
    let { funcFinishRace } = this.props;
    let { velocity, position, seconds } = this.state;

    setTimeout( () => {

        position++;

        if( position > map_1.map.length ){
            funcFinishRace( seconds )
            this.setState({ finished: true })
        } else {
            self.setState({ position: position })
            this.processMap();
        }

    }, ( ( 11 / velocity ) * 100 ) )

  }

  /**
   * Processo os obstaculos
   * 
   * @TODO
   */
  processObstacles()
  {

    let { position } = this.state;
    let { map } = map_1;

    let street = map.slice( position, ( parseFloat(position) + 5 ) );

    return street.map( ( obj_obstacles, i ) => {
        
        let distance = ( (i + 1) * 70 ) * -1;
        return <Obstacle positions={obj_obstacles.obstacles} distance={500-distance}/> 
    })

  }

  /**
   * Contador de segundos na corrida
   */
  counterTime()
  {

    let self = this;

    let interval = setInterval( () => {

        let { seconds, finished } = self.state;
                
        self.setState({
            seconds: ( seconds + 1 )
        })

        if( finished ){
            clearInterval( interval );
        }
        
    }, 1000 )

  }

  /**
   * Renderido e gernecio elementos da estrada
   */
  processStreet()
  {

    
    let { velocity, cars, started, position, socket } = this.state;
    let { map } = map_1;

    let stoped = velocity < 1 ? true : false

    let list_grass = ['','','','','','','','','','','','','',''];
    let list_tracks = ['','','','','','','','','','','','','']; 

    if( cars.length > 0 && started === false ){
        
        setTimeout( () => {
            this.processMap();
            this.counterTime();
            socket.emit('process_accelerator', {});
        }, 3000);

        this.setState({ started: true, velocity: 0 })
    }

    return (
        <div>
            
            <ContainerScenarie>

                <SideStreet velocity={velocity}>
                    <div className="left">
                        <div className="move-tracks" data-stoped={stoped}>
                            <ul>
                                { list_grass.map( ( obj, i ) => <li key={i}><div></div><div></div><div></div></li> ) }
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="move-tracks" data-stoped={stoped}>
                            <ul>
                                { list_grass.map( ( obj, i ) => <li key={i}><div></div><div></div><div></div></li> ) }
                            </ul>
                        </div>
                    </div>
                </SideStreet>

                <StreetStyle velocity={velocity}>
                    <div className="container-asphalt-tracks left">
                        <div className="move-tracks" data-stoped={stoped}>
                            {list_tracks.map( ( obj, i ) => <div key={i} style={{top: ( i * 80 ) }}></div> )}
                        </div>
                    </div>
                    <div className="container-asphalt-tracks right" >
                        <div className="move-tracks" data-stoped={stoped}>
                            {list_tracks.map( ( obj, i ) => <div key={i}></div> )}
                        </div>
                    </div>
                </StreetStyle>

               
                {
                    started
                    ? <RaceData
                        velocity={velocity}
                        loop={ map[position] ? map[position].loop : "--" }
                        percent={ ( ( 100/map.length ) * position ).toFixed(0) } 
                        />
                    : null
                }
                

                {cars}
                {this.processObstacles()}
                
            </ContainerScenarie>

        </div>
    )

  }

  render()
  {

    return (
        
        <div>
            {this.processStreet()}
        </div>
        
    );

  }

}

export default Street;
