import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../Navbar';
import pool from '../../images/pool1.jpg';

const Container = styled.div`
  /* grid-column: span 3 / auto; */
`;

const BackgroundImageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const AdminNavbar = () => {
  // return (
  //   <Container>
  //     <Navbar />
  //     {/* <BackgroundImageContainer>
  //       <Navbar />
  //     </BackgroundImageContainer> */}
  //   </Container>
  // );
  return <Navbar />;
};
