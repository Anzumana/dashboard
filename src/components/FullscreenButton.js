import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

export default class FullscreenButton extends React.Component {
	constructor(props){
		super(props);
		this.fullscreen = this.fullscreen.bind(this);
	}
	fullscreen(){
		store.dispatch({type:'Fullscreen:toggle'});
	}
	render(){
		if(this.props.fullscreen){
			return (
				<h1 style={{position:'fixed', top:0, zIndex:2 , backgroundColor:'black'}} onClick={() => this.fullscreen()}> Fullscreen </h1>
			)
		}else {
			return (
				<h1 style={{position:'fixed', top:0, zIndex:2}} onClick={() => this.fullscreen()}> fullscreen off</h1>
			)
		}
	}
}

