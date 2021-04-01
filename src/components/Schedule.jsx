import styled from 'styled-components';
import { Navbar } from './Navbar';
import slippers from '../images/slippers.jpg';

const BackgroundImageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${slippers});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid red;
  text-align: center;
`;

export const Schedule = ({ classes }) => {
  return (
    <>
      <BackgroundImageContainer>
        <Navbar />
        <Container>
          <p>Class</p>
          <p>Time</p>
          <p>Instructor</p>
        </Container>
      </BackgroundImageContainer>
    </>
  );
};
