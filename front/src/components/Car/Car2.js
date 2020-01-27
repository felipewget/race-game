import { StyleCar2 as StyleCar } from './styles';

import React,
       { Component }            from 'react';

/**
 * Renderizo o carro modelo 2
 */
class Car2 extends Component {

  constructor( props )
  {

    super();

    this.state = {
      direction: "ahead",    // Direcao do carro<ahead|left|right>
      position_on_street: 0, // Faixa da estrata<-1,0,1)
      velocity: 1,           // Velocidade do veiculo
      max_velocity: 10,      // Velocidade Maxima 
      min_velocity: 1,       // Velocidade minima
      socket: props.socket ? props.socket : null, // WebSocket Client
      me: props.me ? props.me : false, // Se for o meu carro, eu vejo so quem esta a frente
                                       // mas meu carro nao avaca no mapa
    };

    this.processScaleCar.bind( this );
    this.processPositionOnStreet.bind( this );

  }
  
  /**
   * Se for permitido, troco para faixa da esquerda
   */
  switchToLeftPosition()
  {

    let { position_on_street } = this.state;
    let self = this;

    if( position_on_street > -1 ){
      position_on_street--;
      
      this.setState({
        direction: "left",
        position_on_street: position_on_street,
      })

    }

    setTimeout( () => {

      self.setState({
        direction: "ahead",
      })

    }, 600)

  }

  /**
   * Se for permitido, troco para faixa da direita
   */
  switchToRightPosition()
  {

    let { position_on_street } = this.state;
    let self = this;

    if( position_on_street < 1 ){
      position_on_street++;
      
      this.setState({
        direction: "right",
        position_on_street: position_on_street,
      })

    }

    setTimeout( () => {

      self.setState({
        direction: "ahead",
      })

    }, 600)

  }

  /**
   * Apos carrega o componente e se o carro for o do meu ID, ouco evento do websocket
   * 
   * @internal Todos eventos sao enviados ao websocket e de la, ele direciona os veiculos,
   *           ajuda no multiplayer
   */
  componentDidMount(){

    let self = this;
    let { funcUpdateVelocity } = this.props;
    let { socket, me, velocity, max_velocity, min_velocity } = this.state;

    if( me && socket !== null ){

      socket.on('accelerator', () => {

        
        if( ( velocity + 1 ) <= max_velocity ){
          ++velocity;
          this.setState({ velocity: velocity })
          funcUpdateVelocity( velocity );
        }

      })

      socket.on('stop', () => {

        if( (velocity - 1 ) >= min_velocity ){
          velocity--;
          this.setState({ velocity: velocity })
          funcUpdateVelocity( velocity );
        }

      })

      socket.on('turn_left', async () => {
        self.switchToLeftPosition();
      });

      socket.on('turn_right', async () => {
        self.switchToRightPosition();
      });

      socket.on('accelerator', () => {

      })

      socket.on('stop', () => {

      })

    }

  }

  /**
   * Processa a distancia do carro e aplica o efeito scale pra quando o carro esta mais longe
   * 
   * @param {INT} distance_bottom 
   */
  processScaleCar( distance_bottom )
  {

    distance_bottom = distance_bottom < 0
                      ? distance_bottom * -1
                      : distance_bottom;

    return distance_bottom * 0.006;

  }

  /**
   * Calculo a posicao em graus do veiculo e o redimenciono
   * 
   * @param {Int} distance_bottom 
   * @param {Int} position_on_street 
   */
  processPositionOnStreet( distance_bottom, position_on_street )
  {

    distance_bottom = distance_bottom < 0
                      ? distance_bottom * -1
                      : distance_bottom;    

    let root_distance = ( 350 - distance_bottom  ); // from the centre of orbit
    let x;
    let degrees;
    let radians;
    
    switch( position_on_street ){

      case -1:
        degrees = 140;
        radians = degrees * (Math.PI / 180);
        x = Math.cos(radians) * root_distance;
        return 250 - x

      case 0:
        return 600

      case 1:
        degrees = 40;
        radians = degrees * (Math.PI / 180);
    
        x = Math.cos(radians) * root_distance;
        return 950 - x
        
      default:
        break;

    }

  }

  render()
  {

    let { direction, me, position_on_street } = this.state;

    return (
        
        <div>
            <StyleCar me={me}
                      position_on_street={position_on_street}
                      funcProcessScale={this.processScaleCar}
                      funcPositionOnStreet={this.processPositionOnStreet}>
<div>

<div id="showcase" data-direction={direction} data-position-on-street={position_on_street}>
  <div class="camera">
    <div class="shadow">
      <div class="blur"></div>
    </div>
    <div class="car">
      <div class="body">
        <div class="front">
          <div class="bumper">
            <div class="aero">
              <div class="parts"></div>
            </div>
          </div>
          <div class="bonnet">
            <div class="aero">
              The One
              <div class="parts"></div>
            </div>
          </div>
          <div class="headlight headlight_left">
            <div class="headlight_cover"></div>
            <div class="headlight_unit"></div>
            <div class="headlight_unit_left"></div>
            <div class="headlight_unit_right"></div>
          </div>
          <div class="headlight headlight_right">
            <div class="headlight_cover"></div>
            <div class="headlight_unit"></div>
            <div class="headlight_unit_left"></div>
            <div class="headlight_unit_right"></div>
          </div>
          <div class="fender fender_left">
            <div class="aero">
              <div class="parts"></div>
            </div>
            <div class="panel"></div>
          </div>
          <div class="fender fender_right">
            <div class="aero">
              <div class="parts"></div>
            </div>
            <div class="panel"></div>
          </div>
          <div class="under"></div>
        </div>
        <div class="cockpit">
          <div class="inner inner_front"></div>
          <div class="inner inner_back"></div>
          <div class="window window_front"></div>
          <div class="roof">
            <div class="roof_top"></div>
            <div class="roof_back window"></div>
            <div class="roof_left"></div>
            <div class="roof_right"></div>
            <div class="roof_bottom"></div>
          </div>
          <div class="door door_left">
            <div class="gull">
              <div class="window">
                <div class="glass"></div>
              </div>
              <div class="panel"></div>
              <div class="mirror"></div>
              <div class="aero">
                <div class="parts"></div>
              </div>
            </div>
          </div>
          <div class="door door_right">
            <div class="gull">
              <div class="window">
                <div class="glass"></div>
              </div>
              <div class="panel"></div>
              <div class="mirror"></div>
              <div class="aero">
                <div class="parts"></div>
              </div>
            </div>
          </div>
          <div class="under"></div>
          <div class="seat seat_left"></div>
          <div class="seat seat_right"></div>
          <div class="handle"></div>
          <div class="back_mirror"></div>
        </div>
        <div class="rear">
          <div class="bumper">
            <div class="taillight taillight_left"></div>
            <div class="taillight taillight_right"></div>
            <div class="aero">
              <div class="parts">
                <div class="arm arm_left"></div>
                <div class="arm arm_right"></div>
                <div class="wing"></div>
                <div class="bottom"></div>
              </div>
            </div>
          </div>
          <div class="fender fender_left">
            <div class="panel"></div>
            <div class="aero">
              <div class="parts"></div>
            </div>
          </div>
          <div class="fender fender_right">
            <div class="panel"></div>
            <div class="aero">
              <div class="parts"></div>
            </div>
          </div>
          <div class="luggage">
            <div class="panel"></div>
          </div>
          <div class="under"></div>
          <div class="lamp lamp_left"></div>
          <div class="lamp lamp_right"></div>
          <div class="muffler"></div>
        </div>
      </div>
      <div class="wheel">
        <div class="front">
          <div class="shaft"></div>
          <div class="tire tire_left"></div>
          <div class="tire tire_right"></div>
        </div>
        <div class="rear">
          <div class="shaft"></div>
          <div class="tire tire_left"></div>
          <div class="tire tire_right"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

            </StyleCar>
        </div>
        
    );

  }

}

export default Car2;
