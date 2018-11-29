import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'

class SelectCity extends React.Component{
	constructor(){
		super();
	}

	render(){
		const switchCity= (event,data)=>{
			this.props.changeCity(data.value);
			console.log(data.value);
			switch(data.value){
				case 'hannover':
					this.props.changeViewport(this.props.cities[0].viewport);
							break;
				case 'braunschweig':
					this.props.changeViewport(this.props.cities[1].viewport);
							break;
				case 'wolfsburg':
					this.props.changeViewport(this.props.cities[2].viewport);
					break;
				default:
					this.props.changeViewport(this.props.cities[0].viewport);
			}
		}
		return(
			<div className="SelectCity">
				<Dropdown 
					placeholder='Select City'
					onChange={switchCity} 
					options={this.props.cities} 
					fluid selection 
				/>
			</div>
		)
	}
}
export default connect(
	(state) => state.selectCity
)(SelectCity)
