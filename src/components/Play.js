import React , {Component} from 'react';
import {getEvents} from '../lib/service.js'
class Play extends React.Component {
	constructor(){
		super();
		this.update.bind(this);
		this.startAnimation.bind(this);
	}
	update(){
		console.log('sdsd');
		let since =new Date(2017,10,12,0);
			let until =new Date(2017,10,12,24);
			since.setDate(since.getDate() + 2);
			until.setDate(until.getDate() + 2);
		getEvents( since.toISOString(),until.toISOString()).then(res=> {
			var b = res.json().then(data => { 
				console.log(data);
			});
		})
		.catch(error => console.log('Error:', error));
		}
	startAnimation() {
		console.log(this.props);
		//this.props.changeFilter({since:'sdsd', until: 'sdsd'});
	}
	render(){
		const {changeFilter} = this.props
		return (
			<div onClick={this.startAnimation}>
				html {this.props.test}
			</div>
		)
	}
}


export default Play
