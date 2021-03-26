import React from 'react';
import styled from 'styled-components';
import slippers from '../images/slippers.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & img {
    max-width: 100%;
    height: auto;
  }
`;

const ClassDetails = styled.div`
  grid-column: span 2 / auto;
  color: black;
  padding: 20px;
  background-color: #0892d0;
  text-align: right;

  & p:nth-child(1) {
    font-size: 20px;
    margin-bottom: 25px;
  }

  & p:nth-child(2) {
    font-size: 20px;
  }
`;

export const EachClass = () => {
  return (
    <Container>
      <img src={slippers} alt="" />
      <ClassDetails>
        <p>Beginner Adult Swimming Class</p>
        <p>
          This class is designed for adult swimmers with little or no experience
          in the water. Majority of this class takes place in the shallow end of
          the water and introduces basic concepts of stroke techniques as well
          as water safety.
        </p>
      </ClassDetails>
    </Container>
  );
};
