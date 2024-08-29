import styled from "styled-components";
export const Container = styled.nav`
    background-color: white;
    color: blue;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Image {
        width: 100%;
        height: 60px;
        max-width: 60px;
        margin-right: 20%;
    }

    .FacebookButton, .InstagramButton, .ShoppingCartButton {
        height: 50px;
        width: 25px;
        border: none;
    }

    .FacebookButton {
        margin-left: 50px;
    }


    .FacebookIcon, .InstagramIcon, .ShoppingCartIcon {
        color: black;
        height: 25px;
        width: 25px;
    }

    .HomeButton, .AboutUsButton, .MenuButton, .ContactsButton {
        width: 110px;
        color: black;
        font-weight: bold;
    }

    .OrderButton {
        background-color: #F9A75B;
        color: #FFFFFF;
        font-weight: bold;
        margin-left: 50px;
    }
`;
