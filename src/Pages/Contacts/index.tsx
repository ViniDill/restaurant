import React from "react";
import NavBar from "../../Components/Navbar";
import { Container, CardContent, Title } from "./styles";

import ContactCard from "../../Components/ContactCard";

const Contacts: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Title>
        <h1>Como você prefere falar com a gente?</h1>
      </Title>
      <CardContent>
        <ContactCard type="email" value="contato@empresa.com" />
        <ContactCard type="phone" value="+5511999999999" />
        <ContactCard type="facebook" value="https://facebook.com/empresa" />
        <ContactCard type="instagram" value="https://instagram.com/empresa" />
      </CardContent>
    </Container>
  );
};

export default Contacts;
