import {createStore, combineReducers} from 'redux'
import selectCityReducer from './reducers/selectCity'
import selectEventReducer from './reducers/selectEvent'
import viewportReducer from './reducers/viewport'
import eventsReducer from './reducers/events'
import filterReducer from './reducers/filter'
import { composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
	viewport: viewportReducer,
	selectCity: selectCityReducer,
	events: eventsReducer,
	selectEvent: selectEventReducer,
	filter: filterReducer
});
export default createStore(
	reducer,
	composeWithDevTools())
