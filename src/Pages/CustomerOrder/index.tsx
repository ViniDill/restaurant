import React from "react";

import { Container, Content } from "./styles";

import NavBar from "../../Components/Navbar";
import DeliveryCard from "../../Components/DeliveryCard";

const CustomerOrder: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <DeliveryCard
          title="Xis da Casa - Normal"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={30.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Mini"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={26.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Normal"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={30.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Mini"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={26.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Normal"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={30.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Mini"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={26.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Normal"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={30.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
        <DeliveryCard
          title="Xis da Casa - Mini"
          description="Pão, hambúrguer, presunto, queijo, ovo, alface, tomate e maionese"
          prices={26.0}
          image={<img src="./icons/Cheers.png" alt="xis" />}
        />
      </Content>
    </Container>
  );
};

export default CustomerOrder;
