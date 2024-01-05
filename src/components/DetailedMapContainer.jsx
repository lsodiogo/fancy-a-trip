import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import  Map, { Marker, NavigationControl } from "react-map-gl";

function DetailedMapContainer({detailedTrip}) {
   
   const token = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRyMXBjMnJxajJpcnlsb2N5Zmp3MSJ9.7OYKXDVANOx-k-Ou4w4G0Q";

   const lat = detailedTrip.lat;
   const lon = detailedTrip.lon;

   return (
      <>
         <div className="detailedMapContainer">
            <Map 
               mapboxAccessToken={token}
               initialViewState={{
                  latitude: lat,
                  longitude: lon,
                  zoom: 5,
                  interactive: false
               }}
               mapStyle="mapbox://styles/diogooslima/clqshefly00ys01nw2ipqclre">
               
               <Marker
                  color="#3A4D39"
                  latitude={detailedTrip.lat}
                  longitude={detailedTrip.lon}
               />
               
               <NavigationControl position="bottom-right" showCompass showZoom/>
            </Map>
         </div>
      </>
   );
   
};

export default DetailedMapContainer;