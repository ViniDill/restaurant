import React from "react";
import Card from "../../Components/Card";
import { Container } from "./styles";
import ContactCard from "../../Components/ContactCard";

const Tests: React.FC = () => {
  return (
    <Container>
      <div>
        <ContactCard type="email" value="contato@empresa.com" />
        <ContactCard type="phone" value="+5511999999999" />
        <ContactCard type="facebook" value="https://facebook.com/empresa" />
        <ContactCard type="instagram" value="https://instagram.com/empresa" />
      </div>
      <h1>Teste</h1>
      <Card
        image={<img src="./icons/Cheers.png" alt="xis" />}
        description="lorem ipsum dolor teste das sombras lanche saboroso agua e sal"
        title="BACON"
        types={["Normal", "Mini"]}
        prices={[22.52, 18.27]}
      />

      <Card
        image={<img src="./icons/fundo.jpeg" alt="xis" />}
        description="picles, ovo, queijo, mostarda, crem, vinagre, figado"
        title="FRANGO"
        types={["Normal", "Mini"]}
        prices={[20.52, 16.27]}
      />
    </Container>
  );
};

export default Tests;
