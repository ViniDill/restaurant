import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: lightgray;
  margin-bottom: 10px;
  height: 150px;
  justify-content: space-evenly;
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #333;

  .Icon {
    width: 50px;
    height: 50px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  color: #333;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`;