import React from "react";

import { Container } from "./styles";

const NavBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </Container>
  );
};

export default NavBar;
