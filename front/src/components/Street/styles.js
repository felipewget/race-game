import styled from 'styled-components';


export const ContainerScenarie = styled.div`
    width: 1200px;
    overflow:hidden;
    margin: 0 auto;
    height: 500px;
    bottom: 0px;
    position: fixed;
    background: #302C33;
    left: calc( 50% - 600px )
`;

export const StreetStyle = styled.div`
    width: 800px;
    height: calc( 100% - 300px );
    position: fixed;

    .container-asphalt-tracks {
        height: 500px;
        width: 15px;
        background: 0px;
        position: absolute;
    }

    .container-asphalt-tracks.left {
        transform: skewX(-20deg);
        margin-left: 455px;
    }

    .container-asphalt-tracks.right {
        transform: skewX(20deg);
        margin-left: 725px;
    }

    /* .container-asphalt-tracks div:nth-child(odd) {
        height: 30px;
    }

    .container-asphalt-tracks div:nth-child(even) {
        
        background: #FFF;
        height: 50px;
    } */

    

    .container-asphalt-tracks .move-tracks {
        top: -510px;
        position: absolute;
        animation: move-velocity ${ props => props.velocity ? ( 11 - props.velocity ) : 11 }s linear infinite;
    }

    .container-asphalt-tracks div {
        width: 20px;
        top: 5px;
        background: #FFF;
        height: 50px;
        margin-top: 30px;
    }

    .move-tracks[data-stoped="true"] {
        animation: none;
    }

`;

export const SideStreet = styled.div`
    
    .left {
        left: -300px;
        transform: skewX(-55deg);
        height: 600px;
        position: absolute;
        bottom: 0px;
        width: calc( 100% - 700px );
        background: #444;
        z-index: 5;

        .move-tracks  {
            

            ul li div {
                margin-left: calc( 100% - 30px );
            }
        }
    }

    ul li div {
        border-left: solid 1px #555;
        border-right: solid 1px #555;
    }

    .right {
        right: -300px;
        transform: skewX(55deg);
        height: 600px;
        position: absolute;
        bottom: 0px;
        width: calc( 100% - 700px );
        background: #444;
        z-index: 5;
    }

    div {

        .move-tracks {
            top: -510px;
            position: absolute;
            animation: move-velocity ${ props => props.velocity ? ( 11 - props.velocity ) : 11 }s linear infinite;

            ul {

                list-style: none;
                padding: 0px;

                li {
                    height: 100px;
                    width: 500px;
                }

                li:nth-child(odd) {
                    background-color:#00b33c;

                    div:nth-child(odd) {
                        width: 30px;
                        height: 33.3px;
                        background: #FFF;
                    }

                    div:nth-child(even) {
                        width: 30px;
                        height: 33.3px;
                        background: #CC6666;
                    }

                }

                li:nth-child(even) {
                    background-color:#006622;

                    div:nth-child(odd) {
                        width: 30px;
                        height: 33.3px;
                        background: #CC6666;
                    }

                    div:nth-child(even) {
                        width: 30px;
                        height: 33.3px;
                        background: #FFF;
                    }

                }

            }

        }

        .move-tracks[data-stoped="true"] {
            animation: none;
        }

    }

    @keyframes move-velocity {
        100% {
            top: -20px;
        }
    }
`;