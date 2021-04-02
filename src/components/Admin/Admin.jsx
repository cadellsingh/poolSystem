import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import pool from '../../images/pool1.jpg';
import { AllClasses } from './AllClasses';
import { Route, Switch } from 'react-router-dom';
import { CreateClass } from './CreateClass';
import { UpdateClass } from './UpdateClass';

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
`;

export const Admin = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        {/* <AllClasses /> */}
        <Switch>
          <Route path="/admin/viewAllClasses" component={AllClasses} />
          <Route path="/admin/createClass" component={CreateClass} />
          <Route path="/admin/:classId" component={UpdateClass} />
        </Switch>
      </Layout>
    </>
  );
};
