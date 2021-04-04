import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase/config';

// repeated styles on Schedule and AllClasses components

const Container = styled.div`
  grid-column: span 3 / auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;
  color: black;
`;

const ClassDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: black;

  & p:nth-child(1) {
    font-size: 20px;
    font-weight: 900;
  }

  & p:nth-child(2) {
    font-size: 18px;
    margin: 10px 0;
  }

  & p:nth-child(4) {
    margin: 10px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  & a {
    margin: auto 0;
    padding: 5px;
    background-color: green;
  }

  & p:nth-child(2) {
    font-size: 16px;
    padding: 5px;
    background-color: red;
  }
`;

export const AllClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('classes').get();
      const classes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setClasses(classes);
    };

    fetchData();
  }, []);

  const displayClasses = classes.map((eachClass) => {
    const { name, instructor, price, id, description, day, time } = eachClass;

    return (
      <ClassDetails key={id}>
        <p>{name}</p>
        <p>Instructor - {instructor}</p>
        <p>{description}</p>
        <p>Price: ${price}.00 per month</p>
        <p>
          {day}, {time}
        </p>

        <Buttons>
          <Link to={`/admin/${id}`}>Update Class</Link>
          <p>Delete Class</p>
        </Buttons>
      </ClassDetails>
    );
  });

  return <Container>{displayClasses}</Container>;
};
