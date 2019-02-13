import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { fetchResults ,getTraffic} from './lib/service.js';
import { convertSubgraph } from './lib/utils.js';
import { Provider } from 'react-redux';

const changeSelectedEvent = (val) => store.dispatch({type:'SELECT_EVENT', payload:val});
const unselectSelectedEvent = (val) => {console.log('unselec');store.dispatch({type:'UNSELECT_EVENT', payload:val})};
const changeCity = (val) => store.dispatch({type:'SELECT_CITY', payload:val});
const changeViewport = (val) => store.dispatch({type:'SET_VIEWPORT', payload:val});
const changeEventData = (val) => store.dispatch({type:'CHANGE_EVENTDATA', payload:'somevalue'});
const changeFilter = (val) => store.dispatch({type:'SET_FILTER', payload:val});
const resetFilter = () => store.dispatch({type:'RESET_FILTER',payload: {}});
		//changeCity={changeCity}
		//changeViewport = {changeViewport}
		//changeSelectedEvent = {changeSelectedEvent}
		//changeFilter = {changeFilter}
		//resetFilter = {resetFilter}
		//unselectSelectedEvent = {unselectSelectedEvent}

ReactDOM.render(
<Provider store={store}>
	<App 
	/>
</Provider>
, document.getElementById('root'));

//const init = (val) =>{
//const state = store.getState();
//fetch('http://localhost:8080/events').then(function(res){
	//res.json().then(data => {
		//store.dispatch({type:'SET_EVENTDATA', payload: data});
	//});
//});
//init();
//fetchResults(new Date().toISOString()).then(res=> {
	//var b = res.json().then(data => { 
		//data = data.map((element)=> {
			//element.affected_subgraph= convertSubgraph(element.affected_subgraph);
			//element.typically_affected_subgraph= convertSubgraph(element.typically_affected_subgraph);
			//return element;
		//} );
		//store.dispatch({type:'SET_EVENTDATA', payload: data});
	//});
//})
//.catch(error => console.log('Error:', error));
//}
//init();
//setTimeout(() => {
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
//}, 1000)
