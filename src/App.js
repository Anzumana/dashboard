import React, { Component } from 'react';
import { BrowserRouter  as Router , Route , Link} from 'react-router-dom';
import './App.css';
import About from './components/About';
import BubbleChart from './components/BubbleChart'
import SimpleLineChart from './components/SimpleLineChart'
import SimpleTreemap from './components/SimpleTreemap'
import MakeMap from './components/Map.js'
import myScene  from './components/Scene'

const Header = () => 
(
	<Link to='/'> 
	<h1> D4UM Dashbaord </h1>
	</Link>
)
//const Header = () => (
const Home = ()=> 
(
	<div>
	<h1> home component </h1>
	<Link to='/SimpleLineChart'>LineChart</Link> <br/>
	<Link to='/bubbleChart'>BubbleChart</Link> <br/>
	<Link to='/SimpleTreemap'>SimpleTreemap</Link><br/>
	<Link to='/MakeMap'>MakeMap</Link> <br/>
	<Link to='/myScene'>myScene</Link><br/>
	</div>
)

const App =() =>  (
	<Router>
	<div>
		<Route path="/" children={Header}/>
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/bubbleChart" component={BubbleChart}/>
		<Route path="/SimpleLineChart" component={SimpleLineChart}/>
		<Route path="/SimpleTreemap" component={SimpleTreemap}/>
		<Route path="/MakeMap" component={MakeMap}/>
		<Route path="/myScene" component={myScene}/>
		</div>
	</Router>
		
);

export default App;
