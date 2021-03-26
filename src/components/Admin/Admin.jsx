import React from 'react';
import styled from 'styled-components';
import { AdminNavbar } from './AdminNavbar';
import { Sidebar } from './Sidebar';
import pool from '../../images/pool1.jpg';
import { Navbar } from '../Navbar';
import { AllClasses } from './AllClasses';
import { Route, Switch } from 'react-router-dom';
import { CreateClass } from './CreateClass';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: black;
`;

const BackgroundImageContainer = styled.div`
  grid-column: span 3 / auto;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pool});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Admin = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <BackgroundImageContainer>
          <Navbar />
          <Switch>
            <Route path="/admin/viewAllClasses" component={AllClasses} />
            <Route path="/admin/createClass" component={CreateClass} />
          </Switch>
        </BackgroundImageContainer>
      </Layout>
    </>
  );
};
