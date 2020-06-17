import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    padding: 50px 0;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
        width: 95%;
        margin: 0 auto;
    }

    h1 {
        color: rgb(150, 150, 166);
        font-weight: 300;
        padding: 16px 3px;
        font-size: 24px;
    }

    div.register {
        padding-left: 5px;

        input {
            padding: 6px;
            outline: none;
            border: 0px;
            border-radius: 3px 0 0 3px;
            background-color: rgb(0, 0, 0, 0.12);
            color: rgb(215, 215, 215);
        }

        button {
            padding: 6px;
            outline: none;
            border: 0px;
            border-radius: 0 3px 3px 0;
            cursor: pointer;
            background-color: #2F945B;
            color: rgb(230, 230, 230);
        }
    }
`;