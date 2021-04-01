import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
`;

const ClassDetails = styled.div`
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & p:nth-child(1) {
    font-size: 20px;
    font-weight: 900;
  }

  & p:nth-child(2) {
    font-size: 18px;
    margin: 10px 0;
  }

  & p:nth-child(4) {
    /* font-size: 18px; */
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
