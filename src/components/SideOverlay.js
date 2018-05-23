import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'


class SideOverlay extends React.Component {
	constructor(){
		super();
	}
	componentWillMount(){
		console.log("willMount");
	}
	componentDidMount(){
		console.log("didMount");
	}
	
	render(){
		return (
			<div className="SideOverlay">
			<div className="SideOverlay__close">x</div>
			<div className="SideOverlay__title" >Event-Name</div>
			<div className="SideOverlay__type">art von Event</div>
			<div className="SideOverlay__date">12.03.2018</div>
			<div className="SideOverlay__time"> 12:00 - 20:00 </div>
				<p class="SideOverlay__description">
					Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. 
					In malesuada enim in dolor euismod, id commodo mi consectetur. 
					Curabitur at vestibulum nisi. Nullam vehicula nisi velit
					. Mauris turpis nisl, molestie ut ipsum et
						, suscipit vehicula odio. Vestibulum 
						interdum vestibulum felis ac 
						molestie. Praesent aliquet quam et 
						libero dictum, vitae dignissim leo eleifend. 
							In in turpis turpis. Quisque justo turpis, 
							vestibulum non enim nec, tempor mollis mi
							. Sed vel tristique quam.
				</p>
			</div>
		)
	}
}
export default SideOverlay
