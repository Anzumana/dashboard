import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react'
export default (props) => {

	const switchCity= (event,data)=>{
		props.changeCity(data.value);
		console.log(data.value);
		switch(data.value){
			case 'hannover':
				props.changeViewport(props.cities[0].viewport);
						break;
			case 'braunschweig':
				props.changeViewport(props.cities[1].viewport);
						break;
			case 'wolfsburg':
				props.changeViewport(props.cities[2].viewport);
				break;
			default:
				props.changeViewport(props.cities[0].viewport);
		}
		//fetch api for selected region 
	}
	return(
		<div className="SelectCity">
			<Dropdown 
				placeholder='Select City'
				onChange={switchCity} 
				options={props.cities} 
				fluid selection 
			/>
		</div>
	)
}
