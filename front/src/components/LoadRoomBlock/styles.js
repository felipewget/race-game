import styled from 'styled-components';

export const Block = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;

    div {
        width: 200px;
        height: 70px;
        background: #FFF;
        border-radius: 2px;
        box-shadow: 0px 0px 3px #555;

        i {
            display: block;
            padding: 10px;
            text-align: center;
            animation: spinner .6s linear infinite;
        }

        p {
            text-align: center;
            margin-top: 5px;
            margin-bottom: 10px;
        }
    }

    @keyframes spinner {
        to {
           transform: rotate(360deg);
        }
    }
`;