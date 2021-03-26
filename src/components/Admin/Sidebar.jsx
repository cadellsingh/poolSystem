import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: black;
  color: white;
  opacity: 0.9;
  grid-column: span 1 / auto;
  /* grid-row: span 3 / auto; */
`;

const StyledSidebar = styled.div`
  margin-top: 10vh;

  & ul li {
    font-size: 20px;
    padding: 15px;
    margin: 10px 0;
  }

  & ul li:hover {
    background-color: #0892d0;
    cursor: pointer;
  }
`;

export const Sidebar = () => {
  return (
    <Container>
      <StyledSidebar>
        <ul>
          <Link to="/admin/viewAllClasses">
            <li>View all classes</li>
          </Link>
          <Link to="/admin/createClass">
            <li>Create class</li>
          </Link>
          <li>Delete class</li>
        </ul>
      </StyledSidebar>
    </Container>
  );
};
