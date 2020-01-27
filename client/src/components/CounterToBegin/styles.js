import styled from 'styled-components';

export const StyleCounter = styled.div`
    width: 100%;
    height: 100px;
    /* background: #FFF; */
    position: fixed;
    top: calc( 50% - 50px );
    /* box-shadow: 0px 0px 3px #CCC; */
    z-index: 5;

    i, p {
        margin: 0 auto;
        display: block;
        line-height: 100px;
        font-size: 70px;
        text-align: center;
        color: #555;
    }
`;