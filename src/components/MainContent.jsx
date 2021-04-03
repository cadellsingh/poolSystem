import { Route, Switch } from 'react-router-dom';
import { Classes } from './Classes';
import { Home } from './Home';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Schedule } from './Schedule';

export const MainContent = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/classes" component={Classes} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
};
