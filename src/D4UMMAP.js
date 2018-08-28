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
		};
		this.update = this.update.bind(this);
		this.test.bind(this);
		this.el.bind(this);
	}
	componentDidMount(){
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
		var intervalId = setInterval(this.update, 500);
	}
	//componentWillUnmount(){
		//clearInterval(this.state.intervalId);
	//}
  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight-150
    });
  }
  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
		this.props.changeViewport(viewport);

  }
	
	componentWillReceiveProps(props){
		console.log(props);
		this.setState({
			viewport: {...this.state.viewport , ...props.viewport}
		});
		var myData = 	[ 
				{coordinates: [ 9,52] , icon: 'test', size: 60, color: [125,219,37]}
		]
		console.log('filer' + props.filter);

		let since = props.filter.since;
		let until = props.filter.until;
		//let since =new Date(2017,10,25,0).toISOString();
		//let until =new Date(2017,10,25,24).toISOString();
		console.log(props.events);
		try{
			let filteredEvents = props.events.filter( event => {
				return ((Date.parse(event.start.replace('+01','Z'))) <= Date.parse(until)) && (Date.parse(event.start.replace('+01','Z')) >= Date.parse(since))
			})
			console.log(filteredEvents);
			this.setState({
				data:filteredEvents
			})
		}
		catch(error){
			console.log('D4UMMAP 65'+ error);
			this.setState({
				data:null
			})
		}
			
	}
	update(e){
		//console.log('test');
		//var oldLng = this.state.data[0].sourcePosition[0];
		//var newValue = this.state.data[0].sourcePosition[0] = oldLng + 0.1;
		//this.setState({
			//data: [
				//{
					//sourcePosition: [newValue, 52], 
					//targetPosition: [9, 53], 
					//color: [255, 128, 255]},
				//{
					//sourcePosition: [9, 52],
					 //targetPosition: [10, 52], 
					//color: [255, 0, 128]
				//}
			//] 
		//});
	}
	test(e){
		console.log('ttt');
	}
	el(){
		console.log('el');
	}
  render() {
    const {viewport} = this.state;
		//const lineLayer = new LineLayer({
			//id: 'line-layer',
			//data: this.state.data,
			//strokeWidth: 5,
			//fp64: false,
			//getSourcePosition: d => d.sourcePosition,
			//getTargetPosition: d => d.targetPosition
		//});
		const calcPosition = (val) => {
			let substrings = val.split(',')
			var coordinate = new Array(parseFloat(substrings[0]),parseFloat(substrings[1]));
			return coordinate 
		}
		const calcColor = (val) => {

			switch(val){
				case'fair':
					return [140,140,230];
				case'party':
					return [219,100,40];
				case'concert':
					return [150,90,30];
				case'football':
					return [200,100,50];
				case'other':
					return [20,50,120];
				case'show':
					return [70,30,20];
				case'comedy':
					return [60,90,40];
				default:
					return [125,219,37];
			}
		}
    const layer = new IconLayer({
      id: 'icon',
			data: this.state.data,
      iconAtlas: events,
      iconMapping:
			{
				"test": {
					"x": 0,
					"y": 0,
					"width": 118,
					"height": 130,
					"anchorY":118, 
					"mask":true 
				}
			} ,
      sizeScale:1 ,
			getColor: d => calcColor(d.category),
      getPosition: d => calcPosition(d.coordinates),
      getIcon: d => 'test',
			getSize: d=> 50,
			pickable: true,
			updateTrigger:{
				getPosition: d => d.coordinates
			},
			onClick: d => { 
				console.log('onclick');
				this.props.changeSelectedEvent(d.object)
				console.log(d.object);
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
			outline:true,
			data: this.state.data,
			radiusScale: 1,
      getPosition: d => calcPosition(d.coordinates),
      getRadius: d => d.impact*1000,
      getColor: d => calcColor(d.category)
		});
    return (
				<MapGL
					{...viewport}
					mapStyle="mapbox://styles/mapbox/dark-v9" 
        onViewportChange={this._onViewportChange.bind(this)}
				>
				<DeckGL {...viewport} layers={[scatterLayer,layer]} />
				</MapGL>
			)
		}
	}
export default D4UMMAP;

