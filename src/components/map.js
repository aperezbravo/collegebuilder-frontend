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
  }

  render() {
      return (
        <Map 
          style={mapStyles}
          google={this.props.google} 
          zoom={14}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233 
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
  apiKey: ("AIzaSyC-WJb5hU-IWguo8KJiC8tb03OcIfN7Vjw"),
})(MapContainer)
