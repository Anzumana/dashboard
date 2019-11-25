import * as React from 'react';
import { Scene } from 'react-arcgis';

const myScene = (props) => (
  <Scene
    style={{ width: '100vw', height: '100vh' }}
    mapProperties={{ basemap: 'terrain' }}
    viewProperties={{
      center: [-122.4443, 47.2529],
      zoom: 6,
    }}
  />
);
export default myScene;
