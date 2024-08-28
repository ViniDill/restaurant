import React from "react";

import { Container } from "./styles";

import NavBar from "../../Components/Navbar";

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </Container>
  );
};

export default Home;
