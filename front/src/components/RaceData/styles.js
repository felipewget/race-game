import styled from 'styled-components';


export const Block = styled.div`
    width: 170px;
    height: 100px;
    background: #CCC;
    z-index: 10;
    position: absolute;
    border-bottom-right-radius: 3px;
    opacity: 0.8;

    ul {
        list-style: none;
        padding: 0px;

        li {
            color: #000;
            padding: 10px;
            padding-top: 0px;
        }
    }
`;