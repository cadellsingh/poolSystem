import { useState, useContext } from 'react';
import styled from 'styled-components';
import {
  FirstDiv,
  Form,
  SecondDiv,
  StyledForm,
  ThirdDiv,
} from '../../styles/formStyling';
import { GlobalContext } from '../../context/GlobalState';
import firebase from '../../firebase/config';
import { AdminBackground } from '../../styles/sharedStyles';
import { createClass } from '../../firebase/apis';

const SuccessMsg = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #4bb543;
  margin-bottom: 5px;
  font-size: 1.8rem;
`;

export const CreateClass = () => {
  const { classState, handleFormChange } = useContext(GlobalContext);
  const [successMsg, setSuccessMsg] = useState('');

  const handleOnSubmit = (e) => {
    // const classesRef = firebase.firestore().collection('classes');
    // classesRef
    //   .add({
    //     name: classState.name,
    //     description: classState.description,
    //     price: classState.price,
    //     instructor: classState.instructor,
    //     time: classState.time,
    //     day: classState.day,
    //   })
    //   .then((docRef) => {
    //     setSuccessMsg('Class Created');
    //   });

    createClass(classState).then((doc) => {
      setSuccessMsg('Class Created');
    });

    e.preventDefault();
  };

  return (
    <AdminBackground>
      <StyledForm>
        {successMsg ? <SuccessMsg>{successMsg}</SuccessMsg> : null}
        <p>Create class</p>
        <Form onSubmit={handleOnSubmit}>
          <FirstDiv>
            <input
              required
              type="text"
              name="name"
              placeholder="Class name"
              value={classState.name}
              onChange={(e) => handleFormChange(e)}
            />
            <input
              required
              type="number"
              name="price"
              placeholder="Price"
              value={classState.price}
              onChange={(e) => handleFormChange(e)}
            />
          </FirstDiv>

          <SecondDiv>
            <textarea
              required
              name="description"
              placeholder="Description"
              value={classState.description}
              onChange={(e) => handleFormChange(e)}
            />
          </SecondDiv>

          <ThirdDiv>
            <input
              required
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={classState.instructor}
              onChange={(e) => handleFormChange(e)}
            />
            <select
              required
              name="time"
              value={classState.time}
              onChange={(e) => handleFormChange(e)}
            >
              <option value="" disabled hidden>
                Time
              </option>
              <option value="10:30 - 12:00">10:30-12:00</option>
              <option value="1:30 - 2:30">1:30-2:30</option>
              <option value="8:30 - 10:00">8:30-10:00</option>
              <option value="7:30 - 9:00">7:30-9:00</option>
            </select>
            <select
              required
              name="day"
              value={classState.day}
              onChange={(e) => handleFormChange(e)}
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
    </AdminBackground>
  );
};
