import { useReducer } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  width: 65%;
  margin: auto;
  padding: 20px 30px;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  & p {
    color: white;
    font-size: 25px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 20px 0;

  & input,
  select {
    padding: 15px;
  }

  & button {
    background-color: #0892d0;
    padding: 10px;
    color: white;
  }
`;

const FirstDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;

  & input:first-child {
    grid-column: span 2 / auto;
  }
`;

const SecondDiv = styled.div`
  & textarea {
    width: 100%;
    padding: 15px;
    height: 100px;
  }
`;

const ThirdDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
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
  const [state, dispatch] = useReducer(classReducer, initialClassState);

  const handleOnChange = (e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value,
    });
  };

  console.log(state);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm>
      <p>Create class</p>
      <Form onSubmit={handleOnSubmit}>
        <FirstDiv>
          <input
            type="text"
            name="name"
            placeholder="Class name"
            value={state.name}
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={state.price}
            onChange={(e) => handleOnChange(e)}
          />
        </FirstDiv>

        <SecondDiv>
          <textarea
            name="description"
            placeholder="Description"
            value={state.description}
            onChange={(e) => handleOnChange(e)}
          />
        </SecondDiv>

        <ThirdDiv>
          <input
            type="text"
            placeholder="Instructor"
            value={state.instructor}
            onChange={(e) => handleOnChange(e)}
          />
          <select
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
