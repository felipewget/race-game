
import { Component }            from 'react';

/**
 * Gerencia os obstaculos
 * 
 * @TODO estou comecando
 */
class Obstacle extends Component {

//   constructor( props )
//   {

//     super();

//     this.state = {
//         positions: props.positions ? props.positions : [0,0,0],
//         distance: props.distance ? props.distance : [0,0,0],
//     };

//   }

//   updateState( key, value )
//   {

//       this.setState({
//         [key]: value
//       });

//   }

//   componentDidMount(){}

// //   processScale( distance_top )
// //   {

// //     distance_bottom = distance_bottom < 0
// //                       ? distance_bottom * -1
// //                       : distance_bottom;

// //     return distance_bottom * 0.006;

// //   }

// //   processPositionOnStreet( distance_bottom, position_on_street )
// //   {

// //     distance_bottom = distance_bottom < 0
// //                       ? distance_bottom * -1
// //                       : distance_bottom;    

// //     let root_distance = ( 350 - distance_bottom  ); // from the centre of orbit
    
// // // console.log( position_on_street )
// //     switch( position_on_street ){

// //       case -1:
        
// //         var degrees = 140;
// //         var radians = degrees * (Math.PI / 180);
    
// //         var x = Math.cos(radians) * root_distance;
        
// //         return 250 - x

// //         break;

// //       case 0:
// //         return 600
// //         break;
// //       case 1:

// //         var degrees = 40;
// //         var radians = degrees * (Math.PI / 180);
    
// //         var x = Math.cos(radians) * root_distance;
        
// //         return 950 - x
// //         break;

// //     }

// //   }

//   processObstacle( track )
//   {

//   }

//   render()
//   {

//     let { positions } = this.state;

//     let left = positions[0] == 1 ? this.processObstacle() : null;
//     let mid = positions[1] == 1 ? this.processObstacle() : null;
//     let right = positions[2] == 1 ? this.processObstacle() : null;

//     return null;
//     // return (
        
//     //     <ContainerObstacles>
//     //         <div>
//     //             <div className="left">

//     //             </div>
//     //             <div className="mid">

//     //             </div>
//     //             <div className="right">

//     //             </div>
//     //         </div>
//     //     </ContainerObstacles>

//     //     <StyleObstacle>
//     //     </StyleObstacle>        
//     // );

//   }

  render()
  {
    return null;
  }

}

export default Obstacle;
