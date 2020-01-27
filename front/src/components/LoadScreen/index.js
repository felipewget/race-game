
import { Loader } from './styles';

import React,
       { Component }            from 'react';

/**
 * Uma Loading Screen enquanto carrego os dados da pagina
 */
class LoadScreen extends Component {

  constructor( props )
  {
    super();
  }

  
  render()
  {

    return (
        <Loader>
            <div>
                <i className="icon-loopsync"></i>
            </div>
        </Loader>
        )

  }

}

export default LoadScreen;
