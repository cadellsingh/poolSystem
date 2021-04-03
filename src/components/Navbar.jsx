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

const credentials = 'user';

const displayAdminLinks =
  credentials === 'admin' ? (
    <>
      <Link to="/updateClass">
        <li>Edit Classes</li>
      </Link>
      <Link to="/createClass">
        <li>Create Class</li>
      </Link>
      <li>Log out</li>
    </>
  ) : (
    <Link to="/login">
      <li>Log in</li>
    </Link>
  );

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
        {displayAdminLinks}
      </ul>
    </StyledNavbar>
  );
};
