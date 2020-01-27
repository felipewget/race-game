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

    * {
        outline: none;
    }

    div {
        width: 450px;
        height: 230px;
        background: #FFF;
        border-radius: 2px;
        box-shadow: 0px 0px 3px #555;

        h1 {
            font-size: 20px;
            text-align: center;
            margin-bottom: 10px;
            padding: 10px;
        }

        p[data-description] {
            font-size: 14px;
            text-align: center;
            margin-top: 0px;
        }

        p[data-time] {
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            margin-top: 0px;
        }

        button {
            border-radius: 3px;
            padding: 10px;
            background: #668FAF;
            color: #FFF;
            margin: 0 auto;
            display: block;
            margin-top: 10px;
            border: none;
            cursor: pointer;
        }

    }
`;