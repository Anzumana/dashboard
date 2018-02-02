import * as React from 'react';
import { Scene} from 'react-arcgis';
import BermudaTriangle from './BermudaTriangle'

export default class MakeAMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            view: null
        }

        this.handleMapLoad = this.handleMapLoad.bind(this)
    };

    render() {
        return ( 
				<Scene
						style={{ width: '100vw', height: '100vh' }}
						mapProperties={{ basemap: 'satellite' }}
						viewProperties={{
								center: [-122.4443, 47.2529],
								zoom: 6
						}}>
					<BermudaTriangle />
				</Scene>   
							 )
		}

		handleMapLoad(map, view) {
				this.setState({ map, view })
		}
}
