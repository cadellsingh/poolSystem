import { useState, useEffect } from 'react';
import { GlobalStyles } from './styles/globalStyling';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import styled from 'styled-components';
import pool1 from './images/pool1.jpg';
import { Classes } from './components/Classes';
import { Schedule } from './components/Schedule';
import { Login } from './components/Login';
import { Admin } from './components/Admin/Admin';
import firebase from './firebase/config';

const Layout = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${pool1});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const App = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('classes').get();
      const classes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setClasses(classes);
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      {/* <Layout> */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/classes"
          render={(props) => <Classes classes={classes} {...props} />}
        />
        <Route
          path="/schedule"
          render={(props) => <Schedule classes={classes} {...props} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
      {/* </Layout> */}
    </>
  );
};

export default App;
