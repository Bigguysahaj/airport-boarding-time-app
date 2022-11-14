import React, { Component, createRef} from 'react';
import { useRef, useEffect, useState } from 'react'
import tt from '@tomtom-international/web-sdk-maps';
import './App.css';

import { services } from "@tomtom-international/web-sdk-services";


function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});

const [longitude, setLongitude] = useState(77.1000)
const [latitude, setLatitude] = useState(28.5562);

  useEffect(() => {
    let map = tt.map({
      key:"YOUR_API_KEY",
      container: mapElement.current,
      center: [longitude, latitude],
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true
      },
      zoom: 14,
  })
  setMap(map);
  return () => map.remove();
},
  
  []);
  return (
    <div className="app">
      <div ref={mapElement} className="map">
        <h1>Airport ?</h1>
        <input
          type="text"
          id="longitude"
          classname="longitude"
          placeholder="Longitude here"
          onChange={(e) => {setLongitude(e.target.value)}}
        />
        <input
        type="text"
        id="latitude"
        classname="latitude"
        placeholder="Latitude here"
        onChange={(e) => {setLatitude(e.target.value)}}
        />
      </div>
    </div>
  )
}

export default App;
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.mapRef = createRef();
//   }

//   componentDidMount() {
//     this.map = tt.map({
//       key:"pgTRhRVhL24ehIFHVmR1qhBGORgWcjuA",
//       container: this.mapRef.current,
//     });
//   }

//   // componentWillUnmount() {
//   //   this.map.remove();
//   // }

//   render() {
//     return (
//       <div>
//         <div ref={this.mapRef} className="mapDiv"></div>
//       </div>
//     );
//   }
// };
