import React from 'react';
import style from './app.css';

const App = ({ children }) => (
  <div className={style.container}>
    <h1>App</h1>
    { children }
    <hr />
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/login">Login</Link>
  </div>
);


export default App;
