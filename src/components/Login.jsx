import { useState, useContext } from 'react';
import styled from 'styled-components';
import pool from '../images/pool.jpg';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';
import { CardContainer } from '../styles/sharedStyles';

const Layout = styled.div`
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 40%;
`;

const StyledForm = styled(CardContainer)`
  margin-top: 50px;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.25);

  & p {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & input:nth-child(2) {
    margin: 15px 0;
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

  & button:hover {
    cursor: pointer;
  }
`;

const ErrorMsg = styled.p`
  text-align: center;
  padding: 10px;
  background-color: #d11a2a;
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 1.8rem;
  color: white;
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
          {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
          <p>Log in</p>
          <Form onSubmit={handleOnSubmit}>
            <input
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
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
