import React, { Component } from 'react';
import GoogleMap, { Marker }  from 'google-maps-react';
//import { Marker } from 'google-maps-react';
 
  class SimpleMap extends Component {
    /*static defaultProps = {
      center: {
        lat: '-1.2884',
        lng: '36.8233' 
      },
      zoom: 11
    };*/
    constructor(props) {
      super(props)
        this.state={
          school: '',
          lat: '-1.2884',
          lng: '36.8233',
          update: false,
          first_load: true
        }
        this.getLnl = this.getLnl.bind(this);
    }
  
  shouldComponentUpdate(props, state) {
    console.log(state);
    console.log(props);
    if(props.lat !== '-1.2884' && props.lng !== '36.8233') {
    console.log('true');
    return true;
    //return true;
  } else {
    return false;
  }
  }

  getLnl = () => {
    console.log(this.props.school);
    /*const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.props.state+'&key=AIzaSyA0lNVQ6YdsSdHAJcRIINwagwrOjj_qk70');
    xhr.onload = () => {
      let l = xhr.response.results[0].geometry.location;
      console.log(l);
      //this.setState{ lat: props.lat, lng: props.lng }
    }
    xhr.send(null);
    return;*/
  }

    render() {
      return (
          <GoogleMap
            bootstrapURLKeys={{ key: 'AIzaSyA0lNVQ6YdsSdHAJcRIINwagwrOjj_qk70' }}
            defaultZoom={this.props.zoom}
            google={window.google}
            style={mapStyles}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng
            }}
            center={{
              lat: this.props.lat,
              lng: this.props.lng
            }}
          >
          <Marker lat={{ lat: this.props.lat, lng: this.props.lng }} />
        </GoogleMap>
    );
  }

}

const mapStyles = {
  width: '50%',
  height: '40%',
  top: '10%',
  left: '24%'
};

export default SimpleMap;
