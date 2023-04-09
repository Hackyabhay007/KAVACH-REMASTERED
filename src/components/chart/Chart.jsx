import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

function MapWithPin(props) {
  return (
    <GoogleMap defaultZoom={20} defaultCenter={{ lat: props.lat, lng: props.lng }}>
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MapWithPin));

function Map(props) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyDC8VgCougGk-CNl9pq5-vM7ul4ZoeASm8"}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        lat={props.lat}
        lng={props.lng}
      />
    </div>
  );
}

export default Map;
