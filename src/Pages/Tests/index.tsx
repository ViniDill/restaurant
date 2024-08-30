import React from "react";
import Card from "../../Components/Card";
import { Container } from "./styles";

const Tests: React.FC = () => {
  return (
    <Container>
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
