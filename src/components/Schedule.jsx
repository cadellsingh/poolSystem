import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import slippers from '../images/slippers.jpg';
import firebase from '../firebase/config';

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

export const Schedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('classes').get();
      const classes = data.docs.map((doc) => doc.data());

      setClasses(classes);
    };

    fetchData();
  }, []);

  console.log(classes);

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
