import React from "react";

import { Container, Text } from "./styles";
import Incrementor from "../Incrementor";

export interface AddIngredientsProps {
  title: string;
  price: number;
}

const AddIngredients: React.FC<AddIngredientsProps> = ({ title, price }) => {
  return (
    <Container>
      <Text>
        <p>{title}</p>
        <p>+ R$ {price.toFixed(2)}</p>
      </Text>
      <Incrementor />
    </Container>
  );
};

export default AddIngredients;
