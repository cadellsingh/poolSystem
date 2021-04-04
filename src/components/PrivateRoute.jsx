import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState.js';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentAdmin } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentAdmin ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};
