import {useRef, useState, useEffect} from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: process.env.API_KEYY,
      container: mapElement.current,
      // stylesVisibility: {
      //   trafficIncidents: true,
      //   trafficFlow: true,
      // },
      // center: [longitude, latitude],
      // zoom: 14,
  })
  setMap(map);
},
  
  []);
  return (
    <div className="App">
      <div ref={mapElement}></div>
    </div>
  )
}

export default App;
