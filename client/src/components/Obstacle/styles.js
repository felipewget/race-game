import styled from 'styled-components';


export const StyleObstacle = styled.div`
    div {
        width: 100px;
        height: 100px;
        background: #333;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: solid 1px #666;
        position: fixed;
        left: 100px;
        top: 100px;
        line-height: 100px;
        text-align: center;
        color: #FFF;
    }
`;

export const ContainerObstacles = styled.div`

    div {
        position: absolute   
    }

    .left {
        width: 100px;
        height: 500px;

        transform: skewX(-20deg);
        margin-left: 349px;
    }

    .mid {
        width: 100px;
        height: 500px;
        margin-left: 549px;
    }

    .right {
        width: 100px;
        height: 500px;

        transform: skewX(20deg);
        margin-left: 749px;
    }
`;