import React,
       { Component }            from 'react';

import { SkyStyle } from './styles';

/**
 * CSS do ceu
 * 
 * @internal Importante, esse css eu apenas adaptei, mas todos os creditos vao para https://codepen.io/DonSinDRom/pen/dPyboy
 * 
 * @vendor https://codepen.io/DonSinDRom/pen/dPyboy
 */
class Sky extends Component {

  constructor( props )
  {

    super();

    this.state = {};

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

    return (
        
        <div>    
            <SkyStyle>
            <div class="moon"></div>
            <div class="forest">
                <div class="left">
                    <div class="tree_1"></div>
                    <div class="tree_2"></div>
                    <div class="tree_3"></div>
                    <div class="tree_4"></div>
                    <div class="tree_5"></div>
                </div>
                <div class="center">
                    <div class="tree_1"></div>
                    <div class="tree_2"></div>
                    <div class="tree_3"></div>
                </div>
                <div class="right">
                    <div class="tree_1"></div>
                    <div class="tree_2"></div>
                    <div class="tree_3"></div>
                    <div class="tree_4"></div>
                    <div class="tree_5"></div>
                </div>
            </div>
            </SkyStyle>
        </div>
        
    );

  }

}

export default Sky;
