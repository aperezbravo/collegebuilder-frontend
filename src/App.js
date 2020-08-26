import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
//import Home from './components/Home';
//import GoogleMaps from './components/GoogleMaps';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Home from './components/Home';
import GoogleMaps from './components/GoogleMaps';
import SignOut from './components/SignOut';
//import Search from './components/Search';
//import Searx from './components/Searx';
import Wall from './components/Wall';
//import { BrowserRouter as Router } from  'react-router-dom';
import './components/Wall.css';
//import SearchB from './components/SearchB';
//import LocationSearchInpu from './components/LocationSearchInput';
//import SearchBar from './components/SearchBar';
//import {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './components/general.css';
//import Home_background from './web_appll.jpg'

//class App extends Component {
function App() {
  
  //render() {
  return (
    <HashRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/logout" exact component={SignOut} />
        <Route path="/Wall/:id" component={Wall} />
      </Switch>
    </div>
    </HashRouter>
  );
  //}//render
}

export default App;
