import React from 'react';
import styled from 'styled-components';

// can change all this into one

// delete class details

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ClassDetails = styled.div``;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-auto-rows: 1fr;

//   & img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

// const ClassDetails = styled.div`
//   grid-column: span 2 / auto;
//   color: black;
//   padding: 20px;
//   background-color: #0892d0;
//   text-align: right;

//   & p:nth-child(1) {
//     font-size: 20px;
//     margin-bottom: 25px;
//   }

//   & p:nth-child(2) {
//     font-size: 20px;
//   }
// `;

export const EachClass = ({ name, description }) => {
  return (
    <Container>
      <ClassDetails>
        <p>{name}</p>
        <p>{description}</p>
      </ClassDetails>
    </Container>
  );
};
