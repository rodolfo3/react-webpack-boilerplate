import React from 'react';
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/withStyles'


import style from './app.css';


console.log({ style });


const App = ({ children }, context) => (
  <div className={style.container}>
    <h1>App</h1>
    { children }
    { console.log(context) }
    <hr />
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/login">Login</Link>
  </div>
);


export default withStyles(style)(App);
