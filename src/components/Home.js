import React from 'react';
import { Component } from 'react';
//import ReactDOM from 'react-dom';
//import Wall from './Wall';
import './general.css';
 
//function Home() {
class Home extends Component {
 
  constructor(props) {
    super(props)
    this.state={
      users:[],
      comment: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert("Button was pressed");
    console.log(this.props);
  }

  render() {
    return (
      <div className="google_button">
      </div>
    );
  }
}//class Home

 export default Home;
