import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import moment from 'moment';
import {
  Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import renderHTML from 'react-render-html';
import Card from './MaterialCardComplexInteraction.js';
import SimpleCard from './MaterialCardSimpleCard';

class SideOverlay extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(props) {
    // this.setState(props.selectEvent);
  }

  render() {
    if (this.props.selectEvent === null) {
      return null;
    }
		if(this.props.selectEvent['groupId']){
			return null;
		}
    if (this.props.selectEvent.type == 'traffic') {
      return (
        <div className="SideOverlay">
          <div className="SideOverlay__title">
SpeedLimit:
            {this.props.selectEvent.speedLimit}
          </div>
          <div className="SideOverlay__description">
Current Speed:
            {this.props.selectEvent.currentSpeed}
          </div>
          <div className="SideOverlay__description">
quantity of meassurments:
            {this.props.selectEvent.totalMeasurements}
          </div>
        </div>
      );
    }
    if (this.props.selectEvent.type === 'Feature') {
      console.log(this.props.selectEvent.type);
      return (
        <div className="SideOverlay">
          <div className="SideOverlay__title">{renderHTML(this.props.selectEvent.properties.ROAD) }</div>
          <div className="SideOverlay__description">{renderHTML(this.props.selectEvent.properties.LOCATION_DESCRIPTION)}</div>
        </div>
      );
    }

			//<Card tile={this.props.selectEvent} />
    if (this.props.selectEvent.type === 'DEFAULT') {
      return null;
    }
    if (this.props.selectEvent.type !== 'Feature') {
      let time;
      let date;
			let historical;
      if (this.props.selectEvent.start) {
        date = moment(this.props.selectEvent.start).format('DD.MM.YYYY');
        time = moment(this.props.selectEvent.start).format('hh:mm');
				if(this.props.selectEvent.historical){
					historical = '<div> Historical Data</div>'
				}else{
					historical = '<div class="SideOverlay__prediction">Prediction</div>'
				}
      }
      return (
        <div className="SideOverlay">
          <div className="SideOverlay__title">{this.props.selectEvent.name}</div>
          <div className="SideOverlay__type">{this.props.selectEvent.place}</div>
          <div className="SideOverlay__time">
            {' '}
Ab
            {time}
				{renderHTML(historical)} 
          </div>
          <div className="SideOverlay__date">{date}</div>
          <LineChart width={300} height={200} data={this.props.selectEvent.temporal_impacts}>
            <Line type="basis" dataKey="temporal_impact" stroke="#000000" dot={false} />
            <XAxis dataKey="minute">
              <Label value="zeit" offset={-1} position="insideBottom" />
            </XAxis>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <YAxis dataKey="temporal_impact">
              <Label value="temporal_impact" angle={-90} position="center" />
            </YAxis>
            <Tooltip />
          </LineChart>
        </div>
      );
    }
    return null;
  }
}
export default SideOverlay;
