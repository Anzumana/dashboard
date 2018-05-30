import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react'
export default (props) => {

	const switchCity= (event,data)=>{
		props.changeCity(data.value);
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
