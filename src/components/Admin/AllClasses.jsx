import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase/config';
import { CardContainer } from '../../styles/sharedStyles';

// repeated styles on Schedule and AllClasses components

const Container = styled.div`
  width: 90%;
  grid-column: span 3 / auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  /* padding: 20px; */
  margin: 20px auto;
`;

const ClassDetails = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
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
  margin-top: 10px;

  & button {
    padding: 10px;
    font-size: 16px;
    color: white;
    border-radius: 5px;
  }

  & button:hover {
    cursor: pointer;
  }

  & button:nth-child(1) {
    color: #0892d0;
    border: 1px solid #0892d0;
  }

  & button:nth-child(2) {
    color: #d11a2a;
    border: 1px solid #d11a2a;
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
          <Link to={`/admin/${id}`}>
            <button>Update Class</button>
          </Link>
          <button>Delete Class</button>
        </Buttons>
      </ClassDetails>
    );
  });

  // can add search functionality somewhere

  return <Container>{displayClasses}</Container>;
};
