import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer ,IconLayer, ScatterplotLayer} from 'deck.gl'
//import events from './assets/location-icon-atlas.png'; 
import events from './assets/location-icon-atlas.png'; 

class D4UMMAP extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewport: this.props.viewport,
			data: [
				{
					sourcePosition: [9, 52], 
					targetPosition: [9, 53], 
					color: [0, 128, 255]},
				{
					sourcePosition: [9, 52],
				 	targetPosition: [10, 52], 
					color: [255, 0, 128]
				}
			]
		};
		this.update = this.update.bind(this);
		this.test.bind(this);
		this.el.bind(this);
	}
	componentDidMount(){
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
		var intervalId = setInterval(this.update, 500);
		console.log(this.props);
	}
	//componentWillUnmount(){
		//clearInterval(this.state.intervalId);
	//}
  _resize() {
    this._onViewportChange({
      width: window.innerWidth-40,
      height: window.innerHeight-200
    });
  }
  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }
	
	componentWillReceiveProps(props){
		console.log('did receive props');
		console.log(props);
		this.setState({
			viewport: {...this.state.viewport , ...props.viewport}
		});
	}
	update(e){
		console.log('test');
		var oldLng = this.state.data[0].sourcePosition[0];
		var newValue = this.state.data[0].sourcePosition[0] = oldLng + 0.1;
		this.setState({
			data: [
				{
					sourcePosition: [newValue, 52], 
					targetPosition: [9, 53], 
					color: [255, 128, 255]},
				{
					sourcePosition: [9, 52],
				 	targetPosition: [10, 52], 
					color: [255, 0, 128]
				}
			] 
		});
	}
	test(e){
		console.log('ttt');
	}
	el(){
		console.log('el');
	}
  render() {
    const {viewport} = this.state;
		var data = [
			{sourcePosition: [9, 52], targetPosition: [9, 53], color: [0, 128, 255]},
			{sourcePosition: [9, 52], targetPosition: [10, 52], color: [255, 0, 128]}
    ];
		const lineLayer = new LineLayer({
			id: 'line-layer',
			data: this.state.data,
			strokeWidth: 5,
			fp64: false,
			getSourcePosition: d => d.sourcePosition,
			getTargetPosition: d => d.targetPosition
		});
		var myData = 	[ 
				{coordinates: [ 9,52] , icon: 'test', size: 60, color: [125,219,37]}
			]
    const layer = new IconLayer({
      id: 'icon',
			data: myData,
      iconAtlas: events,
      iconMapping:
			{
				"test": {
					"x": 0,
					"y": 0,
					"width": 118,
					"height": 118,
					"anchorY":118, 
					"mask":true 
				}
			} ,
      sizeScale:1 ,
      getPosition: d => [9.7320,52.3759],
      getIcon: d => 'test',
			getSize: d=> d.size,
				updateTrigger:{
					getPosition: d => d.coordinates
				}

    });
		
		const iconLayer = new IconLayer({
			id: 'icon-layer',
			data: [ 
				{coordinates: [ 9,52] , icon: 'test', size: 60, color: [125,219,37]}
			],
      iconAtlas: "./assets/location-icon-atlas.png",
      getPosition: d => [9.7320,52.3759],
			getIconName: d => 'marker-1',
			getSize: d => 1,
			getColor: d=> d.color,
			sizeScale:60,
			iconMappings:
			{
				"test": {
					"x": 0,
					"y": 0,
					"width": 48,
					"height": 48,
					"anchorY": 48,
				}
			}
		});
		const scatterLayer = new ScatterplotLayer({
			id: 'scatterplot-layer',
			outline:false,
			data: [
				{position:[9.5,52],radius: 150 ,color:[0,128,255]},
				{position:[9.2,51.9],radius: 30,color:[255,0,128] },
				{position:[9.3,52.3],radius: 55 , color:[255,0,128]},
			],
			radiusScale: 100
		});
    return (
				<MapGL
					{...viewport}
					mapStyle="mapbox://styles/mapbox/dark-v9" 
        onViewportChange={this._onViewportChange.bind(this)}
				>
				<DeckGL {...viewport} layers={[scatterLayer,lineLayer ,layer]} />
				</MapGL>
			)
		}
	}
export default D4UMMAP;

