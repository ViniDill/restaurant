import React from "react";

import { Container } from "./styles";

export interface AddButtonProps {
  text: string;
  price: number;
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ text, price, onClick }) => {
  return (
    <Container onClick={onClick}>
      <p>{text}</p>
      <p>+ R$ {price}</p>
    </Container>
  );
};

export default AddButton;
