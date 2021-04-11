import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import firebase from '../../firebase/config';
import {
  FirstDiv,
  Form,
  SecondDiv,
  StyledForm,
  ThirdDiv,
} from '../../styles/formStyling';
import { AdminBackground } from '../../styles/sharedStyles';
import { GlobalContext } from '../../context/GlobalState';

const SuccessMsg = styled.p`
  text-align: center;
  padding: 10px;
  background-color: #4bb543;
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 1.8rem;
  color: white;
`;

export const UpdateClass = () => {
  // maybe use usereducer instead
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [day, setDay] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const { classes } = useContext(GlobalContext);

  const { classID } = useParams();

  const getClass = classes.find((eachClass) => {
    const { id } = eachClass;

    return classID === id;
  });

  useEffect(() => {
    if (getClass) {
      setName(getClass.name);
      setDay(getClass.day);
      setTime(getClass.time);
      setDescription(getClass.description);
      setInstructor(getClass.instructor);
      setPrice(getClass.price);
    }
  }, []);

  const handleOnSubmit = (e) => {
    const classRef = firebase.firestore().collection('classes');
    classRef
      .doc(classID)
      .update({
        name: name,
        description: description,
        price: price,
        instructor: instructor,
        time: time,
        day: day,
      })
      .then((docRef) => {
        setSuccessMsg('Class Updated');
      });

    e.preventDefault();
  };

  return (
    <AdminBackground>
      <StyledForm>
        {successMsg ? <SuccessMsg>{successMsg}</SuccessMsg> : null}
        <p>Update class</p>
        <Form onSubmit={handleOnSubmit}>
          <FirstDiv>
            <input
              required
              type="text"
              name="name"
              placeholder="Class name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FirstDiv>

          <SecondDiv>
            <textarea
              required
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </SecondDiv>

          <ThirdDiv>
            <input
              required
              type="text"
              placeholder="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
            />
            <select
              required
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
              value={day}
              onChange={(e) => setDay(e.target.value)}
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

          <button>Update Class</button>
        </Form>
      </StyledForm>
    </AdminBackground>
  );
};
