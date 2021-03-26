import { useState } from 'react';
import styled from 'styled-components';
import pool from '../images/pool.jpg';
import { Navbar } from './Navbar';

const BackgroundImageContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const StyledForm = styled.div`
  width: 30%;
  margin: auto;
  padding: 40px 30px;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  & p {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & input:nth-child(2) {
    margin: 10px 0;
  }

  & input {
    font-size: 16px;
    padding: 15px;
    border: none;
    outline: none;
  }

  & button {
    background-color: #0892d0;
    padding: 10px;
    border: none;
    outline: none;
    color: white;
  }
`;

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(username, password);
  };

  return (
    <BackgroundImageContainer>
      <Navbar />
      <StyledForm>
        <p>Log in</p>
        <Form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </Form>
      </StyledForm>
    </BackgroundImageContainer>
  );
};