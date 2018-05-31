import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'

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
				
				const dateArray = this.state.start.split('T')[0].split('-');
				date = dateArray[2]+ '.' + dateArray[1] +'.' + dateArray[0];
				time = (this.state.start.split('T')[1]).split('.')[0].substr(0,5);
			}
			return (
				<div className="SideOverlay">
				<div className="SideOverlay__title" >{this.state.name}</div>
				<div className="SideOverlay__type">{this.state.place}</div>
				<div className="SideOverlay__date">{date}</div>
				<div className="SideOverlay__time"> {time}</div>
				</div>
			)
		}
	}
}
export default SideOverlay
