import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
const changeCity = (val) => store.dispatch({type:'SELECT_CITY', payload:val});

const render = () => {
	const state =  store.getState();
	ReactDOM.render(<App city ={state.city} cities = {state.cities} changeCity={changeCity}/>, document.getElementById('root'));
}

render();
store.subscribe(render);

setTimeout(() => {
}, 3000)
