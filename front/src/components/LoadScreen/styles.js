import styled from 'styled-components';

export const Loader = styled.div`

    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 30px;
        display: block;
        animation: spinner .6s linear infinite;
    }

    @keyframes spinner {
        to {
           transform: rotate(360deg);
        }
    }
`;