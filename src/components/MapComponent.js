import React, { PropTypes } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";


const MapComponent = () => {
  return (
    <div>
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{v: `3.1`, libraries: "geometry,drawing,places"}}
        containerElement={
          <div />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}
            >
          </GoogleMap>
        }
      />
    </div>
  );
  // <section style={{height: "100%"}}>
  //   <GoogleMapLoader
  //     containerElement={ <div/> }
  //     googleMapElement={
  //       <GoogleMap
  //         ref={(map) => console.log(map)}
  //         defaultZoom={3}
  //         defaultCenter={{lat: -25.363882, lng: 131.044922}}>
  //       </GoogleMap>
  //     }
  //     />
  // </section>
}

export default MapComponent
