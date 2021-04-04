import { useState, useContext } from 'react';
import styled from 'styled-components';
import pool from '../images/pool.jpg';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';

const Layout = styled.div`
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

const StyledForm = styled.div`
  width: 30%;
  padding: 40px 30px;
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
  }

  & button {
    background-color: #0892d0;
    padding: 10px;
    color: white;
  }
`;

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { login } = useContext(GlobalContext);
  const history = useHistory();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMsg('');
      await login(username, password);
      history.push('/editClasses');
    } catch {
      setErrorMsg('Failed to log in');
    }
  };

  return (
    <Layout>
      <Container>
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
      </Container>
    </Layout>
  );
};
