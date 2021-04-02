import { useState, useEffect } from 'react';
import { GlobalStyles } from './styles/globalStyling';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Classes } from './components/Classes';
import { Schedule } from './components/Schedule';
import { Login } from './components/Login';
import { Admin } from './components/Admin/Admin';
import firebase from './firebase/config';
import { Navbar } from './components/Navbar';

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
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route
          path="/classes"
          render={(props) => <Classes classes={classes} {...props} />}
        />
        <Route
          path="/schedule"
          render={(props) => <Schedule classes={classes} {...props} />}
        />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default App;
