import { Route, Switch } from 'react-router-dom';
import { Admin } from './Admin/Admin';
import { AllClasses } from './Admin/AllClasses';
import { CreateClass } from './Admin/CreateClass';
import { UpdateClass } from './Admin/UpdateClass';
import { Classes } from './Classes';
import { Home } from './Home';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { PrivateRoute } from './PrivateRoute';
import { Schedule } from './Schedule';

export const MainContent = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/admin" component={Admin} /> */}
        <Route path="/classes" component={Classes} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/editClasses" component={AllClasses} />
        <PrivateRoute path="/createClass" component={CreateClass} />
        <PrivateRoute path="/:classID" component={UpdateClass} />
      </Switch>
    </>
  );
};
