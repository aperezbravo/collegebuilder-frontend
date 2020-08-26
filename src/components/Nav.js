import React from 'react';
import {Link} from 'react-router-dom';
import { Component } from 'react';
//import PlacesAutocomplete, {geocodeAddress, getLatLng} from 'react-places-autocomplete';
//import Search from './Search';
import './general.css';
import Logo from '../maveric.png';
import Searx from './Searx';
import { withRouter } from 'react-router-dom';


//const Nav = props => (
class Nav extends Component {

constructor(props) {
  super(props)
  this.state={
    secret: '',
    nonsense: ''
  }
  //this.handler = this.handler.bind(this);
}

handler(value) {
  console.log(value);
  //alert('function inside Nav was called');
}

  render() {
    return(

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="logo"></div>
                <img src={Logo} height="50px" width="40px" alt="logo"></img>
            <div className="toolbar_navigation-items">
              <ul>
                <Link to="/">
                  <li>HOME</li>
                </Link>
                <Link to="/schools">
                  <li>SCHOOLS NEAR ME</li>
                </Link>
                <Link to="/Wall/:id">
                </Link>
              </ul>
            </div>
            <div className="center">
              <Searx update={this.handler} />
            </div>
            <div className="toolbar_navigation-items">
                <ul>
                    <Link to="/signup">
                      <li>SIGN UP/LOG IN</li>
                    </Link>
                    <Link to="/logout">
                      <li>SIGN OUT</li>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
  );
 }
 }
 //);

//export default Nav;
export default withRouter(Nav);
