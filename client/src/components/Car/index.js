import React,
       { Component }            from 'react';

// import Car1 from './Car1';
import Car2 from './Car2';

/**
 * Renderiza o carro e seus efeitos
 * 
 * @internal a ideia era criar Carro1,2,3... assim o player iria escolher o carro
 *           e cada carro teria uma valocidade maxima, aceleracao e nitro
 */
class Car extends Component {

  constructor( props )
  {

    super();

    this.state = {
      id : props.id ? props.id : null,              // ID relacionado ao carro
      socket : props.socket ? props.socket : null,  // Websocket Client
      me : props.me ? props.me : null               // Se esse componente se refere ao meu carro
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

    let { me, socket } = this.state;
    let { funcUpdateVelocity } = this.props;

    return (
        
        <div>
            <Car2 me={me} socket={socket} funcUpdateVelocity={funcUpdateVelocity} />
        </div>
        
    );

  }

}

export default Car;
