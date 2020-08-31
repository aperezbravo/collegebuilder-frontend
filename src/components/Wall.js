import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TweetBody } from './tweet.js';
import GoogleMaps from './GoogleMaps';
import SimpleMap from './rmap';
//import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";
import './Wall.css';
import Nav from './Nav';
//import GoogleMaps from './GoogleMaps';

class Wall extends Component {
  constructor(props) {
    super(props)
    this.state={
      users:[],
      ready_state: false,
      cur_user: '',
      value: '',
      lng: '',
      lat: '',
      place_id: '',
      place_address: '',
      comment: '' 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleStuff = this.handleStuff.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getUser = this.getUser.bind(this)
    this.getLnl = this.getLnl.bind(this);
  }

  handleRefresh() {
    return new Promise((resolve) => {
      console.log("handle refresh")
      this.getUser()
    });
  }

  handleChange(event) {
    event.preventDefault();
    console.log('call to handle Change');
    this.setState({value: event.target.value});
  }

  /*handleStuff() {
    console.log('handlestuff');
    this.getUser();
  }*/

  //handleSubmit(event) {
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    const comment = this.state.value;
    //this.props.history.push('/Wall');
    if(comment === "") {
      alert("Comment body is empty!");
      return;
    } else {
    const xhr = new XMLHttpRequest();
    //commment out for build
    //xhr.open("POST", '/comment/'+ this.props.match.params.id);
    xhr.open('POST', 'https://collegebuilder.me/comment/'+this.props.match.params.id);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onload = function(props) {
      console.log(xhr.status);
      //console.log(props.history.push);
      if(xhr.status === 401) {
        console.log("user not found");
        alert("Sign in to leave a comment");
      }
      if(xhr.status === 200)
        console.log(this.props);
        //this.props.history
        //props.history.push(this.props.match.params.id);
        //this.state.history.push('/signup');
        window.location.reload(true);
        alert('successful post');
        //this.getUser();
    }
    xhr.send(comment);
    return;
  }
}

  //static getDerivedStateFromProps(props, state) {
    //console.log(state.ready_state);
    //if(state.ready_state === true) {
      //this.getLnl();
    ///}
    //if(this.mounted === true) {
      //console.log('true');
    //}
  //}

  componentDidMount() {
    //console.log("component will mount")
    //this.mounted = true;
    //console.log(this.state.ready_state);
    //console.log(this.props.location.state.add);
    this.getUser();
    //console.log(this.state.ready_state);
    //this.setState({ ready_state: true});
    this.getLnl();
    //console.log(this.props.match.params.id);
    //this.getUser(this.props.match.params.id);
    //this.props.match.params.id;
  }

  getLnl = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.props.match.params.id+'&key=AIzaSyA0lNVQ6YdsSdHAJcRIINwagwrOjj_qk70', true);
    xhr.onload = () => {
      console.log(xhr.response.results[0].geometry.location); 
      let location = xhr.response.results[0].geometry.location;
      this.setState({ lat: location.lat, lng: location.lng });
      //this.setState({ lng: location.lng });
    }
    xhr.send(null);
    return;
  }

  getUser = () => {
    console.log('get user');
    console.log(this.props.location.state);
    this.setState({ ready_state: true});
    //console.log(this.state.ready_state);
    //console.log(this.props.match.params.id);
    /*const xhr = new XMLHttpRequest();
    xhr.open('POST', '/test');
    xhr.setRequestHeader('Content-Type', 'application/jsonrequest');
    xhr.onload = function() {
      console.log(xhr.response);
    }*/

    //console.log(this.state);
    //console.log(this.props);
    //fetch('http://collegebuilder.me/comments/California State University Chico')
    //fetch('http://collegebuilder.me/comments/' + this.props.match.params.id)
    //console.log(this.props.location.state.school);
    //console.log(this.props.match.params.id);
    //fetch('http://collegebuilder.me/comments/'+this.props.location.state.school)
    fetch('https://collegebuilder.me/comments/'+this.props.match.params.id)
    .then(response => {
      if(response.ok) {
        //console.log("retrieving comments from api");
        //console.log(this.props.location.state.school);
        //this.handleStuff();
        return response.json();
      }
      //causes error throw try to delete it
      throw new Error('Request failed.');
    })
    .then(data => {
      //console.log(this.props);
      //console.log(data.reversed());
      //var comm_arr = this.state.users;
      var arr = [];
      arr = data.reverse();
      //arr.push(data);
      //console.log(arr[0].username);
      arr.push(...this.state.users);
      /*var stuff = data.map(name=> {
        //console.log(name)
      })*/
      //console.log(comm_arr);
      //console.log(arr.reverse());
      this.setState({ users: arr });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (

      <div className="">
        <Nav />
      <div className="school_title">
        <h2>{this.props.match.params.id}</h2>
      </div>
      <SimpleMap school={this.props.match.params.id} lat={this.state.lat} lng={this.state.lng}/>
      i<div className="buffer">
        {[...this.state.users].map((user, index) => {
          //let username = `${user.name.first} ${user.name.last}`
          //console.log(user.username);
          let username = user.username;
          let handle = `@${user.username}`
          //let handle = user.username;
          //let image = user.image
          let comment = user.comment;
          return(

              <TweetBody 
                key={comment+username}
                username={username}
                name={username}
                handle={handle}
                comment={comment}
              />
          )
        })}      
      </div>
      <form className="tweet-body" onSubmit={this.handleSubmit} >
              <label className="comment_buffer">
                comment:
              </label>
              <br/>
                  <textarea placeholder="Leave a comment..." type="text" value={this.state.value} onChange={this.handleChange} className="comment_section" ></textarea>
              <br/>
                  <button onClick={this.handleSubmit} type="button" className="submit_comment">submit</button>
                <br/>
      </form>
      </div>
    );
  }
}
                //<button className="submit_comment" onClick={this.handleSubmit}>submit</button>

export default withRouter(Wall);
