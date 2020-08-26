import React from 'react';
import './App.css';
//import Home from './components/Home';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignOut from './components/SignOut';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Home_background from './web_appll.jpg'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/logout" exact component={SignOut} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
