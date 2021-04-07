import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';

const Container = styled.div`
  font-size: 2.3rem;
  width: 90%;
  margin: 0 auto;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin-top: 30px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr 1fr;
  border-bottom: 1px solid grey;
  padding: 20px 0;
`;

const Day = styled.div`
  margin: auto;

  & p {
    padding: 10px;
    border-radius: 5px;
  }
`;

const Classes = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 3 / auto;
`;

const ClassDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  font-size: 1.7rem;
  margin: 5px 0;
  text-align: center;

  & p {
    padding: 5px;
  }

  & p:first-child {
    background-color: #287094;
    border-radius: 5px;
  }
`;

const LineBreak = styled.span``;

export const Schedule = () => {
  const { classes } = useContext(GlobalContext);

  const days = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  };

  for (const eachClass of classes) {
    const { name, time, day, instructor } = eachClass;
    const details = [name, instructor, time];

    switch (day) {
      case 'Monday':
        days.Monday.push(details);
        break;
      case 'Tuesday':
        days.Tuesday.push(details);
        break;
      case 'Wednesday':
        days.Wednesday.push(details);
        break;
      case 'Thursday':
        days.Thursday.push(details);
        break;
      case 'Friday':
        days.Friday.push(details);
        break;

      default:
        break;
    }
  }

  const displaySchedule = Object.entries(days).map(([key, value], idx) => {
    return (
      <ScheduleContainer>
        <Day key={idx}>
          <p>{key}</p>
        </Day>
        <Classes>
          {value.map((details, idx) => {
            return (
              <ClassDetails key={idx}>
                {details.map((detail, idx) => {
                  return <p key={idx}>{detail}</p>;
                })}
              </ClassDetails>
            );
          })}
          <LineBreak />
        </Classes>
      </ScheduleContainer>
    );
  });

  return <Container>{displaySchedule}</Container>;
};
