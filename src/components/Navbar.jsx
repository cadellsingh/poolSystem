import { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const StyledNavbar = styled.nav`
  background-color: #287094;
  height: 10vh;
  display: flex;
  align-items: center;

  & ul {
    font-size: 2rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
`;

const Logout = styled.li`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Navbar = () => {
  const { currentAdmin, logout } = useContext(GlobalContext);
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await logout();
      history.push('/');
    } catch {
      console.log('failed to log out');
    }
  };

  const displayAdminLinks = currentAdmin ? (
    <>
      <Link to="/editClasses">
        <li>Edit Classes</li>
      </Link>
      <Link to="/createClass">
        <li>Create Class</li>
      </Link>
      <Logout onClick={handleLogOut}>Log out</Logout>
    </>
  ) : (
    <Link to="/login">
      <li>Log in</li>
    </Link>
  );

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
