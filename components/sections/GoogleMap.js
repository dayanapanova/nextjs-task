import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

function GoogleMap({ center, zoom, markerProps }) {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          text="My Marker"
          {...markerProps}
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
