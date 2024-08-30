import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('./icons/fundo.jpeg');
  background-size: cover;
  background-position: center;
  text-align: center;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`

export const Title = styled.div`
    height: 250px;
    background-color: pink;
    margin-top: 80px;
    padding: 40px;
    z-index: 1;
    width: 100%;

    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);

`

export const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    z-index: 1;
    justify-content: center;

    padding: 100px 50px;
`