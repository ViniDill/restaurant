import styled from "styled-components";

export const Container = styled.button`
    background-color: red;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 45px;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:active{
        background-color: rgba(255, 255, 255, 0.2);
    }
`