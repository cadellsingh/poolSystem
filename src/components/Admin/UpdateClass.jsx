import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../firebase/config';
import {
  FirstDiv,
  Form,
  SecondDiv,
  StyledForm,
  ThirdDiv,
} from '../../styles/formStyling';

// can extract these stylings to use in this component and CreateClass component

export const UpdateClass = () => {
  const [className, setClassName] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [instructor, setInstructor] = useState();
  const [day, setDay] = useState();
  const [successMsg, setSuccessMsg] = useState('');

  const { classId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const docRef = await db.collection('classes').doc(classId);

      docRef.get().then((doc) => {
        if (doc.exists) {
          const {
            name,
            time,
            price,
            description,
            instructor,
            day,
          } = doc.data();

          setClassName(name);
          setDay(day);
          setTime(time);
          setDescription(description);
          setInstructor(instructor);
          setPrice(price);
        }
      });
    };

    fetchData();
  }, []);

  const handleOnSubmit = (e) => {
    const classRef = firebase.firestore().collection('classes');
    classRef
      .doc(classId)
      .update({
        name: className,
        description: description,
        price: price,
        instructor: instructor,
        time: time,
        day: day,
      })
      .then((docRef) => {
        setSuccessMsg('Class Updated');
      });

    // e.preventDefault();
  };

  return (
    <StyledForm>
      <p>Update class</p>
      <Form onSubmit={handleOnSubmit}>
        <FirstDiv>
          <input
            required
            type="text"
            name="name"
            placeholder="Class name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
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
  );
};
