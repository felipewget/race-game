import { StyleCar1 as StyleCar } from './styles';

import React,
       { Component }            from 'react';


/**
 * Renderizo o carro modelo 1
 */
class Car1 extends Component {

  constructor()
  {

    super();

    this.state = {};

  }

  updateState( key, value )
  {

      this.setState({
        [key]: value
      });

  }

  componentDidMount(){}

  render()
  {

    return (
        
      <div>
        <StyleCar></StyleCar>
      </div>
        
    );

  }

}

export default Car1;
