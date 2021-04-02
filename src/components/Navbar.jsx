import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
  padding: 30px;
  background-color: #0892d0;

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
        <Link to="/admin">
          <li>Admin</li>
        </Link>
      </ul>
    </StyledNavbar>
  );
};
