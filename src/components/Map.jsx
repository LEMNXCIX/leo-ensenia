import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
};

const center = {
  lat: -0.2719338,
  lng: -79.4664756,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDbVG4Cam_31k7bhHMJPMbbTgWXNXjhrrs",
  });

  const [map, setMap] = React.useState(null);

 

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      // defaultCenter={{ lat: -34.397, lng: 150.644 }}
      center={center}
      // center={{ lat: -0.2719338, lng: -79.4664756 }}
      zoom={10}
    
    >
       <Marker position={center} /> 
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
