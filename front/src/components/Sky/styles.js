import styled from 'styled-components';

export const SkyStyle = styled.div`
    
    position: fixed;
    width: 1200px;
    top: 0;
    height: calc( 100% - 500px );
    left: 50%;
    margin-left: -600px;
    z-index: 10;
    overflow: hidden;

.moon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: none;
  width: 32px;
  height: 32px;
  background-color: #fefcfd;
  margin: auto;
  -webkit-box-shadow: 0 0 0 16px #f9dfe8, 0 0 0 32px #f4c5d9, 0 0 0 48px #e8a0c5, 0 0 0 64px #d779ad, 0 0 0 80px #b35d8e, 0 0 0 96px #894173, 0 0 0 112px #6a3468, 0 0 0 128px #61265c, 0 0 0 144px #502052, 0 0 0 160px #391145, 0 0 0 176px #310a3f, 0 0 0 192px #2a0938;
  box-shadow: 0 0 0 16px #f9dfe8, 0 0 0 32px #f4c5d9, 0 0 0 48px #e8a0c5, 0 0 0 64px #d779ad, 0 0 0 80px #b35d8e, 0 0 0 96px #894173, 0 0 0 112px #6a3468, 0 0 0 128px #61265c, 0 0 0 144px #502052, 0 0 0 160px #391145, 0 0 0 176px #310a3f, 0 0 0 192px #2a0938;
}
.moon:after {
  content: ' ';
  width: 32px;
  height: 32px;
  top: -8px;
  right: -8px;
  position: absolute;
  background-color: #f9dfe8;
  border-radius: 50%;
}
.box,
.forest .left .tree_1,
.forest .right .tree_1,
.forest .left .tree_2,
.forest .right .tree_2,
.forest .left .tree_3,
.forest .right .tree_3,
.forest .left .tree_4,
.forest .right .tree_4,
.forest .left .tree_5,
.forest .right .tree_5,
.forest .center .tree_1,
.forest .center .tree_2,
.forest .center .tree_3 {
  position: absolute;
  width: 200px;
  height: 200px;
}
.gradient-right,
.forest .right .tree_1,
.forest .right .tree_2,
.forest .right .tree_3,
.forest .right .tree_4,
.forest .right .tree_5 {
  background: -webkit-linear-gradient(317deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: -moz-linear-gradient(317deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: -o-linear-gradient(317deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: -ms-linear-gradient(317deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: linear-gradient(133deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
}
.gradient-left,
.forest .left .tree_1,
.forest .left .tree_2,
.forest .left .tree_3,
.forest .left .tree_4,
.forest .left .tree_5 {
  background: -webkit-linear-gradient(315deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: -moz-linear-gradient(315deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: -o-linear-gradient(315deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: -ms-linear-gradient(315deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
  background: linear-gradient(135deg, #8f4c78 0%, #006622 45%, rgba(27,4,48,0) 46%, rgba(27,4,48,0) 100%);
}
.gradient-center,
.forest .center .tree_1,
.forest .center .tree_2,
.forest .center .tree_3 {
  background: -webkit-linear-gradient(315deg, #8f4c78 0%, #006622 45%, #006622 55%, rgba(27,4,48,0) 56%, rgba(27,4,48,0) 100%);
  background: -moz-linear-gradient(315deg, #8f4c78 0%, #006622 45%, #006622 55%, rgba(27,4,48,0) 56%, rgba(27,4,48,0) 100%);
  background: -o-linear-gradient(315deg, #8f4c78 0%, #006622 45%, #006622 55%, rgba(27,4,48,0) 56%, rgba(27,4,48,0) 100%);
  background: -ms-linear-gradient(315deg, #8f4c78 0%, #006622 45%, #006622 55%, rgba(27,4,48,0) 56%, rgba(27,4,48,0) 100%);
  background: linear-gradient(135deg, #8f4c78 0%, #006622 45%, #006622 55%, rgba(27,4,48,0) 56%, rgba(27,4,48,0) 100%);
}
.forest .left .tree_1,
.forest .right .tree_1 {
  top: 69%;
  -webkit-transform: scale(1.9) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -moz-transform: scale(1.9) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -o-transform: scale(1.9) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -ms-transform: scale(1.9) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  transform: scale(1.9) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
}
.forest .left .tree_2,
.forest .right .tree_2 {
  top: 69%;
  -webkit-transform: scale(1.7) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -moz-transform: scale(1.7) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -o-transform: scale(1.7) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -ms-transform: scale(1.7) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  transform: scale(1.7) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
}
.forest .left .tree_3,
.forest .right .tree_3 {
  top: 69%;
  -webkit-transform: scale(1.5) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -moz-transform: scale(1.5) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -o-transform: scale(1.5) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -ms-transform: scale(1.5) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  transform: scale(1.5) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
}
.forest .left .tree_4,
.forest .right .tree_4 {
  top: 69%;
  -webkit-transform: scale(1.3) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -moz-transform: scale(1.3) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -o-transform: scale(1.3) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -ms-transform: scale(1.3) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  transform: scale(1.3) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
}
.forest .left .tree_5,
.forest .right .tree_5 {
  top: 69%;
  -webkit-transform: scale(1.1) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -moz-transform: scale(1.1) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -o-transform: scale(1.1) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  -ms-transform: scale(1.1) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
  transform: scale(1.1) rotateX(-7deg) rotateY(-80deg) skewX(-26deg) skewY(42deg);
}
.forest .left .tree_1 {
  left: 2%;
}
.forest .left .tree_2 {
  left: 8%;
}
.forest .left .tree_3 {
  left: 13%;
}
.forest .left .tree_4 {
  left: 17%;
}
.forest .left .tree_5 {
  left: 20%;
}
.forest .right .tree_1 {
  right: 2%;
}
.forest .right .tree_2 {
  right: 8%;
}
.forest .right .tree_3 {
  right: 13%;
}
.forest .right .tree_4 {
  right: 17%;
}
.forest .right .tree_5 {
  right: 20%;
}
.forest .center .tree_1 {
  z-index: 9;
  top: 82%;
  left: 0;
  right: 0;
  margin: 0 auto;
  -webkit-transform: scale(2) rotateX(-70deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -moz-transform: scale(2) rotateX(-70deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -o-transform: scale(2) rotateX(-70deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -ms-transform: scale(2) rotateX(-70deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  transform: scale(2) rotateX(-70deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
}
.forest .center .tree_2 {
  z-index: 8;
  top: 77%;
  left: 25%;
  -webkit-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -moz-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -o-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -ms-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
}
.forest .center .tree_3 {
  z-index: 8;
  top: 76%;
  right: 25%;
  -webkit-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -moz-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -o-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  -ms-transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
  transform: scale(1.7) rotateX(-74deg) rotateY(-1deg) skewX(-27deg) skewY(44deg);
}
@media only screen and (max-width: 768px) {
  .forest .left .tree_1 {
    left: -16%;
  }
  .forest .left .tree_2 {
    left: -8%;
  }
  .forest .left .tree_3 {
    left: 0%;
  }
  .forest .left .tree_4 {
    left: 8%;
  }
  .forest .left .tree_5 {
    left: 15%;
  }
  .forest .right .tree_1 {
    right: -16%;
  }
  .forest .right .tree_2 {
    right: -8%;
  }
  .forest .right .tree_3 {
    right: 0%;
  }
  .forest .right .tree_4 {
    right: 8%;
  }
  .forest .right .tree_5 {
    right: 15%;
  }
  .forest .center .tree_2 {
    left: 5%;
  }
  .forest .center .tree_3 {
    right: 5%;
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (orientation: portrait) {
  .forest .left .tree_1 {
    left: -16%;
  }
  .forest .left .tree_2 {
    left: -8%;
  }
  .forest .left .tree_3 {
    left: 0%;
  }
  .forest .left .tree_4 {
    left: 8%;
  }
  .forest .left .tree_5 {
    left: 15%;
  }
  .forest .right .tree_1 {
    right: -16%;
  }
  .forest .right .tree_2 {
    right: -8%;
  }
  .forest .right .tree_3 {
    right: 0%;
  }
  .forest .right .tree_4 {
    right: 8%;
  }
  .forest .right .tree_5 {
    right: 15%;
  }
  .forest .center .tree_2 {
    left: 5%;
  }
  .forest .center .tree_3 {
    right: 5%;
  }
}


`;