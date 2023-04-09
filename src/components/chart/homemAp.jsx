import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import io from 'socket.io-client';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    console.log(props.user.lat);
    this.state = {
      lat:props.user.lat,
      lng: props.user.lng
    };

    // Connect to the server using Socket.IO
    this.socket = io();

    // Bind the 'newLatLng' event to a handler function
    this.socket.on('newLatLng', (data) => {
      this.setState({ lat: data.lat, lng: data.lng });
    });
  }

  render() {
    const { lat, lng } = this.state;

    return (
      <Map
        google={this.props.google}
        initialCenter={{ lat, lng }}
        center={{ lat, lng }}
        zoom={14}
      >
        <Marker position={{ lat, lng }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDC8VgCougGk-CNl9pq5-vM7ul4ZoeASm8'
})(MapContainer);
