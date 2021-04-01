import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import swimming from '../images/swimming.jpg';
import { EachClass } from './EachClass';

const BackgroundImageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${swimming});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  & p:nth-child(1) {
    font-size: 20px;
    margin: 30px 0;
  }

  & p:nth-child(2) {
    font-size: 70px;
  }
`;

const ListOfClasses = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  width: 75%;
  margin: 20px auto;
`;

export const Classes = ({ classes }) => {
  console.log(classes);

  const displayClasses = classes.map((eachClass) => {
    const { id, name, description } = eachClass;
    return <EachClass key={id} name={name} description={description} />;
  });

  return (
    <>
      <BackgroundImageContainer>
        <Navbar />
        <Container>
          <p>Classes at GCP</p>
          <p>
            WATER AEROBICS. LIFEGUARD AND BASIC LIFE SAVING TRAINING. HIGH
            INTENSITY CARDIO WORKOUTS. BEGINNER TO ADVANCED SWIMMING CLASSES.
          </p>
        </Container>
      </BackgroundImageContainer>

      <ListOfClasses>{displayClasses}</ListOfClasses>
    </>
  );
};
