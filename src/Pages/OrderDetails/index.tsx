import React from "react";
import AddIngredients from "../../Components/AddIngredients";
import RemoveIngredients from "../../Components/RemoveIngredients";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Incrementor from "../../Components/Incrementor";

import {
  Container,
  RemoveIngredientsContainer,
  AddIngredientsContainer,
  Observation,
  Subtitle,
  Division,
} from "./styles";

const OrderDetails: React.FC = () => {
  return (
    <Container>
      <RemoveIngredientsContainer>
        <Subtitle>Retirar Ingredientes</Subtitle>
        <RemoveIngredients title="Alface" />
        <RemoveIngredients title="Cebola" />
        <RemoveIngredients title="Tomate" />
        <RemoveIngredients title="Batata Palha" />
        <RemoveIngredients title="Presunto" />
        <RemoveIngredients title="Queijo" />
        <RemoveIngredients title="Ovo" />
        <RemoveIngredients title="Maionese" />
      </RemoveIngredientsContainer>
      <AddIngredientsContainer>
        <Subtitle>Adicionar Ingredientes</Subtitle>
        <AddIngredients title="Alface" price={2.0} />
        <AddIngredients title="Cheddar" price={2.0} />
        <AddIngredients title="Catupiry" price={2.0} />
        <AddIngredients title="Bacon" price={2.0} />
        <AddIngredients title="Ovo" price={2.0} />
        <AddIngredients title="Milho" price={2.0} />
        <AddIngredients title="Ervilha" price={2.0} />
        <AddIngredients title="Batata Palha" price={2.0} />
        <AddIngredients title="Mussarela" price={2.0} />
        <AddIngredients title="Tomate" price={2.0} />
      </AddIngredientsContainer>
      <Observation>
        <h2>
          <TextsmsIcon /> Alguma observação?
        </h2>
        <textarea placeholder="Observação"></textarea>
        <Division />
      </Observation>
    </Container>
  );
};

export default OrderDetails;
