import styled from 'styled-components';
import { CardContainer } from '../styles/sharedStyles';

const Container = styled(CardContainer)`
  display: flex;
  justify-content: center;
`;

const ClassDetails = styled.div`
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.6rem;

  & p:nth-child(1) {
    font-size: 2rem;

    font-weight: 900;
  }

  & p:nth-child(2) {
    font-size: 1.9rem;
    margin: 10px 0;
  }

  & p:nth-child(4) {
    margin: 10px 0;
  }
`;

export const EachClass = ({ eachClass }) => {
  const { name, instructor, description, price, day, time } = eachClass;
  return (
    <Container>
      <ClassDetails>
        <p>{name}</p>
        <p>Instructor - {instructor}</p>
        <p>{description}</p>
        <p>Price: ${price}.00 per month</p>
        <p>
          {day}, {time}
        </p>
      </ClassDetails>
    </Container>
  );
};
