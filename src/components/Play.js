import React from 'react';
import {getEvents } from '../lib/service.js'
import  moment  from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/de';
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
		<div>
			<div className="Play">
				<div className="Play__prev" onClick={prev}></div>
				<div className="Play__currentDate">{moment(date).format('LL')}</div>
				<div className="Play__next"  onClick={next}></div>
				<div className="Play__reset"  onClick={reset}></div>
				</div>
		</div>
	)
}
