import { convertSubgraph } from './lib/utils.js';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer ,IconLayer, ScatterplotLayer, PathLayer, GeoJsonLayer} from 'deck.gl'
import events from './assets/location-icon-atlas.png'; 

class D4UMMAP extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewport: this.props.viewport,
			selectEvent: this.props.selectEvent
		};
		this.test = this.test.bind(this);
	}

	componentDidMount(){ 
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
	}

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight-600
    });
  }

	calcPosition(val){
		let substrings = val.split(',')
		var coordinate = new Array(parseFloat(substrings[0]),parseFloat(substrings[1]));
		return coordinate 
	}

	calcColor(val){
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

	_renderLayers(){
		console.log('renderLayers');
		let layers = [];
		layers.push(
			new IconLayer({
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
				getPosition: d => this.calcPosition(d.coordinates),
				getIcon: d => d.category,
				getSize: d=> 100,
				pickable: true,
				updateTrigger:{
					getPosition: d => d.coordinates
				},
				onHover: d => { 
					this.props.changeSelectedEvent(d.object)
				}
			}),
			new ScatterplotLayer({
					id: 'scatterplot-layer',
					outline:true,
					data: this.state.data,
					strokeWidth: 5,
					radiusScale: 1,
					getPosition: d => this.calcPosition(d.coordinates),
					getRadius: d => d.impact*1000,
					getColor: d => this.calcColor(d.category)
			})
		);
		console.log(this.props);
		console.log('returning layers');
		if(this.props.traffic){
			layers.push(
				new GeoJsonLayer({
					id: 'traffic_layer',
					data: this.props.traffic,
					pickable: true,
					stroked: false,
					filled: true,
					extruded: true,
					lineWidthScale: 20,
					lineWidthMinPixels: 2,
					getFillColor: [50, 160, 180, 200],
					getLineColor:[50, 160, 180, 200],
					getRadius: 100,
					getLineWidth: 1,
					getElevation: 30,
					onClick: d => { 
						console.log('we clicked it ');
					},
					onHover: d => {
						console.log('we hovered');
						this.props.changeSelectedEvent(d.object)
						//[> Update tooltip
							 //http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
						//*/
					}
				})
			);
		}
		if(this.props.roadwork){
			console.log('we have some roadwork');
			layers.push(
				new GeoJsonLayer({
					id: 'roadwork_layer',
					data: this.props.roadwork,
					pickable: true,
					stroked: false,
					filled: true,
					extruded: true,
					lineWidthScale: 20,
					lineWidthMinPixels: 2,
					getFillColor: [204, 0, 204, 200],
					getLineColor:[204, 0, 204, 200],
					getRadius: 100,
					getLineWidth: 1,
					getElevation: 30,
					onHover: d => {
						console.log('we hovered ');
						this.props.changeSelectedEvent(d.object)
					}
				})
			);
		}
		if(this.state.selectEvent && this.state.selectEvent.type != 'Feature'){
			console.log('we triggered this');
			layers.push(
				new PathLayer({
					id: 'path-layer',
					data: convertSubgraph(this.state.selectEvent.affected_subgraph),
					widthScale: 10,
					widthMinPixels: 1,
					getPath: d => d.path,
					getColor: d => [255,255,255,255],
					getWidth: d => 1,
				}),
				new PathLayer({
					id: 'typically_affected_sugraph',
					data: convertSubgraph(this.state.selectEvent.typically_affected_subgraph),
					widthScale: 10,
					widthMinPixels: 1,
					getPath: d => d.path,
					getColor: d => [150,49,49,255],
					getWidth: d => 1,
				})
			);
		} 
		return layers;
	}

  _onViewportChange(viewport) {
		this.setState({
			viewport: {...this.state.viewport, ...viewport}
		});
		window.setTimeout( this.props.changeViewport(viewport),5000);
  }
	
	componentWillReceiveProps(props){
		console.log('componentWillReceiveProps');
		this.setState({
			viewport: {...this.state.viewport , ...props.viewport},
			selectEvent: props.selectEvent
		});

		let since = props.filter.since;
		let until = props.filter.until;
		try{
			let filteredEvents = props.events.filter( event => {
				return ((Date.parse(event.start.replace('+01','Z'))) <= Date.parse(until)) && (Date.parse(event.start.replace('+01','Z')) >= Date.parse(since))
			})
			this.setState({
				data:filteredEvents,
				selectEvent: props.selectEvent
			})
			this._renderLayers();
		}
		catch(error){
			console.log('D4UMMAP 65'+ error);
			this.setState({
				data:null
			})
		}
	}
	test(value){
	console.log(value);
		this.setState({
			mapStyle:"mapbox://styles/" + value
		})
	}
  render() {
		const {viewport} = this.state;
					const buttons = [
						"mapbox/streets-v10",
						"mapbox/outdoors-v10",
						"mapbox/light-v9",
						"mapbox/dark-v9",
						"mapbox/satellite-v9",
						"mapbox/satellite-streets-v10",
						"mapbox/navigation-preview-day-v4",
						"mapbox/navigation-preview-night-v4",
						"mapbox/navigation-guidance-day-v4",
						"mapbox/navigation-guidance-night-v4",
						"taal/cjoiinpu74zx12st9k4rtfvju"
					];
			return (
			<div>
				<MapGL
					className="Map"
					{...viewport}
					mapStyle={this.state.mapStyle}
				onViewportChange={this._onViewportChange.bind(this)}
				>
				<DeckGL {...viewport} layers={this._renderLayers()} />
				</MapGL>
				<h1 className="MapHeader"> Map Filters </h1>
				<div className="MapFilterContainer">
					{buttons.map( value => 
						<div className="MapTile" >
							<div className={value.split('/')[1]}onClick={() => this.test(value)}> </div>
							<div className="MapTile__title"> {value} </div>
						</div>
					)}
				</div>
				<h1 className="MapHeader"> Data </h1>
				<div className="MapFilterContainer">
						<div className="MapTile" >
							<div className="dark-v9"></div>
							<div className="MapTile__title"> affected Subgraph</div>
						</div>
						<div className="MapTile" >
							<div className="dark-v9"></div>
							<div className="MapTile__title"> typically affected Subgraph</div>
						</div>
				</div>
			</div>
			)
		}
	}

const mapStateToProps = (state) => state
const ConnectedD4UMMAP = connect(mapStateToProps)(D4UMMAP)
export default ConnectedD4UMMAP 
