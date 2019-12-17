import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

      <Link to='/login'>Login</Link>
      <Link to='/protected'>Protected Page</Link>
      <Switch>
        <PrivateRoute exact path='/protected' component={}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}

export default App;
