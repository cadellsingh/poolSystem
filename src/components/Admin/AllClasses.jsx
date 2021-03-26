import React from 'react';
import styled from 'styled-components';
import { AdminEachClass } from './AdminEachClass';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 5px;
`;

const Test = styled.div`
  /* display: flex;
  justify-content: space-around; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  color: white;
  font-size: 20px;
  text-align: center;

  & p {
    background-color: #0892d0;
    padding: 15px;
  }
`;

export const AllClasses = () => {
  return (
    <Container>
      <Test>
        <p>Class name</p>
        <p>Instructor</p>
        <p>Price</p>
      </Test>
      <AdminEachClass />
      <AdminEachClass />
      <AdminEachClass />
      <AdminEachClass />
    </Container>
  );
};
