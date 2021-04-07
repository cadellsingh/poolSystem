import React from 'react';
import styled from 'styled-components';
import pool from '../images/pool1.jpg';
import { BackgroundImage } from '../styles/sharedStyles';

const Layout = styled(BackgroundImage)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Details = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;

  & h1 {
    font-size: 4rem;
  }

  & p:nth-child(2) {
    margin-top: 10px;
    margin-bottom: 45px;
    font-size: 2rem;
    font-style: italic;
  }

  & p:nth-child(3) {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  & p:nth-child(4) {
    font-size: 2.5rem;
    line-height: 40px;
  }
`;

export const Home = () => {
  return (
    <Layout>
      <Details>
        <h1>Gasparillo Swimming Pool</h1>
        <p>"Happiness is a day at the pool"</p>
        <p>About</p>

        <p>
          Gasparillo Swimming Pool was established in 1996, and became open to
          the public in 1997. Since then, we have given swimming lessons to over
          2000 persons of various age groups. We currently offer swimming
          lessons, both private and group, for multiple experience levels and
          age groups. We also offer a variety of pool classes, such as aerobics,
          lifeguard and basic life saving training, high intensity cardio
          training, and many more. See the schedule posted monthly for a full
          list of activities.
        </p>
      </Details>
    </Layout>
  );
};
