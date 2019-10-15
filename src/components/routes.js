import React from 'react';
import { Route, Link } from 'react-router';
import App from './app';


const Home = () => (
  <div>
    <p>
      Home!
    </p>
  </div>
);


const Login = () => (
  <p>Login!</p>
);


const NotFound = () => (
  <p>404</p>
);

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} statusCode={404} />
  </Route>
);
