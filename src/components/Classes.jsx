import { useContext } from 'react';
import styled from 'styled-components';
import { EachClass } from './EachClass';
import swimming from '../images/swimming.jpg';
import { GlobalContext } from '../context/GlobalState';

const Layout = styled.div`
  height: 90vh;
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
    font-size: 2rem;
    padding-top: 30px;
  }

  & p:nth-child(2) {
    font-size: 7rem;
  }
`;

const ClassesBackground = styled.div`
  background-color: white;
`;

const ListOfClasses = styled.div`
  width: 90%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 auto;
`;

export const Classes = () => {
  const { classes } = useContext(GlobalContext);

  const displayClasses = classes.map((eachClass) => {
    const { id } = eachClass;
    return <EachClass key={id} eachClass={eachClass} />;
  });

  return (
    <>
      <Layout>
        <Container>
          <p>Classes at GCP</p>
          <p>
            WATER AEROBICS. LIFEGUARD AND BASIC LIFE SAVING TRAINING. HIGH
            INTENSITY CARDIO WORKOUTS. BEGINNER TO ADVANCED SWIMMING CLASSES.
          </p>
        </Container>
      </Layout>
      <ClassesBackground>
        <ListOfClasses>{displayClasses}</ListOfClasses>
      </ClassesBackground>
    </>
  );
};
