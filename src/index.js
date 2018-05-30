import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

const changeCity = (val) => store.dispatch({type:'SELECT_CITY', payload:val});
const changeViewport = (val) => store.dispatch({type:'SET_VIEWPORT', payload:val 
});

const render = () => {
	const state =  store.getState();
	ReactDOM.render(
		<App 
			city ={state.selectCity.city} 
			cities = {state.selectCity.cities} 
			changeCity={changeCity}
			viewport ={state.viewport}
			changeViewport = {changeViewport}
		/>, document.getElementById('root'));
}

render();
store.subscribe(render);

setTimeout(() => {
}, 5000)
