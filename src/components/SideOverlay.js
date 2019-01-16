import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'
import  moment  from 'moment';
import {Label,LineChart , Line , XAxis, YAxis,CartesianGrid, Tooltip, Legend} from 'recharts';

class SideOverlay extends React.Component {
	constructor(){
		super();
	}
	componentWillReceiveProps(props){
		this.setState(props.selectEvent);
	}
	
	render(){
		if(this.props.selectEvent === null){
			return null;
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
				<LineChart width={300} height={200} data={this.state.temporal_impacts} >
					<Line type="basis" dataKey="temporal_impact" stroke="#000000" dot={false}/>
					<XAxis dataKey="minute">
						<Label value="Temporal Impact" offset={-1} position="insideBottom" />
					</XAxis>
						<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
						<YAxis dataKey="temporal_impact">
							<Label value="Zeit"  angle={-90}position="center" />
						</YAxis>
					<Tooltip/>
				</LineChart>
				</div>
			)
		}
	}
}
export default SideOverlay
