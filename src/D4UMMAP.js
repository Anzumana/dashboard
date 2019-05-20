import { convertSubgraph } from './lib/utils.js';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, {LineLayer ,IconLayer, ScatterplotLayer, PathLayer, GeoJsonLayer} from 'deck.gl'
import events from './assets/location-icon-atlas.png'; 
import roadwork from './assets/roadwork.png'; 
import Paper from './components/Paper';
import store from './store';
import { isUndefined } from 'util';
import { Droppable, Draggable} from 'react-beautiful-dnd'
import { splitCamelCase } from './lib/utils';
//Component
import Play from './components/Play';
import SelectCity from './components/SelectCity.js';

class D4UMMAP extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewport: this.props.viewport,
			selectEvent: this.props.selectEvent
		};
		this.test = this.test.bind(this);
		console.log(this.props.traffic.features);
		console.log(' HERE IS OUR CONSTRUICTOR');
	
	}
	onDragEnd(result) {
		console.log(result);
	};

	componentDidMount(){ 
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
	}

  _resize() {
    this._onViewportChange({
      width: window.innerWidth - 800,
      height: window.innerHeight-500
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
		console.log('RENDERlAYERS CALL');
		let layers = [];
		if(this.props.primary){
				layers.push(
						new PathLayer({
							id: 'primary',
							data: this.props.primary,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							pickable: true,
							onHover: d => { 
								console.log('hover');
								if(isUndefined(d.object)){
									return;
								}
							this.props.changeSelectedEvent(d.object)
								console.log(d.object);
							},
							getColor: d => {
								if((d.currentSpeed/d.speedLimit) > 1){
									return [80,40,255,255];
								}
								if((d.currentSpeed/d.speedLimit) < 1 && d.currentSpeed/d.speedLimit > 0.6){
									return [255,255,0,255];
								}
								if((d.currentSpeed/d.speedLimit) < 0.6){
									return [255,40,255,255];
								}
							},
							getWidth: d => 2,
						})
				);
		}
		if(this.props.secondary){
				layers.push(
						new PathLayer({
							id: 'secondary',
							data: this.props.motorwayLink,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							pickable: true,
							onHover: d => { 
							if(isUndefined(d.object)){
								return;
							}
							this.props.changeSelectedEvent(d.object)
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.tertiary){
				layers.push(
						new PathLayer({
							id: 'tertiary',
							data: this.props.tertiary,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.motorway){
				layers.push(
						new PathLayer({
							id: 'motorway',
							data: this.props.motorway,
							widthScale: 1,
							widthMinPixels: 5,
							pickable: true,
							onHover: d => { 
								console.log('hover');
							if(isUndefined(d.object)){
								return;
							}
							this.props.changeSelectedEvent(d.object)
							},
							getPath: d => { 
								d.coordinates 
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.motorwayLink){
				layers.push(
						new PathLayer({
							id: 'motorwayLink',
							data: this.props.motorwayLink,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							pickable: true,
							onHover: d => { 
							if(isUndefined(d.object)){
								return;
							}
							this.props.changeSelectedEvent(d.object)
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.primaryLink){
				layers.push(
						new PathLayer({
							id: 'primaryLink',
							data: this.props.primaryLink,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.secondaryLink){
				layers.push(
						new PathLayer({
							id: 'secondaryLink',
							data: this.props.secondaryLink,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.tertiaryLink){
				layers.push(
						new PathLayer({
							id: 'tertiaryLink',
							data: this.props.tertiaryLink,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates;
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 2,
						})
				);
		}
		if(this.props.trunkLink){
				layers.push(
						new PathLayer({
							id: 'trunkLink',
							data: this.props.trunk,
							widthScale: 1,
							widthMinPixels: 5,
							getPath: d => { 
								return d.coordinates 
							},
							getColor: d => [255,40,255,255],
							getWidth: d => 1,
						})
				);
		}
		if(this.props.traffic){
			layers.push(
				new IconLayer({
					id: 'icon-traffic',
					data: this.props.traffic.features,
					iconAtlas: roadwork,
					iconMapping:
						{
							"traffic-blue": {
								"x": 0,
								"y": 0,
								"width": 170,
								"height": 174,
							},
							"traffic-yellow": {
								"x": 220,
								"y": 0,
								"width": 170,
								"height": 174,
							},
							"roadwork-red": {
								"x": 414,
								"y": 0,
								"width": 170,
								"height": 174,
							},
							"roadwork-man": {
								"x": 612,
								"y": 0,
								"width": 157,
								"height": 174,
							},
						} ,
					sizeScale:1 ,
					getPosition: d => d.geometry.coordinates,
					getIcon: d => 'traffic-yellow',
					getSize: d=> 100,
					pickable: true,
					updateTrigger:{
						getPosition: d => d.geometry.coordinates
					},
					onClick: d => { 
						this.props.changeSelectedEvent(d.object)
					},
					onHover: d => { 
						if(isUndefined(d.object)){
							return;
						}
						this.props.changeSelectedEvent(d.object)
					}
				}),
				new ScatterplotLayer({
						id: 'scatterplot-layer',
						outline:true,
						data: this.state.filteredEvents,
						strokeWidth: 5,
						radiusScale: 1,
						getPosition: d => this.calcPosition(d.coordinates),
						getRadius: d => d.impact*1000,
						getColor: d => this.calcColor(d.category)
				})
			);
		}
		if(this.props.roadwork){
			layers.push(
				new IconLayer({
					id: 'icon-roadwork',
					data: this.props.roadwork.features,
					iconAtlas: roadwork,
					iconMapping:
						{
							"traffic-blue": {
								"x": 0,
								"y": 0,
								"width": 170,
								"height": 174,
							},
							"traffic-yellow": {
								"x": 220,
								"y": 0,
								"width": 170,
								"height": 174,
							},
							"roadwork-red": {
								"x": 414,
								"y": 0,
								"width": 170,
								"height": 174,
							},
							"roadwork-man": {
								"x": 612,
								"y": 0,
								"width": 157,
								"height": 174,
							},
						} ,
					sizeScale:1 ,
					getPosition: d => d.geometry.coordinates,
					getIcon: d => 'roadwork-man',
					getSize: d=> 100,
					pickable: true,
					updateTrigger:{
						getPosition: d => d.geometry.coordinates
					},
					onClick: d => { 
						this.props.changeSelectedEvent(d.object)
					},
					onHover: d => { 
						if(isUndefined(d.object)){
							return;
						}
						this.props.changeSelectedEvent(d.object)
					}
				}),
				new ScatterplotLayer({
						id: 'scatterplot-layer',
						outline:true,
						data: this.state.filteredEvents,
						strokeWidth: 5,
						radiusScale: 1,
						getPosition: d => this.calcPosition(d.coordinates),
						getRadius: d => d.impact*1000,
						getColor: d => this.calcColor(d.category)
				}),
			);
		}
		layers.push(
			new IconLayer({
				id: 'icon',
				data: this.state.filteredEvents,
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
				onClick: d => { 
					this.props.changeSelectedEvent(d.object)
				},
				onHover: d => { 
					if(isUndefined(d.object)){
						return;
					}
					this.props.changeSelectedEvent(d.object)
				}
			}),
			new ScatterplotLayer({
					id: 'scatterplot-layer',
					outline:true,
					data: this.state.filteredEvents,
					strokeWidth: 5,
					radiusScale: 1,
					getPosition: d => this.calcPosition(d.coordinates),
					getRadius: d => d.impact*1000,
					getColor: d => this.calcColor(d.category)
			})
		);
		console.log(this.props.layer);
		console.log(this.props.layer == 'affected_subgraph');
		if(this.props.layer == 'affected_subgraph' && this.state.selectEvent && this.state.selectEvent.type != 'Feature'){
			console.log('we triggered this');
			layers.push(
				new PathLayer({
					id: 'path-layer',
					data: convertSubgraph(this.state.selectEvent.affected_subgraph),
					widthScale: 10,
					widthMinPixels: 2,
					getPath: d => d.path,
					getColor: d => [0,0,0,255],
					getWidth: d => 1,
				})
			);
		} 
		if(this.props.layer =='typically_affected_subgraph' && this.state.selectEvent && this.state.selectEvent.type != 'Feature'){
			console.log('we triggered this');
			layers.push(
				new PathLayer({
					id: 'path-layer',
					data: convertSubgraph(this.state.selectEvent.typically_affected_subgraph),
					widthScale: 10,
					widthMinPixels: 2,
					getPath: d => d.path,
					getColor: d => [0,0,0,255],
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
				filteredEvents:filteredEvents,
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
		switch(value) {
			case 'typicallyAffectedSubgraph' :
				store.dispatch({
					type: '[LAYER]:typically_affected_subgraph'
				});
				break;
			case 'affectedSubgraph':
				store.dispatch({
					type: '[LAYER]:affected_subgraph'
				});
				break;
			case 'none':
				store.dispatch({
					type: '[LAYER]:none'
				});
				break;
			case' buildings':
			this.setState({
				mapStyle:"mapbox://styles/taal/" + value
			})
			break;
			case	"streets":
				value = "mapbox/streets-v10";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "outdoors":
				value = "mapbox/outdoors-v10";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "light":
				value = "mapbox/light-v9";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "dark":
				value = "mapbox/dark-v9";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "satellite":
				value = "mapbox/satellite-v9";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "satelliteStreets":
				value = "mapbox/satellite-streets-v10";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "navigationPreviewDay":
				value = "mapbox/navigation-preview-day-v4";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "navigationPreviewNight":
			value = "mapbox/navigation-preview-night-v4";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "navigationGuidanceDay":
			value = "mapbox/navigation-guidance-day-v4";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			case "navigationGuidanceNight":
			value = "mapbox/navigation-guidance-night-v4";
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
			break;
			default:
			this.setState({
				mapStyle:"mapbox://styles/" + value
			})
		}
	}
  render() {
		const {viewport} = this.state;
					const buttons = [
						"streets",
						"outdoors",
						"light",
						"dark",
						"satellite",
						"satelliteStreets",
						"navigationPreviewDay",
						"navigationPreviewNight",
						"navigationGuidanceDay",
						"navigationGuidanceNight",
					];
		const activeOptions = this.props.layers.columns.activeOptions.taskIds;
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
				<div className="ActiveOptions__Container">
					<Paper className="Paper" title={'Active Options'} description={'Drag your selections here'}/>
					<div>
						<Play 
							changeFilter = {(val) => store.dispatch({type:'SET_FILTER', payload:val})} 
							resetFilter = { () => store.dispatch({type:'RESET_FILTER',payload: {}})}
							filter= {this.props.filter}
							unselectSelectedEvent = {(val) => store.dispatch({type:'UNSELECT_EVENT', payload:val})}
						/>
						<SelectCity
						changeCity ={(val) => store.dispatch({type:'SELECT_CITY', payload:val})} 
						cities= {this.props.cities} 
						changeViewport ={(val) => store.dispatch({type:'SET_VIEWPORT', payload:val})}
						/>
					</div>
				</div>
				<Droppable droppableId='activeOptions' direction="horizontal">
				{(provided) => (
				<div className="MapFilterContainer"
					ref={provided.innerRef}
					{...provided.droppableProps}
					>
					{this.props.layers.columns.activeOptions.taskIds.map( (value,index) => 
					<Draggable draggableId={value} index={index}>
						{(provided) => (
						<div className="MapTile" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
							<div className={value} onClick={() => this.test(value)}> </div>
							<div className="MapTile__title"> {splitCamelCase(value)} </div>
						</div>
						)}
					</Draggable>
					)}
					{provided.placeholder}
				</div>
				)}
				</Droppable>
				<Paper className="Paper" title={'Map Options'} description={'Drag your prefered mapstyle onto the active options panel'}/>
				<Droppable droppableId='mapOptions' direction="horizontal">
				{(provided) => (
				<div className="MapFilterContainer" ref={provided.innerRef} {...provided.droppableProps}>
					{this.props.layers.columns.mapOptions.taskIds.map( (value,index) => 
					<Draggable draggableId={value} index={index}>
						{(provided) => (
						<div className="MapTile" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
							<div className={value} onClick={() => this.test(value)}> </div>
							<div className="MapTile__title"> {splitCamelCase(value)} </div>
						</div>
						)}
					</Draggable>
					)}
					{provided.placeholder}
				</div>
				)}
				</Droppable>
				<Paper className="Paper" title={'Data'} description={'Drag the Datapoints you are interested in onto the options panel '}/>
				<Droppable droppableId='dataOptions' direction="horizontal">
				{(provided) => (
				<div className="MapFilterContainer" ref={provided.innerRef} {...provided.droppableProps} >
					{this.props.layers.columns.dataOptions.taskIds.map( (value,index) => 
						<Draggable draggableId={value} index={index}>
							{(provided) => (
								<div className="MapTile" onClick = {() =>this.test(value)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
									<div className="dark"></div>
									<div className="MapTile__title"> {splitCamelCase(value)}</div>
								</div>
							)}
						</Draggable>
					)}
					{provided.placeholder}
				</div>
				)}
				</Droppable>
			</div>
			)
		}
	}

const mapStateToProps = (state) => state
const ConnectedD4UMMAP = connect(mapStateToProps)(D4UMMAP)
export default ConnectedD4UMMAP 
