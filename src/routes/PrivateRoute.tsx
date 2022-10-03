import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import React from 'react';
interface Props {
  isAuth: boolean;
  children: ReactElement;
}

const PrivateRoute = ({ isAuth, children }: Props) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
