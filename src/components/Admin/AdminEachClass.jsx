import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  color: white;
  /* font-size: 20px; */
  text-align: center;

  & p {
    background-color: #0892d0;
    padding: 15px;
  }
`;

export const AdminEachClass = () => {
  return (
    <Container>
      <p>Beginner Adult Swimming Class</p>
      <p>Caddy zee Zaddy</p>
      <p>$200.00</p>
    </Container>
  );
};
