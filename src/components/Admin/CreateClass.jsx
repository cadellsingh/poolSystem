import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
`;

const StyledForm = styled.div`
  width: 70%;
  margin: auto;
  padding: 40px 30px;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Form = styled.form`
  border: 1px solid red;
`;

export const CreateClass = () => {
  return (
    <StyledForm>
      <p>create class</p>
      <Form>
        <div>
          <input type="text" placeholder="Class name" />
          <input type="number" placeholder="Price" />
        </div>

        <div>
          <textarea name="description" row={7} placeholder="Description" />
        </div>

        <div>
          <input type="text" placeholder="Instructor" />
          <input type="text" placeholder="Time" />
          <input type="text" placeholder="Day" />
        </div>

        <button>Add Class</button>
      </Form>
    </StyledForm>
  );
};
