import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
  padding: 30px;
  background: rgba(8, 106, 249, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(77, 52, 52, 0.18);

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
