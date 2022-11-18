import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from '../../utils/isLogin';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLogin() ? <Navigate to='/login' /> : <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
