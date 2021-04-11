import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase/config';
import { CardContainer } from '../../styles/sharedStyles';
import { GlobalContext } from '../../context/GlobalState';
import { SearchInput } from '../SearchInput';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ClassContainer = styled.div`
  grid-column: span 3 / auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0;
  font-size: 1.6rem;
`;

const ClassDetails = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: black;

  & p:nth-child(1) {
    font-size: 2.2rem;
    font-weight: 900;
  }

  & p:nth-child(2) {
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
  const { classes } = useContext(GlobalContext);
  const [input, setInput] = useState('');

  const handleDelete = (id) => {
    const classRef = firebase.firestore().collection('classes');

    classRef.doc(id).delete();
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const filteredClasses = classes.filter((eachClass) => {
    const { name, instructor, price } = eachClass;
    return (
      name.toLowerCase().includes(input) ||
      instructor.toLowerCase().includes(input) ||
      price.includes(input)
    );
  });

  const displayClasses = filteredClasses.map((eachClass) => {
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
          <Link to={`/${id}`}>
            <button>Update Class</button>
          </Link>
          <button onClick={() => handleDelete(id)}>Delete Class</button>
        </Buttons>
      </ClassDetails>
    );
  });

  return (
    <Container>
      <SearchInput input={input} handleOnChange={handleOnChange} />
      <ClassContainer>{displayClasses}</ClassContainer>
    </Container>
  );
};
