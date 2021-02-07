import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import MarkerBox from "./MarkerBox";

const Map = ({ data, center, zoom }) => {
  const [markerInfo, setMarkerInfo] = useState(null);

  const closeInfoBox = (e) => {
    setMarkerInfo(null);
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBDU7XzNpJH47lUIczwQECFUV7ierO2PcQ" }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {data.map((d) => (
          <Marker
            key={d.id}
            lat={d.country.lat}
            lng={d.country.lng}
            onClick={() =>
              setMarkerInfo({ name: d.name, user: d.username, email: d.email })
            }
          />
        ))}
      </GoogleMapReact>
      {markerInfo && (
        <MarkerBox info={markerInfo} onCloseInfoBox={closeInfoBox} />
      )}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 37.98381,
    lng: 23.727539
  },
  zoom: 2
};

export default Map;
