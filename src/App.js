import { GlobalStyles } from './styles/globalStyling';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import styled from 'styled-components';
import pool1 from './images/pool1.jpg';
import { Classes } from './components/Classes';
import { Schedule } from './components/Schedule';
import { Login } from './components/Login';

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
  return (
    <>
      <GlobalStyles />
      {/* <Layout> */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/classes" component={Classes} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/login" component={Login} />
      </Switch>
      {/* </Layout> */}
    </>
  );
};

export default App;
