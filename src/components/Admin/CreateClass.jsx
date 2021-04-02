import { useReducer, useState } from 'react';
import styled from 'styled-components';
import {
  FirstDiv,
  Form,
  SecondDiv,
  StyledForm,
  ThirdDiv,
} from '../../styles/formStyling';
import firebase from '../../firebase/config';

const SuccessMessage = styled.div`
  border: 1px solid red;
`;

const initialClassState = {
  name: '',
  price: '',
  description: '',
  instructor: '',
  time: '',
  day: '',
};

const classReducer = (state, action) => {
  const { type, value } = action;

  return {
    ...state,
    [type]: value,
  };
};

export const CreateClass = () => {
  // deff export to use context api
  const [state, dispatch] = useReducer(classReducer, initialClassState);
  const [successMsg, setSuccessMsg] = useState('');

  const handleOnChange = (e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    const classesRef = firebase.firestore().collection('classes');
    classesRef
      .add({
        name: state.name,
        description: state.description,
        price: state.price,
        instructor: state.instructor,
        time: state.time,
        day: state.day,
      })
      .then((docRef) => {
        setSuccessMsg('Class Created');
      });

    // e.preventDefault();
  };

  return (
    <StyledForm>
      <p>Create class</p>
      <Form onSubmit={handleOnSubmit}>
        <FirstDiv>
          <input
            required
            type="text"
            name="name"
            placeholder="Class name"
            value={state.name}
            onChange={(e) => handleOnChange(e)}
          />
          <input
            required
            type="number"
            name="price"
            placeholder="Price"
            value={state.price}
            onChange={(e) => handleOnChange(e)}
          />
        </FirstDiv>

        <SecondDiv>
          <textarea
            required
            name="description"
            placeholder="Description"
            value={state.description}
            onChange={(e) => handleOnChange(e)}
          />
        </SecondDiv>

        <ThirdDiv>
          <input
            required
            type="text"
            name="instructor"
            placeholder="Instructor"
            value={state.instructor}
            onChange={(e) => handleOnChange(e)}
          />
          <select
            required
            name="time"
            value={state.time}
            onChange={(e) => handleOnChange(e)}
          >
            <option value="" disabled hidden>
              Time
            </option>
            <option value="10:30-12:00">10:30-12:00</option>
            <option value="1:30-2:30">1:30-2:30</option>
            <option value="8:30-10:00">8:30-10:00</option>
            <option value="7:30-9:00">7:30-9:00</option>
          </select>
          <select
            required
            name="day"
            value={state.day}
            onChange={(e) => handleOnChange(e)}
          >
            <option value="" disabled hidden>
              Day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </ThirdDiv>

        <button>Add Class</button>
      </Form>
    </StyledForm>
  );
};
