import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Scene } from 'react-arcgis';
import BermudaTriangle from './BermudaTriangle';

export default (props) => (
  <Scene
    style={{ width: '100vw', height: '100vh' }}
    mapProperties={{ basemap: 'satellite' }}
    viewProperties={{
				  center: [-79, 28],
				  zoom: 8,
    }}
		>
    <BermudaTriangle />
  </Scene>
);
