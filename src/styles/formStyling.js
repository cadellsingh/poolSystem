import styled from 'styled-components';

export const StyledForm = styled.div`
  width: 50%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.25);
  background-color: #f5f5f5;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  & p {
    color: black;
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 20px 0;

  & input,
  textarea,
  select {
    border: 1px solid black;
    border-radius: 10px;
  }

  & input,
  select {
    padding: 15px;
  }

  & button {
    background-color: #0892d0;
    padding: 10px;
    color: white;
    font-size: 1.6rem;
  }

  & button:hover {
    cursor: pointer;
  }
`;

export const FirstDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;

  & input:first-child {
    grid-column: span 2 / auto;
  }
`;

export const SecondDiv = styled.div`
  & textarea {
    width: 100%;
    padding: 15px;
    height: 100px;
  }
`;

export const ThirdDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
`;
