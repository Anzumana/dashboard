import {createStore, combineReducers} from 'redux'
import selectCityReducer from './reducers/selectCity'
import viewportReducer from './reducers/viewport'
import { composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
	viewport: viewportReducer,
	selectCity: selectCityReducer
});
export default createStore(
	reducer,
	composeWithDevTools())
