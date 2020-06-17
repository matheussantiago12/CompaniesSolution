import styled from 'styled-components';

export const Container = styled.div`
    h1 {
        color: rgb(150, 150, 166);
        font-weight: 300;
        padding: 16px 3px;
        font-size: 24px;
    }

    table {
        width: 100%;
        box-shadow: 0 5px 20px rgb(0, 0, 0, 0.07);

        thead {
            border: 0px;

            tr {
                background-color: rgb(0, 0, 0, 0.21);
                color: rgb(210, 210, 210);
            }

            th {
                &:first-child { border-radius: 2px 0 0 0; }
            
                &:last-child { border-radius: 0 2px 0 0; }
                
                padding: 12px;
                text-align: left;
                font-weight: 400;
            }
        }

        tbody {
            tr {
                border: 1px solid white;

                &:nth-child(even) { background-color: rgb(0, 0, 0, 0.09); }

                &:nth-child(odd) { background-color: rgb(255, 255, 255, 0.0075); }

                color: rgb(175, 175, 175);
            }

            td {
                padding: 13px;
                font-weight: lighter;

                &:not(:last-child) { border-right: 2px solid rgb(255, 255, 255, 0.02); }
                
                a {
                    text-decoration: none; 
                    color: rgb(210, 210, 210);
                }
            }

            .result {
                width: 55px;
                text-align: center;
            }

            .positive { color: #46af73; }
            
            .negative { color: #e83b66; }
        }
    }

    div.feed {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding-right: 6px;

        .inputfile {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
            
        }

        .inputfile + label {
            height: 30px;
            font-size: 16px;
            font-weight: 300;
            color: white;
            background-color: #2F945B;
            display: inline-block;
            border-radius: 5px 0 0 5px;
            padding: 5px;
        }

        .inputfile:focus + label, .inputfile + label:hover {
            filter: brightness(82%);
        }

        .inputfile + label {
            cursor: pointer;
        }

        button {
            height: 30px;
            padding: 3px;
            border: 0px solid black;
            border-radius: 0 5px 5px 0;
            background-color: #0A633B;
            color: #DDE;
            cursor: pointer;

            &:hover {
                filter: brightness(90%);
            }
        }  
    }
`;