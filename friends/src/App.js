import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';




function App() {
  return (
    <Router>
    <div className="App">

      <Link to='/login'>Login</Link>
      <Link to='/protected'>Friends List</Link>
      <Link to='/protected2'>Add Friend</Link>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList}/>
        <PrivateRoute exact path='/protected2' component={AddFriendForm}/>
        
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
