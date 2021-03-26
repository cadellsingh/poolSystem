import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
`;

export const CreateClass = () => {
  return (
    <Container>
      <h1>create class</h1>
    </Container>
  );
};
