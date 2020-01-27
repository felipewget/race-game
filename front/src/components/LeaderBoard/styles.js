import styled from 'styled-components';

export const Board = styled.div`

    * {
        outline: none;
    }

    div.container-board {

        width: 400px;
        position: fixed;
        height: 100%;
        top: 0px;
        right: 0px;
        z-index: 10000;

    }
    

    div[data-status="closed"] {
        transition: 0.3s;
        right: -350px;
    }

    div[data-status="opened"] {
        transition: 0.3s;
        right: 0px;
    }

    button {
        position: absolute;
        top: 50%;
        margin-top: -25px;
        width: 50px;
        height: 50px;
        background: #DDD;
        border: none;
        cursor: pointer;
    }

    .board {
        width: 350px;
        position: absolute;
        height: 100%;
        background: #DDD;
        margin-left: 50px;

        .header {
            border-bottom: solid 1px #AAA;
            padding: 10px;
            font-size: 20px;
            margin: 10px;
        }

        ul {
            list-style: none;

            li {
                display: block;
                overflow: hidden;

                i {
                    float: left;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    margin-right: 10px;
                }

                span {
                    font-size: 14px;
                    line-height: 30px;
                }

                span[data-time] {
                    font-size: 11px;
                    margin-left: 5px;
                }
            }

        }

    }
`;