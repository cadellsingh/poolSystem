import { useContext } from 'react';
import styled from 'styled-components';
import swimming from '../images/swimming5.jpg';
import { GlobalContext } from '../context/GlobalState';

const Layout = styled.div`
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${swimming});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 10px;
  margin-top: 15px;

  & p {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 30px;
  }
`;

const Titles = styled(GridContainer)`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ScheduleDetails = styled(GridContainer)`
  font-size: 18px;
`;

const Filters = styled.div`
  display: flex;

  & ul {
    display: flex;
  }

  & input {
    border: none;
    outline: none;
  }
`;

export const Schedule = () => {
  const { classes } = useContext(GlobalContext);

  const displaySchedule = classes.map((eachClass) => {
    const { name, time, day } = eachClass;

    return (
      <>
        <p>{name}</p>
        <p>{day}</p>
        <p>{time}</p>
      </>
    );
  });

  return (
    <Layout>
      <Filters>
        <ul>
          <li>Mon</li>
          <li>Tues</li>
          <li>Wed</li>
          <li>Thur</li>
          <li>Fri</li>
        </ul>
        <input type="text" placeholder="Search..." />
      </Filters>
      <Titles>
        <p>Class Name</p>
        <p>Day</p>
        <p>Time</p>
      </Titles>

      <ScheduleDetails>{displaySchedule}</ScheduleDetails>
    </Layout>
  );
};
