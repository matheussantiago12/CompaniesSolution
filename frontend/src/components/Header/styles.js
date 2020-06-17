import styled from 'styled-components';

export const Container = styled.header`
    height: 60px;
    width: 100%;
    line-height: 60px;
    display: flex;
    background-color: rgb(29, 33, 46);
    justify-content: space-between;
    box-shadow: 0 5px 20px rgb(0, 0, 0, 0.07);

    .short-text { display: none; }

    div.title {
        height: 100%;
        padding: 0 24px;

        a { text-decoration: none; }

        h1 {
            font-weight: 400;
            font-size: 24px;
            color: rgb(163, 163, 179);
        }
    }

    div.search {
        padding: 0 24px;

        input {
            width: 160px;
            height: 30px;
            background-color: rgb(0, 0, 0, 0);
            border: 0;
            border-bottom: 2px solid rgb(45, 48, 61);
            outline: none;
            color: rgb(150, 150, 166);
        }

        button {
            background-color: rgb(0, 0, 0, 0);
            height: 35px;
            color: rgb(150, 150, 166);
            font-weight: 300;
            border: 0;
            border-bottom: 2px solid rgb(45, 48, 61);
            outline: none;
            padding: 0 3px;
        }
    }

    @media screen and (max-width: 600px) {
        .full-text { display: none; }
        .short-text { display: inline-block; }
        div.search, div.title { padding: 0 8px; }
    }
`;