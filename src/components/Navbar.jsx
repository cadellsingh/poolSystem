import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
  background-color: rgba(51, 153, 255, 0.5);
  padding: 30px;

  & ul {
    font-size: 20px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/classes">
          <li>Classes</li>
        </Link>
        <Link to="/schedule">
          <li>Schedule</li>
        </Link>
        <Link to="/login">
          <li>Log in</li>
        </Link>
      </ul>
    </StyledNavbar>
  );
};
