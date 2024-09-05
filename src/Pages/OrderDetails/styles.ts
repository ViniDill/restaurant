import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    width: 100vw;
    padding: 20px 20%;
    background-color: white;

    ${media.lessThan("medium")`
        padding: 0;
    `}
`

export const RemoveIngredientsContainer = styled.div``

export const AddIngredientsContainer = styled.div``

export const Observation = styled.div`

        display: flex;
        flex-direction: column;
        text-align: left;

        h2 {
            margin: 30px 0 15px;
            color: black;
        }


    textarea {
        cursor: text;
        outline: none;
        border: 0;
        appearance: none;
        padding: 20px 10px;
        background-color: transparent;
        resize: none;
        word-break: break-word;
        width: 100%;
    }
`

export const Subtitle = styled.h2`
    background-color: grey;
    text-align: left;
    padding-left: 10px;

    ${media.lessThan("medium")`
        max-width: 100%;
    `}
`

export const Division = styled.div`
    width: 100%;
    border-bottom: 1px solid green;
    background-color: green;
`