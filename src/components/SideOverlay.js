import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'
import  moment  from 'moment';

class SideOverlay extends React.Component {
	constructor(){
		super();
	}
	componentWillMount(){
	}
	componentDidMount(){
	}
	
	componentWillReceiveProps(props){
		console.log('will receive props');
		console.log(props);
		this.setState(props.selectEvent);
	}
	
	render(){
		console.log('render call');
		console.log(this.state)
		if(this.state === null){
			return (<div> </div>);
		}else {
			let time;
			let date;
			if(this.state.start){
				date = moment(this.state.start).format('DD.MM.YYYY');
				time = moment(this.state.start).format('hh:mm');
			}
			return (
				<div className="SideOverlay">
				<div className="SideOverlay__title" >{this.state.name}</div>
				<div className="SideOverlay__type">{this.state.place}</div>
				<div className="SideOverlay__time"> Ab {time}</div>
				<div className="SideOverlay__date">{date}</div>
				</div>
			)
		}
	}
}
export default SideOverlay
