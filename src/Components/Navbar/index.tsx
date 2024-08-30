import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

import { Container } from "./styles";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src="./icons/Cheers.png" alt="logo" className="Image" />
      <div className="icons">
        <Button href="#text-buttons" className="HomeButton">
          HOME
        </Button>
        <Button href="#text-buttons" className="AboutUsButton">
          SOBRE NÓS
        </Button>
        <Button
          href="#text-buttons"
          className="MenuButton"
          onClick={() => {
            navigate("/login");
          }}
        >
          CARDÁPIO
        </Button>
        <Button href="#text-buttons" className="ContactsButton">
          CONTATOS
        </Button>
        <Button href="#text-buttons" className="FacebookButton">
          <FacebookIcon className="FacebookIcon" />
        </Button>
        <Button href="#text-buttons" className="InstagramButton">
          <InstagramIcon className="InstagramIcon" />
        </Button>
        <Button href="#text-buttons" className="ShoppingCartButton">
          <ShoppingCartIcon className="ShoppingCartIcon" />
        </Button>
        <Button href="#text-buttons" className="OrderButton">
          FAÇA SEU PEDIDO
        </Button>
      </div>
    </Container>
  );
};

export default NavBar;
