import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import {fetchResults} from './lib/service.js'

const changeSelectedEvent = (val) => store.dispatch({type:'SELECT_EVENT', payload:val});
const changeCity = (val) => store.dispatch({type:'SELECT_CITY', payload:val});
const changeViewport = (val) => store.dispatch({type:'SET_VIEWPORT', payload:val});
const changeEventData = (val) => store.dispatch({type:'CHANGE_EVENTDATA', payload:'somevalue'});
const changeFilter = (val) => store.dispatch({type:'SET_FILTER', payload:val});

const render = () => {
	const state =  store.getState();
	ReactDOM.render(
		<App 
			city ={state.selectCity.city} 
			cities = {state.selectCity.cities} 
			changeCity={changeCity}
			viewport ={state.viewport}
			changeViewport = {changeViewport}
			events = {state.events}
			selectEvent = {state.selectEvent}
			changeSelectedEvent = {changeSelectedEvent}
			filter = {state.filter}
			changeFilter = {changeFilter}
		/>, document.getElementById('root'));
}

const init = (val) =>{
const state = store.getState();
fetchResults(new Date().toISOString()).then(res=> {
	var b = res.json().then(data => { 
		store.dispatch({type:'SET_EVENTDATA', payload: data});
	});
})
.catch(error => console.log('Error:', error));
}
init();
render();
store.subscribe(render);

setTimeout(() => {
	//store.dispatch({type:'SELECT_EVENT', payload: {
		//capacity: 3500,
		//category: 'concert',
		//coordinates: '9.2323,52.323',
		//geometrie: [],
		//id:103,
		//name: "Beethiven: 9. Sinfonie",
		//place: 'Kuppelsaal',
		//start:'2017-12-27 20:00:00'
	//}});
}, 1000)
