import React, { Component } from 'react';
import { TweetBody } from './components/tweet.js'
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      users:
      [ 
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  handleRefresh() {
    return new Promise((resolve) => {
      this.getUser()
    });
  }

  componentWillMount() {
    this.getUser()
  }

  getUser() {
    fetch('http://collegebuilder.me/comments/cali')
    .then(response => {
      if(response.ok) {
        console.log(response);
        return response.json();
      }
      throw new Error('Request failed.');
    })
    .then(data => {
      console.log(data[0].username);
      this.setState({
        users:[
          {
            username: data[0].username,
            comment: data[0].comment,
            school_name: data[0].school_name,
          },
          {
            username: data[1].username,
            comment: data[1].comment,
            school_name: data[1].school_name,
          },
          ...this.state.users,
        ]
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={2}
      onRefresh={this.handleRefresh}
      triggerHeight={50}
      backgroundColor='black'>
      <div className="main-body">
        {[...this.state.users].map((user, index) => {
          //let username = `${user.name.first} ${user.name.last}`
          console.log(user.username);
          let username = user.username;
          let handle = `@${user.username}`
          //let handle = user.username;
          //let image = user.image
          let comment = user.comment;
          return(
            <TweetBody 
              key={index}
              username={username}
              name={username}
              handle={handle}
              comment={comment}
              />
          )
        })}      
      </div>
      </PullToRefresh>
    );
  }
}

export default App;
