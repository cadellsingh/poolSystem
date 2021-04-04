import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import pool from '../../images/pool1.jpg';
import { AllClasses } from './AllClasses';
import { Route, Switch } from 'react-router-dom';
import { CreateClass } from './CreateClass';
import { UpdateClass } from './UpdateClass';
import { Navbar } from '../Navbar';
import { Classes } from '../Classes';
import { Home } from '../Home';
import { Schedule } from '../Schedule';
import { PrivateRoute } from '../PrivateRoute';

const BackgroundImageContainer = styled.div`
  grid-column: span 3 / auto;
  /* height: 100vh; */
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px repeat(3, 1fr);
  height: 100vh;
  background-color: #696969;
  background-color: white;
  color: black;
`;

export const Admin = () => {
  return (
    <>
      <h1>testing</h1>
      <Switch>
        <PrivateRoute path="/editClasses" component={AllClasses} />
        <PrivateRoute path="/createClass" component={CreateClass} />
        <PrivateRoute path="/:classID" component={UpdateClass} />
        {/* <Route path="/viewAllClasses" component={AllClasses} />
        <Route path="/createClass" component={CreateClass} />
        <Route path="/admin/:classId" component={UpdateClass} /> */}
      </Switch>
    </>
  );
};
