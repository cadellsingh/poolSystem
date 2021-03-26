import React from 'react';
import styled from 'styled-components';
import pool from '../images/swimming5.jpg';
import { Navbar } from './Navbar';

const BackgroundImageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  padding: 20px;

  & p:first-child {
    font-size: 40px;
  }

  & p:nth-child(2) {
    font-size: 35px;
    margin: 25px 0;
  }

  & p:nth-child(3) {
    font-size: 22px;
    margin: 25px 0;
    line-height: 30px;
  }

  & p:nth-child(4) {
    font-size: 20px;
    margin: 25px 0;
  }

  & ul {
    list-style: none;
    font-size: 20px;
  }

  & ul li {
    margin: 5px 0;
  }
`;

export const ClassDetails = () => {
  return (
    <>
      <BackgroundImageContainer>
        <Navbar />
        <Container>
          <p>Beginner Adult Swimming Class</p>
          <p>Instructor - Caddyy the Zaddy</p>
          <p>
            This class is designed for adult swimmers with little or no
            experience in the water. Majority of this class takes place in the
            shallow end of the water and introduces basic concepts of stroke
            techniques as well as water safety.
          </p>

          <p>Price: $200.00 per month</p>
          <ul>
            <li>Thursday, 10:30 - 12:00</li>
            <li>Tuesday, 10:30 - 12:00</li>
            <li>Thursday, 10-:30 - 12:00 </li>
          </ul>
        </Container>
      </BackgroundImageContainer>
    </>
  );
};
