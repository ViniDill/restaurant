import styled from "styled-components";

export const Container = styled.div`
`

export const Title = styled.div`
    height: 250px;
    background-color: pink;
    margin-top: 80px;
    padding: 40px;

    h1 {
        font-size: 64px;
        color: black;
        font-weight: 800;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 24px;
        color: black;

    }

`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding: 50px;
    justify-content: center;
    align-items: center;
`