import React from "react";
import GoogleMap from "google-map-react";
import { GOOGLE_MAP_API } from "config";

export default function CustomGoogleMap({
  center = GOOGLE_MAP_DEFAULT.center,
  zoom = GOOGLE_MAP_DEFAULT.zoom,
}) {
  return (
    <div className="h-144 sm-down:h-80">
      <GoogleMap
        apiKey={GOOGLE_MAP_API} // set if you need stats etc ...
        center={center}
        zoom={zoom}
      >
        {/* <MyGreatPlace
          lat={59.955413}
          lng={30.337844}
          text={"A"}  
        /> */}
      </GoogleMap>
    </div>
  );
}

export const GOOGLE_MAP_DEFAULT = {
  center: [48.12124252335608, 11.56082011534261],
  zoom: 18,
};
