import styled from 'styled-components';

export const ContainerBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Block = styled.div`
        width: 400px;
        min-height: 0px;
        background: #FFF;
        box-shadow: 0px 0px 3px #DDD;
        border-radius: 2px;

        * {
            outline: none;
        }

        div.header {
            padding: 5px;
            border-bottom: solid 1px #DDD;
            font-size: 12px;

            button {
                float: right;
                border: none;
                background: #668FAF;
                border-radius: 2px;
                cursor: pointer;
                color: #FFF;
            }
        }

        button.ready {
            float: right;
            margin: 10px;
            margin-top: 0px;
            background: #668FAF;
            border-radius: 2px;
            color: #FFF;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
        }

        p.waiting-others-players {
            text-align: center;
            font-size: 12px;
            color: #555;
        }

        ul {
            list-style: none;
            padding-left: 0px;

            li {
                border-bottom: solid 1px #DDD;
                padding: 5px;
                overflow:hidden;
                line-height: 30px;
                font-size: 13px;

                i {
                    width: 30px;
                    height: 30px;
                    border-radius: 3px;
                    background: #CCC;
                    float: left;
                    line-height: 30px;
                    text-align: center;
                    background: #555;
                    color: #FFF;
                    font-size: 14px;
                    margin-right: 10px;
                }

                i.ready {
                    float: right;
                    color: #333;
                    background: transparent;
                }

            }
        }

        
`;