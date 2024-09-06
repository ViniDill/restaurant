import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Container, IconContainer, MobileMenu, DrawerContent } from "./styles";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Container>
      <img
        src="./icons/Cheers.png"
        alt="logo"
        className="Image"
        onClick={() => {
          navigate("/");
        }}
      />
      <IconContainer>
        <Button
          className="HomeButton"
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
        <Button
          className="AboutUsButton"
          onClick={() => {
            navigate("/about-us");
          }}
        >
          SOBRE NÓS
        </Button>
        <Button
          className="MenuButton"
          onClick={() => {
            navigate("/menu");
          }}
        >
          CARDÁPIO
        </Button>
        <Button
          className="ContactsButton"
          onClick={() => {
            navigate("/contacts");
          }}
        >
          CONTATOS
        </Button>
        <Button
          className="FacebookButton"
          href="https://www.facebook.com"
          target="_blank"
        >
          <FacebookIcon className="FacebookIcon" />
        </Button>
        <Button
          className="InstagramButton"
          href="https://www.instagram.com"
          target="_blank"
        >
          <InstagramIcon className="InstagramIcon" />
        </Button>
        <Button className="ShoppingCartButton">
          <ShoppingCartIcon className="ShoppingCartIcon" />
        </Button>
        <Button
          className="OrderButton"
          onClick={() => {
            navigate("/customer-order");
          }}
        >
          FAÇA SEU PEDIDO
        </Button>
      </IconContainer>
      <MobileMenu>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: "50%" },
          }}
        >
          <DrawerContent
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Button
              className="DrawerButton"
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </Button>
            <Button
              className="DrawerButton"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              SOBRE NÓS
            </Button>
            <Button
              className="DrawerButton"
              onClick={() => {
                navigate("/menu");
              }}
            >
              CARDÁPIO
            </Button>
            <Button
              className="DrawerButton"
              onClick={() => {
                navigate("/contacts");
              }}
            >
              CONTATOS
            </Button>
            <Button
              className="DrawerButton"
              href="https://www.facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </Button>
            <Button
              className="DrawerButton"
              href="https://www.instagram.com"
              target="_blank"
            >
              <InstagramIcon />
            </Button>
            <Button className="DrawerButton">
              <ShoppingCartIcon />
            </Button>
            <Button
              className="OrderButton"
              onClick={() => {
                navigate("/customer-order");
              }}
            >
              FAÇA SEU PEDIDO
            </Button>
          </DrawerContent>
        </Drawer>
      </MobileMenu>
    </Container>
  );
};

export default NavBar;
