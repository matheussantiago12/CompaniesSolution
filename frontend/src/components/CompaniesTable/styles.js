import styled from 'styled-components';

export const Container = styled.div`
    table {
        width: 100%;
        box-shadow: 0 5px 20px rgb(0, 0, 0, 0.07);

        .score { text-align: center; }

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

                &:not(:last-child) {border-right: 2px solid rgb(255, 255, 255, 0.02);}
                 
                a {
                    text-decoration: none; 
                    color: rgb(210, 210, 210);
                }
            }
        }

        .action {
            width: 50px;
            text-align: center;
        }
    }
`;