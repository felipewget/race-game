import styled from 'styled-components';


export const Panel = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    z-index: 1000;
    justify-content: center;

    * {
        outline: none;
    }

    div{
        width: 500px;
        height: 190px;

        div {
            float: left;
            height: 190px;
        }

        .controls {
            background: #FFF;
            width: 210px;
            padding-left: 10px;
            padding-top: 5px;

            div {
                border-bottom: solid 1px #AAA;
                color: #555;
                padding: 5px;
                margin-bottom: 5px;
                height: 20px;
                width: 190px;
            }

            p {
                margin-top: 5px;
                font-size: 12px;
                color: #777;
                display: block;
                overflow: hidden;
                width: 200px;

                span {
                    font-size: 13px;
                    color: #444;
                }
            }
        }

        .register {
            background: #EFEFEF;
            width: 250px;
            padding-top: 5px;

            p {
                font-size: 14px;
                padding: 10px;
                margin-top: 0px;
            }
        }

        form {
                    
                div {
                    border: solid 1px #AAA;
                    border-radius: 2px;
                    width: 200px;
                    margin-left: 22px;
                    height: 30px;
                    overflow: hidden;
                    background: #FEFEFE;

                    i {
                        width: 30px;
                        height: 30px;
                        border-right: solid 1px #AAA;
                        text-align: center;
                        line-height: 30px;
                        background: #EEE;
                        color: #555;
                        float: left;
                    }

                    input {
                        height: 30px;
                        width: calc( 100% - 43px );
                        border: none;
                        float: left;
                        background: transparent;
                        padding-left: 10px;
                    }
                }
                
            }

            button {
                width: 200px;
                border: none;
                background: #668FAF;
                color: #FFF;
                margin-left: 22px;
                height: 30px;
                border-radius: 3px;
                margin-top: 10px;
                cursor: pointer;
            }

    }
`;