import { GlobalStyles } from './styles/globalStyling';
import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './components/Navbar';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home';
import { Classes } from './components/Classes';
import { Schedule } from './components/Schedule';
import { Login } from './components/Login';
import { AllClasses } from './components/Admin/AllClasses';
import { PrivateRoute } from './components/PrivateRoute';
import { CreateClass } from './components/Admin/CreateClass';
import { UpdateClass } from './components/Admin/UpdateClass';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/classes" component={Classes} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/editClasses" component={AllClasses} />
          <PrivateRoute path="/createClass" component={CreateClass} />
          <PrivateRoute path="/:classID" component={UpdateClass} />
        </Switch>
      </GlobalProvider>
    </>
  );
};

// dont need admin component

export default App;
