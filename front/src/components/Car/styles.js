import styled from 'styled-components';

export const StyleCar1 = styled.div`
        width: 100px;
        height: 100px;
        background: #000;
`;

export const StyleCar2 = styled.div`

 
   
div {
  position: absolute;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
  box-sizing: border-box;
  -webkit-transition: 1000ms;
  transition: 1000ms;
  will-change: transform;

        /* CONTAINER */
        #showcase {
                pointer-events: none;
                position: fixed;
                z-index: 100;

                left: ${props => props.me && props.me ? props.funcPositionOnStreet( -350, props.position_on_street ) + "px" : ""} ;
                bottom: ${props => props.me && props.me ? "-350px !important" : ""};
                
        }

        #showcase[data-position-on-street="-1"] {
                -webkit-transform: rotateX(-20deg) rotateY(170deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
                        transform: rotateX(-20deg) rotateY(170deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
        }

        #showcase[data-position-on-street="0"] {
                -webkit-transform: rotateX(-20deg) rotateY(180deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
                        transform: rotateX(-20deg) rotateY(180deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
        }

        #showcase[data-position-on-street="1"] {
                -webkit-transform: rotateX(-20deg) rotateY(190deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
                        transform: rotateX(-20deg) rotateY(190deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
        }

        #showcase[data-direction="left"] {
                -webkit-transform: rotateX(-20deg) rotateY(210deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
                        transform: rotateX(-20deg) rotateY(210deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
        }

        #showcase[data-direction="right"] {
                -webkit-transform: rotateX(-20deg) rotateY(150deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
                        transform: rotateX(-20deg) rotateY(150deg) scale(${props => props.me && props.me ? props.funcProcessScale( -350 ) : 1});
        }

        #showcase[data-apresentation] {
                -webkit-animation: drive 10000ms linear infinite;
                animation: drive 10000ms linear infinite;
        }

        /* SHADOW CAR */
        .shadow {
                width: 120px;
                height: 200px;
                background: none;
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                -webkit-transform: translate(-60px, 25px) translateZ(100px) rotateX(-90deg);
                transform: translate(-60px, 25px) translateZ(100px) rotateX(-90deg);

                .blur {
                        width: 100%;
                        height: 100%;
                        background: #000;
                        -webkit-filter: blur(10px);
                        filter: blur(10px);
                }
        }


        /* CAR */
        .car {
                -webkit-transform: translate(-50px, 0px) translateZ(90px);
                transform: translate(-50px, 0px) translateZ(90px);

                .body {
                        -webkit-transition: 2000ms;
                        transition: 2000ms;

                        .aero {
                                -webkit-transform-origin: 50px -100px;
                                        transform-origin: 50px -100px;
                                -webkit-transform: scale(0);
                                        transform: scale(0);

                                -webkit-transform: scale(1);
                                        transform: scale(1);
                        }

                        /* FRONT */
                        .front {

                                -webkit-transform: translate(0, -20px);
                                        transform: translate(0, -20px);

                                .bumper {
                                        width: 100px;
                                        height: 20px;
                                }

                                .bumper::before {
                                        content: '';
                                        position: absolute;
                                        background: orange;
                                        width: 6px;
                                        height: 6px;
                                        border-radius: 20px;
                                        -webkit-transform: translate(5px, 5px);
                                                transform: translate(5px, 5px);
                                }

                                .bumper::after {
                                        content: '';
                                        position: absolute;
                                        background: orange;
                                        width: 6px;
                                        height: 6px;
                                        border-radius: 20px;
                                        -webkit-transform: translate(89px, 5px);
                                                transform: translate(89px, 5px);
                                }

                                .aero .parts {
                                        width: 120px;
                                        height: 10px;
                                        -webkit-transform-origin: 50% 0%;
                                                transform-origin: 50% 0%;
                                        -webkit-transform: translate(-10px, 20px) rotateX(60deg);
                                                transform: translate(-10px, 20px) rotateX(60deg);
                                }

                                .bonnet {
                                        width: 100px;
                                        height: 70px;
                                        -webkit-transform-origin: 50% 0%;
                                                transform-origin: 50% 0%;
                                        -webkit-transform: translate(0px, -24px) translateZ(-66px) rotateX(70deg);
                                                transform: translate(0px, -24px) translateZ(-66px) rotateX(70deg);
                                        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50px, 75px 50px, 75px 100%, 25px 100%, 25px 50px, 0% 50px);
                                                clip-path: polygon(0% 0%, 100% 0%, 100% 50px, 75px 50px, 75px 100%, 25px 100%, 25px 50px, 0% 50px);
                                }

                                .aero .parts {
                                        width: 40px;
                                        height: 20px;
                                        border-radius: 0 0 3px 3px;
                                        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(70%, rgba(0, 0, 0, 0.3)), to(black));
                                        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 70%, black 100%);
                                        -webkit-transform: translate(30px, 20px);
                                                transform: translate(30px, 20px);
                                }

                                .headlight {
                                        width: 25px;
                                        height: 20px;
                                        -webkit-transform-origin: 50% 0%;
                                        transform-origin: 50% 0%;
                                        background: none;
                                }

                                .headlight_left {
                                        -webkit-transform: translate(1px, -7px) translateZ(-19px) rotateX(70deg);
                                        transform: translate(1px, -7px) translateZ(-19px) rotateX(70deg);

                                        -webkit-transform: translate(1px, -7px) translateZ(-19px) rotateX(110deg);
                                                transform: translate(1px, -7px) translateZ(-19px) rotateX(110deg);
                                        -webkit-transition: 600ms;
                                        transition: 600ms;
                                }

                                .headlight_right {
                                        -webkit-transform: translate(74px, -7px) translateZ(-19px) rotateX(70deg);
                                        transform: translate(74px, -7px) translateZ(-19px) rotateX(70deg);

                                        -webkit-transform: translate(74px, -7px) translateZ(-19px) rotateX(110deg);
                                        transform: translate(74px, -7px) translateZ(-19px) rotateX(110deg);
                                        -webkit-transition: 600ms;
                                        transition: 600ms;
                                }

                                .headlight_cover {
                                        width: 25px;
                                        height: 20px;
                                }

                                .headlight_unit {
                                        width: 25px;
                                        height: 20px;
                                        background: #bcf5b9;
                                        -webkit-transform-origin: 50% 100%;
                                        transform-origin: 50% 100%;
                                        -webkit-transform: rotateX(70deg);
                                        transform: rotateX(70deg);
                                }

                                .headlight_unit::before {
                                        content: '';
                                        position: absolute;
                                        width: 20px;
                                        height: 20px;
                                        background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                                        -webkit-transform-origin: 0% 0%;
                                                transform-origin: 0% 0%;
                                        -webkit-transform: rotateY(-90deg);
                                                transform: rotateY(-90deg);
                                        -webkit-clip-path: polygon(100% 60%, 0% 0%, 0% 100%);
                                                clip-path: polygon(100% 60%, 0% 0%, 0% 100%);
                                }

                                .headlight_unit::after {
                                        content: '';
                                        position: absolute;
                                        right: 0;
                                        width: 20px;
                                        height: 20px;
                                        background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                                        -webkit-transform-origin: 100% 0%;
                                                transform-origin: 100% 0%;
                                        -webkit-transform: rotateY(90deg);
                                                transform: rotateY(90deg);
                                        -webkit-clip-path: polygon(0% 60%, 100% 0%, 100% 100%);
                                                clip-path: polygon(0% 60%, 100% 0%, 100% 100%);
                                }

                                .fender {
                                        width: 66px;
                                        height: 44px;
                                        -webkit-transform-origin: 0% 0%;
                                                transform-origin: 0% 0%;
                                        background: none;

                                        .panel {
                                                width: 100%;
                                                height: 100%;
                                                -webkit-clip-path: polygon(0 24px, 100% 0%, 100% 100%, 60px 100%, 50px 24px, 30px 24px, 20px 100%, 0% 100%);
                                                clip-path: polygon(0 24px, 100% 0%, 100% 100%, 60px 100%, 50px 24px, 30px 24px, 20px 100%, 0% 100%);
                                        }

                                }


                                .fender_left {
                                        -webkit-transform: translate(100px, -24px) rotateY(90deg);
                                                transform: translate(100px, -24px) rotateY(90deg);
                                }

                                .fender_left .aero .parts {
                                        width: 40px;
                                        height: 10px;
                                        -webkit-transform-origin: 100% 0%;
                                                transform-origin: 100% 0%;
                                        -webkit-transform: translate(-15px, 15px) rotateX(90deg) rotateY(-50deg);
                                                transform: translate(-15px, 15px) rotateX(90deg) rotateY(-50deg);
                                }

                                .fender_left .aero .parts::before {
                                        content: '';
                                        position: absolute;
                                        width: 40px;
                                        height: 10px;
                                        background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                                        -webkit-transform-origin: 0% 0%;
                                                transform-origin: 0% 0%;
                                        -webkit-transform: translate(40px, 0px) rotateY(35deg);
                                                transform: translate(40px, 0px) rotateY(35deg);
                                }

                                .fender_right {
                                        -webkit-transform: translate(0px, -24px) rotateY(90deg);
                                                transform: translate(0px, -24px) rotateY(90deg);
                                }

                                .fender_right .aero .parts {
                                        width: 40px;
                                        height: 10px;
                                        -webkit-transform-origin: 100% 0%;
                                                transform-origin: 100% 0%;
                                        -webkit-transform: translate(-15px, 15px) translateZ(-10px) rotateX(90deg) rotateY(-50deg);
                                                transform: translate(-15px, 15px) translateZ(-10px) rotateX(90deg) rotateY(-50deg);
                                }

                                .fender_right .aero .parts::before {
                                        content: '';
                                        position: absolute;
                                        width: 40px;
                                        height: 10px;
                                        background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                                        -webkit-transform-origin: 0% 0%;
                                                transform-origin: 0% 0%;
                                        -webkit-transform: translate(40px, 0px) rotateY(35deg);
                                                transform: translate(40px, 0px) rotateY(35deg);
                                }

                                .under {
                                        width: 100px;
                                        height: 66px;
                                        -webkit-transform-origin: 50% 100%;
                                                transform-origin: 50% 100%;
                                        -webkit-transform: translate(0, -46px) rotateX(90deg);
                                                transform: translate(0, -46px) rotateX(90deg);
                                        -webkit-clip-path: polygon(10px 0%, 90px 0%, 90px 100%, 10px 100%);
                                                clip-path: polygon(10px 0%, 90px 0%, 90px 100%, 10px 100%);
                                }

                        }
                }

                /* BODY */
                .cockpit {

                        -webkit-transform: translate(0, -44px) translateZ(-66px);
                                transform: translate(0, -44px) translateZ(-66px);

                        .handle {
                                width: 30px;
                                height: 30px;
                                border-radius: 100%;
                                -webkit-transform: translate(15px, -5px) translateZ(-15px) rotateX(-20deg);
                                        transform: translate(15px, -5px) translateZ(-15px) rotateX(-20deg);
                                background: none;
                                border: 5px solid #323232;
                        }

                        .seat {
                                width: 30px;
                                height: 60px;
                                background: whitesmoke;
                                -webkit-transform-origin: 50% 100%;
                                transform-origin: 50% 100%;
                                border-radius: 5px 5px 0 0;
                        }

                        .seat::before {
                                content: '';
                                position: absolute;
                                bottom: 0;
                                width: 30px;
                                height: 30px;
                                background: whitesmoke;
                                -webkit-transform-origin: 50% 100%;
                                transform-origin: 50% 100%;
                                -webkit-transform: rotateX(-100deg);
                                transform: rotateX(-100deg);
                        }

                        .seat_left {
                                -webkit-transform: translate(55px, -20px) translateZ(-45px) rotateX(22deg);
                                transform: translate(55px, -20px) translateZ(-45px) rotateX(22deg);
                        }

                        .seat_right {
                                -webkit-transform: translate(15px, -20px) translateZ(-45px) rotateX(22deg);
                                transform: translate(15px, -20px) translateZ(-45px) rotateX(22deg);
                        }

                        .inner_front {
                                width: 100px;
                                height: 44px;
                                background: linear-gradient(45deg, #323232 0%, #646464 100%);
                        }

                        .inner_back {
                                width: 100px;
                                height: 48px;
                                -webkit-transform-origin: 50% 0%;
                                transform-origin: 50% 0%;
                                -webkit-transform: translateZ(-70px) rotateX(24deg);
                                transform: translateZ(-70px) rotateX(24deg);
                                background: linear-gradient(45deg, #323232 0%, #646464 100%);
                        }

                        .door {
                                width: 70px;
                                height: 44px;
                                -webkit-transform-origin: 0% 0%;
                                transform-origin: 0% 0%;
                                background: none;
                        }

                        .door {

                                .gull {
                                        -webkit-transition: 1200ms;
                                        transition: 1200ms;
                                }

                                .window {
                                        width: 70px;
                                        height: 30px;
                                        -webkit-transform-origin: 0% 0%;
                                        transform-origin: 0% 0%;
                                        -webkit-transform: translate(0px, -30px);
                                        transform: translate(0px, -30px);
                                        background: none;
                                        overflow: hidden;

                                        .glass {
                                                width: 70px;
                                                height: 30px;
                                                -webkit-clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%);
                                                clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%);
                                                -webkit-transition: 1500ms;
                                                transition: 1500ms;
                                                -webkit-transition-timing-function: linear;
                                                transition-timing-function: linear;

                                                -webkit-transform: translateY(30px);
                                                transform: translateY(30px);

                                        }
                                }

                                .panel {
                                        width: 70px;
                                        height: 44px;
                                        -webkit-clip-path: polygon(0% 0%, 100% 0%, 50px 100%, 0% 100%);
                                        clip-path: polygon(0% 0%, 100% 0%, 50px 100%, 0% 100%);
                                }

                                .mirror {
                                        width: 20px;
                                        height: 10px;
                                        -webkit-transform-origin: 0% 0%;
                                        transform-origin: 0% 0%;
                                }

                        }
                        
                        .door_left {
                                -webkit-transform: translate(100px, 0px) rotateY(90deg);
                                transform: translate(100px, 0px) rotateY(90deg);

                                .aero .parts {
                                        width: 56px;
                                        height: 13px;
                                        -webkit-transform-origin: 0% 0%;
                                        transform-origin: 0% 0%;
                                        -webkit-transform: translate(-6px, 44px) rotateX(45deg);
                                        transform: translate(-6px, 44px) rotateX(45deg);
                                }

                                .mirror {
                                        -webkit-transform: translate(10px, -10px) rotateY(-60deg);
                                        transform: translate(10px, -10px) rotateY(-60deg);
                                }

                                .mirror::before {
                                        content: '';
                                        position: absolute;
                                        width: 20px;
                                        height: 10px;
                                        background: silver;
                                        border: 2px solid #24410b;
                                        -webkit-transform: translateZ(-1px);
                                        transform: translateZ(-1px);
                                        box-sizing: border-box;
                                        }
                                        .panel::before {
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        background: linear-gradient(45deg, #323232 0%, #646464 100%);
                                        -webkit-transform: translateZ(-1px);
                                        transform: translateZ(-1px);
                                        -webkit-clip-path: polygon(1% 1%, 99% 1%, 50px 99%, 1% 99%);
                                        clip-path: polygon(1% 1%, 99% 1%, 50px 99%, 1% 99%);
                                }
                        }

                        .door_right {
                                -webkit-transform: translate(0px, 0px) rotateY(90deg);
                                transform: translate(0px, 0px) rotateY(90deg);

                                .aero .parts {
                                        width: 56px;
                                        height: 13px;
                                        -webkit-transform-origin: 0% 0%;
                                        transform-origin: 0% 0%;
                                        -webkit-transform: translate(-6px, 44px) rotateX(-45deg);
                                        transform: translate(-6px, 44px) rotateX(-45deg);
                                }
                                
                                .mirror {
                                        -webkit-transform: translate(10px, -10px) rotateY(60deg);
                                        transform: translate(10px, -10px) rotateY(60deg);
                                }

                                .mirror::before {
                                        content: '';
                                        position: absolute;
                                        width: 20px;
                                        height: 10px;
                                        background: silver;
                                        border: 2px solid #24410b;
                                        -webkit-transform: translateZ(1px);
                                        transform: translateZ(1px);
                                        box-sizing: border-box;
                                        -webkit-backface-visibility: hidden;
                                        backface-visibility: hidden;
                                }
                                
                                .panel::before {
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        background: linear-gradient(45deg, #323232 0%, #646464 100%);
                                        -webkit-transform: translateZ(1px);
                                        transform: translateZ(1px);
                                        -webkit-clip-path: polygon(1% 1%, 99% 1%, 50px 99%, 1% 99%);
                                        clip-path: polygon(1% 1%, 99% 1%, 50px 99%, 1% 99%);
                                }

                        }
                        
                        .under {
                                width: 100px;
                                height: 50px;
                                -webkit-transform-origin: 50% 100%;
                                transform-origin: 50% 100%;
                                -webkit-transform: translate(0, -6px) rotateX(90deg);
                                transform: translate(0, -6px) rotateX(90deg);
                                background: linear-gradient(45deg, #323232 0%, #646464 100%);
                        }

                        .roof {
                                width: 100px;
                                -webkit-transform-origin: 50% 10px;
                                transform-origin: 50% 10px;
                                -webkit-transform: translate(0px, -10px) translateZ(-70px) rotateX(0deg);
                                transform: translate(0px, -10px) translateZ(-70px) rotateX(0deg);
                                -webkit-transition: 2000ms;
                                transition: 2000ms;

                                -webkit-transform: translate(0px, -10px) translateZ(-80px) rotateX(90deg);
                                        transform: translate(0px, -10px) translateZ(-80px) rotateX(90deg);
                                -webkit-transition-delay: 300ms;
                                        transition-delay: 300ms;
                        }

                        .roof_top {
                                width: 100px;
                                height: 40px;
                                -webkit-transform-origin: 50% 100%;
                                transform-origin: 50% 100%;
                                -webkit-transform: translate(0px, -60px) rotateX(-90deg);
                                transform: translate(0px, -60px) rotateX(-90deg);

                                -webkit-transform: translate(0px, -60px) rotateX(-180deg);
                                        transform: translate(0px, -60px) rotateX(-180deg);
                                -webkit-transition-delay: 800ms;
                                        transition-delay: 800ms;
                        }

                        .roof_back {
                                width: 100px;
                                height: 36px;
                                -webkit-transform-origin: 50% 0%;
                                transform-origin: 50% 0%;
                                -webkit-transform: translate(0px, -20px) rotateX(-35deg);
                                transform: translate(0px, -20px) rotateX(-35deg);
                                -webkit-clip-path: polygon(0% 0%, 12px 100%, 88px 100%, 100% 0%);
                                clip-path: polygon(0% 0%, 12px 100%, 88px 100%, 100% 0%);
                        }

                        .roof_left {
                                width: 24px;
                                height: 30px;
                                -webkit-transform-origin: 0% 0%;
                                transform-origin: 0% 0%;
                                -webkit-transform: translate(100px, -20px) rotateY(120deg);
                                transform: translate(100px, -20px) rotateY(120deg);
                                -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                                clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                        }

                        .roof_right {
                                width: 24px;
                                height: 30px;
                                -webkit-transform-origin: 0% 0%;
                                transform-origin: 0% 0%;
                                -webkit-transform: translate(0px, -20px) rotateY(60deg);
                                transform: translate(0px, -20px) rotateY(60deg);
                                -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                                clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                        }

                        .roof_bottom {
                                width: 100px;
                                height: 20px;
                                -webkit-transform-origin: 50% 100%;
                                transform-origin: 50% 100%;
                                -webkit-transform: translate(0px, -10px) rotateX(90deg);
                                transform: translate(0px, -10px) rotateX(90deg);
                                -webkit-clip-path: polygon(0% 100%, 10px 0%, 90px 0%, 100% 100%);
                                clip-path: polygon(0% 100%, 10px 0%, 90px 0%, 100% 100%);
                        }

                        .window {
                                background: rgba(0, 70, 150, 0.6);
                        }

                        .window_front {
                                width: 100px;
                                height: 42px;
                                -webkit-transform-origin: 50% 100%;
                                transform-origin: 50% 100%;
                                -webkit-transform: translate(0px, -42px) rotateX(45deg);
                                transform: translate(0px, -42px) rotateX(45deg);
                        }
                        .window_front::before {
                                content: '';
                                position: absolute;
                                width: 5px;
                                height: 42px;
                                background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                        }

                        .window_front::after {
                                content: '';
                                position: absolute;
                                right: 0;
                                width: 5px;
                                height: 42px;
                                background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                        }

                        .window_left {
                                width: 70px;
                                height: 30px;
                                -webkit-transform-origin: 0% 0%;
                                transform-origin: 0% 0%;
                                -webkit-transform: translate(100px, -30px) rotateY(90deg);
                                transform: translate(100px, -30px) rotateY(90deg);
                                -webkit-clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%);
                                clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%);
                        }

                        .window_right {
                                width: 70px;
                                height: 30px;
                                -webkit-transform-origin: 0% 0%;
                                transform-origin: 0% 0%;
                                -webkit-transform: translate(0px, -30px) rotateY(90deg);
                                transform: translate(0px, -30px) rotateY(90deg);
                                -webkit-clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%);
                                clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%);
                        }

                }

                .window, .glass {
                       background: rgba(0, 70, 150, 0.6);
                }

                /* REAR */

                .rear {
                        -webkit-transform: translate(0px, -44px) translateZ(-116px);
                                transform: translate(0px, -44px) translateZ(-116px);

                        .bumper {

                                width: 100px;
                                height: 44px;
                                -webkit-transform: translateZ(-60px);
                                transform: translateZ(-60px);
                                

                                .aero {

                                        -webkit-transform: scale(1);
                                                transform: scale(1);

                                        .parts {

                                                .arm_right {

                                                        width: 10px;
                                                        height: 50px;
                                                        -webkit-transform-origin: 0% 0%;
                                                                transform-origin: 0% 0%;
                                                        -webkit-transform: translate(18px, -20px) rotateY(90deg);
                                                                transform: translate(18px, -20px) rotateY(90deg);
                                                        border-radius: 0 0 100% 0;

                                                }

                                                .arm_left {
                                                        width: 10px;
                                                        height: 50px;
                                                        -webkit-transform-origin: 0% 0%;
                                                        transform-origin: 0% 0%;
                                                        -webkit-transform: translate(82px, -20px) rotateY(90deg);
                                                        transform: translate(82px, -20px) rotateY(90deg);
                                                        border-radius: 0 0 100% 0;
                                                }

                                               .wing {
                                                        width: 120px;
                                                        height: 20px;
                                                        -webkit-transform-origin: 50% 100%;
                                                        transform-origin: 50% 100%;
                                                        -webkit-transform: translate(-10px, -35px) rotateX(70deg);
                                                        transform: translate(-10px, -35px) rotateX(70deg);
                                                }

                                                .garnish {
                                                        width: 100px;
                                                        height: 10px;
                                                        -webkit-transform: translateZ(-0.1px);
                                                        transform: translateZ(-0.1px);
                                                }

                                                .bottom {
                                                        width: 100px;
                                                        height: 10px;
                                                        -webkit-transform-origin: 50% 0%;
                                                        transform-origin: 50% 0%;
                                                        -webkit-transform: translate(0px, 44px) rotateX(-40deg);
                                                        transform: translate(0px, 44px) rotateX(-40deg);
                                                }

                                        }

                                } 

                                .taillight {
                                        content: '';
                                        position: absolute;
                                        top: 4px;
                                        width: 12px;
                                        height: 12px;
                                        background: #c80000;
                                        border-radius: 100%;
                                        -webkit-transform: translateZ(-1px);
                                        transform: translateZ(-1px);
                                }

                                .taillight_right {
                                        right: 5px;
                                }

                                .taillight_right::before {
                                        content: '';
                                        position: absolute;
                                        right: 14px;
                                        width: 12px;
                                        height: 12px;
                                        border-radius: 100%;
                                        background: #c80000;
                                }

                                .taillight_left {
                                        left: 5px;
                                }

                                .taillight_left::before {
                                        content: '';
                                        position: absolute;
                                        left: 14px;
                                        width: 12px;
                                        height: 12px;
                                        border-radius: 100%;
                                        background: #c80000;
                                }

                        }

                        .fender {
                                width: 60px;
                                height: 44px;
                                background: none;
                                -webkit-transform-origin: 0% 0%;
                                        transform-origin: 0% 0%;

                                        .panel {
                                                width: 100%;
                                                height: 100%;
                                                -webkit-clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 50px 100%, 40px 24px, 20px 24px, 10px 100%, 0% 100%);
                                                        clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 50px 100%, 40px 24px, 20px 24px, 10px 100%, 0% 100%);
                                        }
                        }

                        .fender_left {
                                -webkit-transform: translate(100px, 0px) rotateY(90deg);
                                        transform: translate(100px, 0px) rotateY(90deg);

                                .aero .parts {
                                        width: 47px;
                                        height: 10px;
                                        -webkit-transform-origin: 100% 0%;
                                        transform-origin: 100% 0%;
                                        -webkit-transform: translate(-30px, 10px) rotateX(90deg) rotateY(-65deg);
                                        transform: translate(-30px, 10px) rotateX(90deg) rotateY(-65deg);
                                }

                                .fender_left .aero .parts::before {
                                        content: '';
                                        position: absolute;
                                        width: 42px;
                                        height: 10px;
                                        background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                                        -webkit-transform-origin: 100% 0%;
                                        transform-origin: 100% 0%;
                                        -webkit-transform: translate(5px, 0px) rotateY(-115deg);
                                        transform: translate(5px, 0px) rotateY(-115deg);
                                }
                        }

                        .fender_right {
                                -webkit-transform: rotateY(90deg);
                                        transform: rotateY(90deg);

                                .aero .parts {
                                        width: 47px;
                                        height: 10px;
                                        -webkit-transform-origin: 100% 0%;
                                        transform-origin: 100% 0%;
                                        -webkit-transform: translate(-30px, 10px) rotateX(-90deg) rotateY(65deg);
                                        transform: translate(-30px, 10px) rotateX(-90deg) rotateY(65deg);
                                }

                                .aero .parts::before {
                                        content: '';
                                        position: absolute;
                                        width: 42px;
                                        height: 10px;
                                        background: linear-gradient(45deg, #24410b 0%, #56733d 100%);
                                        -webkit-transform-origin: 100% 0%;
                                        transform-origin: 100% 0%;
                                        -webkit-transform: translate(5px, 0px) rotateY(115deg);
                                        transform: translate(5px, 0px) rotateY(115deg);
                                }
                                
                        }

                        .under {
                                width: 100px;
                                height: 60px;
                                -webkit-transform-origin: 50% 100%;
                                        transform-origin: 50% 100%;
                                -webkit-transform: translate(0px, -16px) rotateX(90deg);
                                        transform: translate(0px, -16px) rotateX(90deg);
                                -webkit-clip-path: polygon(10px 0%, 90px 0%, 90px 100%, 10px 100%);
                                        clip-path: polygon(10px 0%, 90px 0%, 90px 100%, 10px 100%);
                        }

                        .luggage {
                                width: 100px;
                                height: 40px;
                                -webkit-transform-origin: 50% 100%;
                                        transform-origin: 50% 100%;
                                -webkit-transform: translate(0px, -40px) translateZ(-20px) rotateX(90deg);
                                        transform: translate(0px, -40px) translateZ(-20px) rotateX(90deg);
                                background: none;

                                .panel {
                                        width: 100px;
                                        height: 40px;
                                        -webkit-transform-origin: 50% 100%;
                                                transform-origin: 50% 100%;
                                        -webkit-clip-path: polygon(0% 0%, 0% 100%, 10px 20px, 90px 20px, 100% 100%, 100% 0%);
                                                clip-path: polygon(0% 0%, 0% 100%, 10px 20px, 90px 20px, 100% 100%, 100% 0%);
                                        -webkit-transition-delay: 500ms;
                                                transition-delay: 500ms;

                                                -webkit-transform-origin: 50% 0%;
                                                        transform-origin: 50% 0%;
                                                -webkit-transform: rotateX(-40deg);
                                                        transform: rotateX(-40deg);
                                                -webkit-transition-delay: 0ms;
                                                        transition-delay: 0ms;
                                }
                        }
        
                }

                .wheel {

                        .tire {
                                width: 40px;
                                height: 40px;
                                border-radius: 100%;
                                background: #646464;
                                border: 8px solid black;
                                -webkit-transition: 500ms;
                                transition: 500ms;
                                -webkit-transition-delay: 500ms;
                                        transition-delay: 500ms;

                                background: #287018;
                                border-width: 3px;
                        }

                        .tire_left {
                                -webkit-transform: translate(75px, -15px) rotateY(90deg);
                                transform: translate(75px, -15px) rotateY(90deg);
                        }

                        .tire_right {
                                -webkit-transform: translate(-15px, -15px) rotateY(90deg);
                                transform: translate(-15px, -15px) rotateY(90deg);
                        }

                        .shaft {
                                width: 90px;
                                height: 10px;
                                background: #646464;
                                -webkit-transform: translate(5px, 0px);
                                transform: translate(5px, 0px);
                                -webkit-transition: 500ms;
                                transition: 500ms;
                                -webkit-transition-delay: 500ms;
                                transition-delay: 500ms;
                                background: #287018;
                        }

                        .shaft::before {
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                background: #646464;
                                -webkit-transform: rotateX(90deg);
                                transform: rotateX(90deg);
                                background: #287018;
                        }

                        .front {
                                -webkit-transform: translate(0px, 0px) translateZ(-40px);
                                transform: translate(0px, 0px) translateZ(-40px);
                        }

                        .rear {
                                -webkit-transform: translate(0px, 0px) translateZ(-145px);
                                transform: translate(0px, 0px) translateZ(-145px);
                        }

                }


        }

}

@-webkit-keyframes drive {
  0% {
    -webkit-transform: rotateX(-30deg) rotateY(0deg);
            transform: rotateX(-30deg) rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateX(-30deg) rotateY(-360deg);
            transform: rotateX(-30deg) rotateY(-360deg);
  }
}

@keyframes drive {
  0% {
    -webkit-transform: rotateX(-30deg) rotateY(0deg);
            transform: rotateX(-30deg) rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateX(-30deg) rotateY(-360deg);
            transform: rotateX(-30deg) rotateY(-360deg);
  }
}


/* .action.door[type="checkbox"]:checked ~ #showcase .door_left {
  -webkit-transform: translate(100px, 0px) rotateY(30deg);
          transform: translate(100px, 0px) rotateY(30deg);
}
.action.door[type="checkbox"]:checked ~ #showcase .door_right {
  -webkit-transform: translate(0px, 0px) rotateY(150deg);
          transform: translate(0px, 0px) rotateY(150deg);
} */



/* //log
.action.roof[type="checkbox"]:checked ~ #showcase .roof {
        -webkit-transform: translate(0px, -10px) translateZ(-80px) rotateX(90deg);
          transform: translate(0px, -10px) translateZ(-80px) rotateX(90deg);
  -webkit-transition-delay: 300ms;
          transition-delay: 300ms;
} */


/* //log2
.action.roof[type="checkbox"]:checked ~ #showcase .roof_top {
  -webkit-transform: translate(0px, -60px) rotateX(-180deg);
          transform: translate(0px, -60px) rotateX(-180deg);
  -webkit-transition-delay: 800ms;
          transition-delay: 800ms;
} */

/* //log3
.action.roof[type="checkbox"]:checked ~ #showcase .luggage .panel {
  -webkit-transform-origin: 50% 0%;
          transform-origin: 50% 0%;
  -webkit-transform: rotateX(-40deg);
          transform: rotateX(-40deg);
  -webkit-transition-delay: 0ms;
          transition-delay: 0ms;
} */

/* .action.luggage[type="checkbox"]:checked ~ #showcase .luggage .panel {
  -webkit-transform: rotateX(-40deg);
          transform: rotateX(-40deg);
  -webkit-transition-delay: 500ms;
          transition-delay: 500ms;
}
.action.window[type="checkbox"]:checked ~ #showcase .window .glass {
  -webkit-transform: translateY(30px);
          transform: translateY(30px);
}
.action.headlight[type="checkbox"]:checked ~ #showcase .headlight_left {
  -webkit-transform: translate(1px, -7px) translateZ(-19px) rotateX(110deg);
          transform: translate(1px, -7px) translateZ(-19px) rotateX(110deg);
  -webkit-transition: 600ms;
  transition: 600ms;
}
.action.headlight[type="checkbox"]:checked ~ #showcase .headlight_right {
  -webkit-transform: translate(74px, -7px) translateZ(-19px) rotateX(110deg);
          transform: translate(74px, -7px) translateZ(-19px) rotateX(110deg);
  -webkit-transition: 600ms;
  transition: 600ms;
}
.action.gull[type="checkbox"]:checked ~ #showcase .door_left .gull {
  -webkit-transform: rotateY(-20deg) rotateZ(-60deg);
          transform: rotateY(-20deg) rotateZ(-60deg);
}
.action.gull[type="checkbox"]:checked ~ #showcase .door_right .gull {
  -webkit-transform: rotateY(20deg) rotateZ(-60deg);
          transform: rotateY(20deg) rotateZ(-60deg);
}
.action.night[type="checkbox"]:checked ~ #field {
  background: #282828;
}
.action.night[type="checkbox"]:checked ~ #showcase .shadow .blur {
  background: #141414;
}
.action.night[type="checkbox"]:checked ~ .action::before {
  color: #fff;
}
.action.night[type="checkbox"]:checked::before {
  color: #fff;
}
.action.neon[type="checkbox"]:checked ~ #showcase .shadow .blur {
  background: #b7977b;
}
.action.run[type="checkbox"]:checked ~ #showcase .car {
  -webkit-transform: translate(200px, 0px) translateZ(90px);
          transform: translate(200px, 0px) translateZ(90px);
}
.action.run[type="checkbox"]:checked ~ #showcase .shadow {
  -webkit-transform: translate(190px, 25px) translateZ(100px) rotateX(-90deg);
          transform: translate(190px, 25px) translateZ(100px) rotateX(-90deg);
}
.action.lowdown[type="checkbox"]:checked ~ #showcase .body {
  -webkit-transform: translate(0px, 16px);
          transform: translate(0px, 16px);
}
.action.lowdown[type="checkbox"]:checked ~ #showcase .tire_left {
  -webkit-transform: translate(90px, -15px) rotateZ(-12deg) rotateY(90deg);
          transform: translate(90px, -15px) rotateZ(-12deg) rotateY(90deg);
  -webkit-transition-delay: 0ms;
          transition-delay: 0ms;
}
.action.lowdown[type="checkbox"]:checked ~ #showcase .tire_right {
  -webkit-transform: translate(-30px, -15px) rotateZ(12deg) rotateY(90deg);
          transform: translate(-30px, -15px) rotateZ(12deg) rotateY(90deg);
  -webkit-transition-delay: 0ms;
          transition-delay: 0ms;
}
.action.lowdown[type="checkbox"]:checked ~ #showcase .shaft {
  width: 120px;
  -webkit-transform: translate(-10px, 0px);
          transform: translate(-10px, 0px);
  -webkit-transition-delay: 0ms;
          transition-delay: 0ms;
}
.action.aero[type="checkbox"]:checked ~ #showcase .aero {
  -webkit-transform: scale(1);
          transform: scale(1);
}
.action.aero[type="checkbox"]:checked ~ #showcase .tire {
  background: #287018;
  border-width: 3px;
}
.action.aero[type="checkbox"]:checked ~ #showcase .shaft {
  background: #287018;
}
.action.aero[type="checkbox"]:checked ~ #showcase .shaft::before {
  background: #287018;
}
.action.zoom[type="checkbox"]:checked ~ #showcase .camera {
  -webkit-transform: scale3d(2, 2, 2);
          transform: scale3d(2, 2, 2);
}
.action.ride[type="checkbox"]:checked ~ #showcase .camera {
  -webkit-transform: scale3d(50, 50, 50) translate(20px, 42px) translateZ(17px);
          transform: scale3d(50, 50, 50) translate(20px, 42px) translateZ(17px);
} */

`;