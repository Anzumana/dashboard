import {createStore, combineReducers} from 'redux'
import selectCityReducer from './reducers/selectCity'
import selectEventReducer from './reducers/selectEvent'
import viewportReducer from './reducers/viewport'
import eventsReducer from './reducers/events'
import filterReducer from './reducers/filter'
import trafficReducer from './reducers/traffic'
import roadworkReducer from './reducers/roadwork'
import dataReducer from './reducers/data'
import layerReducer from './reducers/layer'
import motorwayReducer from './reducers/motorway'
import motorwayLinkReducer from './reducers/motorway_link'
import primaryReducer from './reducers/primary'
import secondaryReducer from './reducers/secondary'
import tertiaryReducer from './reducers/tertiary'
import trunkReducer from './reducers/trunk'
import primaryLinkReducer from './reducers/primary_link'
import secondaryLinkReducer from './reducers/secondary_link'
import tertiaryLinkReducer from './reducers/tertiary_link'
import trunkLinkReducer from './reducers/trunk_link'
import layersReducer from './reducers/layers';
import mapStyleReducer from './reducers/mapStyle';
import { composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
	viewport: viewportReducer,
	selectCity: selectCityReducer,
	events: eventsReducer,
	selectEvent: selectEventReducer,
	filter: filterReducer,
	traffic: trafficReducer,
	roadwork: roadworkReducer,
	data: dataReducer,
	layer: layerReducer,
	motorway: motorwayReducer,
	primary: primaryReducer,
	secondary: secondaryReducer,
	tertiary: tertiaryReducer,
	trunk: trunkReducer,
	motorwayLink: motorwayLinkReducer,
	primaryLink: primaryLinkReducer,
	secondaryLink: secondaryLinkReducer,
	tertiaryLink: tertiaryLinkReducer,
	trunkLink: trunkLinkReducer,
	layers: layersReducer,
	mapStyle: mapStyleReducer
});
export default createStore(
	reducer,
	composeWithDevTools())
