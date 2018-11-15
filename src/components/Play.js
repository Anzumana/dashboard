import React , {Component } from 'react';
import {getEvents } from '../lib/service.js'
import  moment  from 'moment';

	//update(){
		//console.log('sdsd');
		//let since =new Date(2017,10,12,0);
			//let until =new Date(2017,10,12,24);
			//since.setDate(since.getDate() + 2);
			//until.setDate(until.getDate() + 2);
		//getEvents( since.toISOString(),until.toISOString()).then(res=> {
			//var b = res.json().then(data => { 
				//console.log(data);
			//});
		//})
		//.catch(error => console.log('Error:', error));
	//}




export default (props) => {

	const next = () =>{
		let since = new Date(props.filter.since);
		let until = new Date(props.filter.until);
		since.setDate(since.getDate() + 1);
		until.setDate(until.getDate() + 1);
		props.changeFilter({since:since.toISOString(), until: until.toISOString()});
		props.unselectSelectedEvent();
	}
	const reset = () => {
		if(window.confirm('Sie sie sicher das sie zum ersten Event\nzurueck navigieren wollen?')){
			props.resetFilter();
			props.unselectSelectedEvent();
		};
	}
	const prev = () => {
		let since = new Date(props.filter.since);
		let until = new Date(props.filter.until);
		since.setDate(since.getDate() - 1);
		until.setDate(until.getDate() - 1);
		props.changeFilter({since:since.toISOString(), until: until.toISOString()});
		props.unselectSelectedEvent();
	}
	//var intervalId = setInterval(this.update, 500);
	const date = props.filter.until.substr(0,10).replace('-','.').replace('-','.');
	return(
			<div className="Play">
				<div className="Play__prev" onClick={prev}></div>
				<div className="Play__currentDate">{moment(date).format('LL')}</div>
				<div className="Play__next"  onClick={next}></div>
				<div className="Play__reset"  onClick={reset}></div>
				</div>
	)
}
