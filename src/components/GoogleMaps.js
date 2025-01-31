import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

export class MapContainer extends Component {
  constructor(props) {
    super(props)
      this.state={
        school: '',
        lat: '-1.2884',
        lng: '36.8233'
      }
      this.getLnl = this.getLnl.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    //this.getLnl(); 
    console.log(props);
    console.log(state);
  }

  getLnl = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.props.school+'&key=AIzaSyA0lNVQ6YdsSdHAJcRIINwagwrOjj_qk70');
    xhr.onload = () => {
      let location = xhr.response.results[0].geometry
      console.log(location);
    }
    xhr.send(null);
    return;
  }

  render() {
      console.log(this.props);
      return (
        <Map 
          style={mapStyles}
          google={this.props.google} 
          zoom={14}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng 
          }}
        >

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

          </Map>
      );
    }//return
}//class

const mapStyles = {
  width: '50%',
  height: '50%',
  top: '10%',
  left: '24%'

};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC-WJb5hU-IWguo8KJiC8tb03OcIfN7Vjw")
})(MapContainer)
