import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;


    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:active{
        background-color: rgba(0, 0, 0, 0.2);
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    color: black;

`