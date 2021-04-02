import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: black;
  color: white;
  opacity: 0.9;
`;

const StyledSidebar = styled.div`
  & ul li {
    font-size: 20px;
    padding: 15px;
  }

  & ul li:hover {
    background-color: #0892d0;
    cursor: pointer;
  }

  & a:hover {
    text-decoration: none;
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
          <li>Log out</li>
        </ul>
      </StyledSidebar>
    </Container>
  );
};
