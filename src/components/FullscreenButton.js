import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import FullscreenIcon  from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Button from '@material-ui/core/Button';

export default class FullscreenButton extends React.Component {
	constructor(props){
		super(props);
		this.fullscreen = this.fullscreen.bind(this);
	}
	fullscreen(){
		store.dispatch({type:'Fullscreen:toggle'});
	}
	render(){
		if(this.props.fullscreen){
			return (
				<div className="FullscreenButton" onClick={() => this.fullscreen()}>
				<Button
					variant="contained"
					endIcon={<FullscreenExitIcon />}
				>
					Exit Fullscreen
				</Button>
				</div>
			)
		}else {
			return (
			<div className="FullscreenButton" onClick={() => this.fullscreen()}>
				<Button
					variant="contained"
				size="large"
					endIcon={<FullscreenIcon fontSize="large"/>}
				>
					Enter Fullscreen
				</Button>
			</div>
			)
		}
	}
}

