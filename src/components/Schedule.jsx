import styled from 'styled-components';
import { Navbar } from './Navbar';
import slippers from '../images/slippers.jpg';

const Container = styled.div`
  color: black;
`;

const BackgroundImageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${slippers});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Schedule = ({ classes }) => {
  return (
    <>
      <BackgroundImageContainer>
        <Navbar />
        <Container>
          <h1>schedi;e</h1>
        </Container>
      </BackgroundImageContainer>
    </>
  );
};
