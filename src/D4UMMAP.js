import { convertLineString } from './lib/utils.js';
import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer ,IconLayer, ScatterplotLayer, PathLayer} from 'deck.gl'
//import events from './assets/location-icon-atlas.png'; 
//import events from './assets/location-icon-atlas.png'; 
import events from './assets/location-icon-atlas.png'; 

class D4UMMAP extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewport: this.props.viewport,
			testData : [
				{
						"name": "Richmond - Millbrae",
						"color": "#ed1c24",
						"path": [
							[
								-122.3535851,
									37.9360513
							],
								[
								-122.3179784,
									37.9249513
							],
							[
								-122.300284,
								37.902646
							],
							[
								-122.2843653,
									37.8735039
							],
							[
								-122.269058,
								37.8694562
							],
							[
								-122.2709185,
								37.85301
							],
							[
								-122.2689342,
								37.8283973
							],
							[
								-122.2707195,
								37.8080566
							],
							[
								-122.2718706,
								37.804996
							],
							[
								-122.2948251,
								37.8064628
							],
							[
								-122.3971496,
								37.794745
							],
							[
								-122.4030149,
								37.7905282
							],
							[
								-122.4084631,
								37.7862646
							],
							[
								-122.4157833,
								37.7803439
							],
							[
								-122.4219476,
								37.7653052
							],
							[
								-122.4206096,
								37.7528545
							],
							[
								-122.4359052,
								37.7340058
							],
							[
								-122.448995,
								37.723273
							],
							[
								-122.471192,
								37.7067871
							],
							[
								-122.4672607,
								37.6842548
							],
							[
								-122.4449822,
								37.6635925
							],
							[
								-122.4169649,
								37.6372339
							],
							[
								-122.3876274,
								37.5993171
							]
					]
				}
			],
			testSample:[
						{'path':[
					[9.7441138,52.3725554],
					[9.7440523,52.3720947],
					[9.7440011,52.3717967],
					[9.7439862,52.3716662],
					[9.7440009,52.3715866]
				]
			},
			{
				'path': [
					[9.8135175,52.3172347],
					[9.8136214,52.31745],
					[9.8146824,52.3179731],
					[9.8149586,52.3180234]
				]
			}
		],
			test: [
				{
					"color": "#ed1c24",
					"name": "Richmond - Millbrae",
					"path": [[9.7441138,52.3725554],[9.7440523,52.3720947],[9.7440011,52.3717967],[9.7439862,52.3716662],[9.7440009,52.3715866]]
				},
				{
					"color": "#ed1c24",
					"name": "Richmond - Millbrae",
					"path": [[9.8135175,52.3172347],[9.8136214,52.31745],[9.8146824,52.3179731],[9.8149586,52.3180234]]
				}
			]
		};
					//"path" : convertLineString( "LINESTRING(9.7441138 52.3725554,9.7440523 52.3720947,9.7440011 52.3717967,9.7439862 52.3716662,9.7440009 52.3715866)")
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
		console.log('here are our props');
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
			console.log('updating our state with events');
			console.log(filteredEvents);
			this.setState({
				data:filteredEvents,
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
		const calcPosition = (val) => {
			let substrings = val.split(',')
			var coordinate = new Array(parseFloat(substrings[0]),parseFloat(substrings[1]));
			return coordinate 
		}
		const calcColor = (val) => {
			switch(val){
				case'fair':
					return [77,210,180];
				case'party':
					return [220,72,140];
				case'concert':
					return [19,74,151];
				case'football':
					return [65,111,12];
				case'other':
					return [255,255,255];
				case'show':
					return [184,45,139];
				case'comedy':
					return [73,149,200];
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
					"width": 370,
					"height": 95,
					"anchorY":118, 
					"mask":false 
				},
				"theater": {
					"x": 0,
					"y": 0,
					"width": 370,
					"height": 95,
					"anchorY":118, 
					"mask":false 
				},
				"kino": {
					"x": 0,
					"y": 125,
					"width": 370,
					"height": 95,
				},
				"kabarett": {
					"x": 0,
					"y": 245,
					"width": 370,
					"height": 95,
				},
				"comedy": {
					"x": 0,
					"y": 370,
					"width": 370,
					"height": 95,
				},
				"show": {
					"x": 0,
					"y": 492,
					"width": 370,
					"height": 95,
				},
				"party": {
					"x": 0,
					"y": 618,
					"width": 370,
					"height": 95,
				},
				"concert": {
					"x": 440,
					"y": 0,
					"width": 370,
					"height": 95,
					"anchorY":118, 
					"mask":false 
				},
				"literature": {
					"x": 440,
					"y": 125,
					"width": 370,
					"height": 95,
				},
				"fair": {
					"x": 440,
					"y": 245,
					"width": 370,
					"height": 95,
				},
				"football": {
					"x": 440,
					"y": 370,
					"width": 370,
					"height": 95,
				},
				"art": {
					"x": 440,
					"y": 492,
					"width": 370,
					"height": 95,
				},
				"other": {
					"x": 440,
					"y": 618,
					"width": 370,
					"height": 95,
				},
			} ,
      sizeScale:1 ,
      getPosition: d => calcPosition(d.coordinates),
      getIcon: d => d.category,
			getSize: d=> 100,
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

		
		const scatterLayer = new ScatterplotLayer({
				id: 'scatterplot-layer',
				outline:true,
				data: this.state.data,
				strokeWidth: 5,
				radiusScale: 1,
				getPosition: d => calcPosition(d.coordinates),
				getRadius: d => d.impact*1000,
				getColor: d => calcColor(d.category)
		});
		if(this.state.data !== undefined){
			console.log('here comes ourthis is our data');
			console.log(this.props.selectEvent);
			console.log(this.state.data[0]);
			const path1 = new PathLayer({
				id: 'path-layer',
				data: this.props.selectEvent.typically_affected_subgraph,
				widthScale: 10,
				widthMinPixels: 1,
				getPath: d => d.path,
				getColor: d => [255,255,255,255],
				getWidth: d => 1,
			});
			//const path1 = new PathLayer({
				//id: 'path-layer',
				//data: this.state.data[0].affected_subgraph,
				//widthScale: 1,
				//widthMinPixels: 1,
				//getPath: d => d.path,
				//getColor: d => [255,40,90,255],
				//getWidth: d => 1,
				//});
			return (
			<div>
				<MapGL
					{...viewport}
					mapStyle="mapbox://styles/mapbox/dark-v9" 
					mapboxApiAccessToken='pk.eyJ1IjoidGFhbCIsImEiOiJjamRldWk0NzQwZDhwMnFtc24zZGYzdGN5In0.tTxjOeK-yOzzxqLzqj4V1A'
				onViewportChange={this._onViewportChange.bind(this)}
				>
				<DeckGL {...viewport} layers={[scatterLayer,layer,path1]} />
				</MapGL>
			</div>
			)
		}
					//mapStyle="mapbox://styles/mapbox/bright-v8" 
    return (
			<div>
				<MapGL
					{...viewport}
					mapStyle="mapbox://styles/mapbox/dark-v9" 
        onViewportChange={this._onViewportChange.bind(this)}
				>
				<DeckGL {...viewport} layers={[scatterLayer,layer]} />
				</MapGL>
			</div>
			)
				//<DeckGL {...viewport} layers={pathLayer} />
		}
	}
export default D4UMMAP;

