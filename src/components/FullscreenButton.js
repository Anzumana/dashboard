import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import FullscreenIcon  from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Button from '@material-ui/core/Button';
import { theme } from '../lib/theme'; 
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
					<Fab size="small" color="secondary" variant="extended" aria-label="fullscreen" >
						<FullscreenExitIcon fontSize="large"/>
					</Fab>
				</div>
			)
		}else {
			return (
			<div className="FullscreenButton" onClick={() => this.fullscreen()}>
					<Fab size="medium" variant="extended" color="secondary"aria-label="fullscreen" >
						<FullscreenIcon fontSize="large"/>
					</Fab>
			</div>
			)
		}
	}
}

