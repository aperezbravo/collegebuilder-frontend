import React from 'react';
import GoogleLogin from 'react-google-login';
//import ReactDOM from 'react-dom';
import './general.css';
//import Home from './Home';
//import {Redirect, Link} from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import {useState} from 'react';

function SignUp(props) {
    //alert("unable to log in using that account try using another one");

    const failed_signUp = (res) => {
      alert("failed to sign up/in");
    }

    const responseGoogle = (googleUser) => {

    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/tokensignin');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //function called after request has been processed successfully

    xhr.onload = function() {
      //populate the state or proper authority to keep track of the user session
      console.log("redirecting to home page");  
      props.history.push('/');
    };
    xhr.send('tokenid='+id_token);
    //---------------------------------------
    /*console.log(googleUser);
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.*/
    //call to fetch
  }//responseGoogle
  return (
    <div>
    <div className="google_button">
      <GoogleLogin
        clientId="822509576207-l1gkj1ksdifg8idrch2v50251nf9cpto.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={failed_signUp}
       cookiePolicy={'single_host_origin'}
      />
    </div>
    </div>
  );
}//signup

 export default SignUp;
