import React from 'react';
import { GoogleLogout } from 'react-google-login';


function SignOut(props) {
  /*const button_press = () => {
    alert("button has been pressed");
  }*/

  const logout = (googleUser) => {
    alert("Logged out successfully\n");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/signout');
    xhr.onload = function() {
      
      alert("You have signed out successfuly!");
    }
    xhr.send(null);
    props.history.push('/'); 
    //console.log(googleUser.isSignedIn());
  }//response

  return (
    <div>
      <div className="google_button">
      <GoogleLogout
          //clientId="822509576207-l1gkj1ksdifg8idrch2v50251nf9cpto.apps.googleus│ercontent.com"
          clientId="822509576207-l1gkj1ksdifg8idrch2v50251nf9cpto.apps.googleusercontent.com"
          //onClick={button_press}
          buttonText="Logout"
          onLogoutSuccess={logout}
          >
      </GoogleLogout>
      </div>
    </div>
  );
}//SignOut

export default SignOut;
