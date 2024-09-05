import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddIngredients from "../../Components/AddIngredients";
import RemoveIngredients from "../../Components/RemoveIngredients";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBar from "../../Components/Navbar";
import AddButton from "../../Components/AddButton";
import Incrementor from "../../Components/Incrementor";

import {
  Container,
  RemoveIngredientsContainer,
  AddIngredientsContainer,
  Observation,
  Subtitle,
  Division,
  CardContainer,
  ImageContainer,
  TextContainer,
  BackButton,
  AddContainer,
} from "./styles";

const OrderDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const deliveryCard = location.state;

  return (
    <Container>
      <NavBar />
      <BackButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        <span>Voltar</span>
      </BackButton>

      {deliveryCard && (
        <CardContainer>
          <TextContainer>
            <h1>{deliveryCard.title}</h1>
            <p>{deliveryCard.description}</p>
            <p>R$ {deliveryCard.prices.toFixed(2)}</p>
          </TextContainer>
          <ImageContainer>
            <img src={deliveryCard.image} alt="xis" />
          </ImageContainer>
        </CardContainer>
      )}

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
      <AddContainer>
        <h2>Adicionar ao Carrinho</h2>
        <Incrementor />
        <AddContainer>
          <h2>Adicionar ao Carrinho</h2>
          <Incrementor />
          <AddButton
            onClick={() => navigate(-1)}
            text="Adicionar ao Carrinho"
            price={deliveryCard.prices.toFixed(2)}
          />
        </AddContainer>
      </AddContainer>
    </Container>
  );
};

export default OrderDetails;
