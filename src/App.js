// libraries
	import store from './store';
	import React, { Component } from 'react';
	import { BrowserRouter  as Router , Route , Link} from 'react-router-dom';
	import {connect} from 'react-redux';
//Styling
	import './App.css';
// Services
	import {getTodo, fetchResults, getTraffic} from './lib/service'
//Component
	import Play from './components/Play';
	import MakeMap from './components/Map.js';
	import myScene  from './components/Scene';
	import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
	import { Progress } from 'react-sweet-progress';
	import "react-sweet-progress/lib/style.css";
	import { Statistic } from 'semantic-ui-react';
	import SideOverlay from './components/SideOverlay.js';
	import D4UMMAP from './D4UMMAP.js';
	import Scatterplot from './components/Scatterplot.js';
	import SelectCity from './components/SelectCity.js';
	import About from './components/About';
	import BubbleChart from './components/BubbleChart';
	import SimpleLineChart from './components/SimpleLineChart';
	import SimpleTreemap from './components/SimpleTreemap';

class BadgesStatistic extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
			<Segment inverted>
				<Statistic onClick={this.test} color='red' inverted>
					<Statistic.Value>27</Statistic.Value>
					<Statistic.Label>WeekendHero</Statistic.Label>
				</Statistic>
				<Statistic onClick={this.show2}color='orange' inverted>
					<Statistic.Value>8'</Statistic.Value>
					<Statistic.Label>Student</Statistic.Label>
				</Statistic>
				<Statistic color='yellow' inverted>
					<Statistic.Value>28</Statistic.Value>
					<Statistic.Label>Guide</Statistic.Label>
				</Statistic>
				<Statistic color='olive' inverted>
					<Statistic.Value>7'</Statistic.Value>
					<Statistic.Label>Newbie</Statistic.Label>
				</Statistic>
				<Statistic color='green' inverted>
					<Statistic.Value>14</Statistic.Value>
					<Statistic.Label>Pupile</Statistic.Label>
				</Statistic>
				<Statistic color='teal' inverted>
					<Statistic.Value>82</Statistic.Value>
					<Statistic.Label>SeriousBusiness</Statistic.Label>
				</Statistic>
				<Statistic color='blue' inverted>
					<Statistic.Value>1'</Statistic.Value>
					<Statistic.Label>FeedbackHero</Statistic.Label>
				</Statistic>
				<Statistic color='violet' inverted>
					<Statistic.Value>22</Statistic.Value>
					<Statistic.Label>Timetraveler</Statistic.Label>
				</Statistic>
				<Statistic color='purple' inverted>
					<Statistic.Value>25</Statistic.Value>
					<Statistic.Label>purple</Statistic.Label>
				</Statistic>
				<Statistic color='pink' inverted>
					<Statistic.Value>15</Statistic.Value>
					<Statistic.Label>pink</Statistic.Label>
				</Statistic>
				<Statistic color='brown' inverted>
					<Statistic.Value>36</Statistic.Value>
					<Statistic.Label>brown</Statistic.Label>
				</Statistic>
				<Statistic color='grey' inverted>
					<Statistic.Value>49</Statistic.Value>
					<Statistic.Label>grey</Statistic.Label>
				</Statistic>
			</Segment>
		)
	}
}
class Test extends React.Component {
	constructor(){
		super();
		this.state={ val:0,
		d:['sdfsdf','sdfsdf']};
	}
	componentWillMount(){
		this.setState({m:2});
		getTodo().then((res)=> this.setState({d:res}));
		this.fetchTest= this.fetchTest.bind(this);

	}	
	fetchTest(){
		fetchResults().then(res=> {
			var b = res.json().then(data => { console.log(data)});
		})
		.catch(error => console.log('Error:', error));
	}
	render(){
		return (
			<div>
			<button onClick={this.fetchTest}>some text on my button </button>
			some sample text
			{Object.entries(this.state.d).map((item) => <h4> {item} sdfsdf </h4> )}
				html
			</div>
		)
	}
}
class Guage extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
				<div id = "guage" className= "bg-light-blue"> 
				<p className="white" >
					Online / Users
				</p>
					<Progress
						type="circle"
						percent={Math.floor(this.props.value/this.props.maxValue* 100)}
					/>
				</div>
		)
	}
}
class Greeting extends React.Component {
	render(){
		return (
			<div className="Greeting">
				<h1 className="Greeting__header"> Data4UrbanMobility</h1>
				<p className="Greeting__subheader">Datenbasierte Mobilitätsdienstleistungen für die Stadt der Zukunft</p>
			</div>
		)
	}
}
class  Home extends Component {
	constructor(){
		super();
		this.state = {
			currentEvent : '----',
			value: 23,
			 cities : [
				 {
					 text: 'Hannover',
					 value: 'hannover',
				 },
				 {
					 text: 'Wolfsburg',
					 value: 'wolfsburg',
				 },
				 {
					 text: 'Braunschweig',
					 value: 'braunschweig',
				 }
			]
		};
		this.update = this.update.bind(this);
		this.test = this.test.bind(this);
		this.switchCity= this.switchCity.bind(this);
	}
	update( e ) {
		this.setState({currentEvent: e.type})
	}
	test(){
		var incrementValue = this.state.value  + 1
		this.setState({value: incrementValue})
	}
	switchCity(event,data){
		this.setState({city:data.value});
		//fetch api for selected region 
	}
	render() {
		return (
			<div>
			<Test/>
			<Greeting/>
				<BadgesStatistic/>
					<Guage value={this.state.value} maxValue= "100"/>
					<Guage value="61" maxValue= "100"/>
					<Guage value="61" maxValue= "100"/>
					<div className="f3 serif b dark-blue b--solid br--top br2 dim"> home component </div>
					<Link to='/myScene'>UserMovement</Link><br/>
					<Link to='/SimpleLineChart'>LineChart</Link> <br/>
					<Link to='/bubbleChart'>BubbleChart</Link> <br/>
					<Link to='/SimpleTreemap'>SimpleTreemap</Link><br/>
					<Link to='/MakeMap'>MakeMap</Link> <br/>
					<Link to='/myScene'>myScene</Link><br/>
				</div>
			)
	}
}
//class DashboardWithSidebar extends Component {
	//constructor(){
		//super();
		//this.state = { 
			//visible: false 
		//}
		//this.toggleVisibility = this.toggleVisibility.bind(this);
	//}
	//toggleVisibility() {
		//this.setState({ visible: !this.state.visible })
	//}

	//render() {
		//const { visible} = this.state
		//const { city,cities,viewport, changeViewport, changeEventData, selectEvent, filter, changeFilter} = this.props; 
     //const createD4UMMAP = (props) => {
      //return (
        //<D4UMMAP 
					//viewport= {viewport}
					//changeViewport ={changeViewport}
					//selectEvent = {selectEvent}
					//filter = { filter }
        ///>
      //);
    //}
		//return (
			//<div id="d4um-container">
			//{cities[0].location}
			//{city}
			//{this.props.city}
			//<SelectCity 
				//changeCity ={this.props.changeCity} 
				//cities= {this.props.cities} 
				//changeViewport ={changeViewport}
			///>
				//<Router>
					//<div style={{height:  +100 +'vh'}}>
						//<Button onClick={this.toggleVisibility}>
							//<Icon name='align justify' size="large" />
						//</Button>
							//<Sidebar.Pushable as={Segment}>
							//<Sidebar as={Menu} animation='overlay' direction='left' visible={visible} icon='labeled'  vertical inverted>
								//<Menu.Item name='home'>
									//<Icon name='cube' />
									//<Link to='/'>Dashboard
									//</Link>
								//</Menu.Item>
								//<Menu.Item name='barchart'>
									//<Icon name='bar chart' />
									//<Link to='/SimpleTreemap'>Treemap</Link><br/>
								//</Menu.Item>
								//<Menu.Item name='camera'>
									//<Icon name='line chart' />
									//<Link to='/SimpleLineChart'>LineChart</Link> <br/>
								//</Menu.Item>
								//<Menu.Item name='camera'>
									//<Icon name='calendar' />
									//<Link to='/bubbleChart'>BubbleChart</Link> <br/>
								//</Menu.Item>
								//<Menu.Item name='globe'>
									//<Icon name='globe' />
									//<Link to='/MakeMap'>Globe</Link> <br/>
								//</Menu.Item>
								//<Menu.Item name='map'>
									//<Icon name='map' />
									//<Link to='/myScene'>Map</Link><br/>
								//</Menu.Item>
							//</Sidebar>
							//<Sidebar.Pusher>
								//<Segment basic>
									//<Route exact path="/events" component={SelectCity}/>
									//<Route exact path="/events" component={SideOverlay}/>
									//<Route exact path="/events" render={createD4UMMAP}/>
									//<Route exact path="/events" component={Scatterplot}/>
									//<Route exact path="/" component={Home}/>
									//<Route path="/about" component={About}/>
									//<Route path="/bubbleChart" component={BubbleChart}/>
									//<Route path="/SimpleLineChart" component={SimpleLineChart}/>
									//<Route path="/SimpleTreemap" component={SimpleTreemap}/>
									//<Route path="/MakeMap" component={MakeMap}/>
									//<Route path="/myScene" component={myScene}/>
								//</Segment>
							//</Sidebar.Pusher>
						//</Sidebar.Pushable>
					//</div>
				//</Router>
			//</div>
			//)
	//}
//}
class App extends Component {
	constructor(){
		super();
	}
	componentWillMount(){
		fetch('http://d4umnode.hannit.de/events').then(function(res){
			res.json().then(data => {
				store.dispatch({type:'SET_EVENTDATA', payload: data});
			});
		});
		getTraffic().then(function(res){
			console.log('get traffic');
			console.log('getTraffic inside app component'+ res);
			console.log(res);
		}
		);
		
	}
	render() {
		const { city,cities,viewport, changeViewport , changeCity, events, selectEvent, changeSelectedEvent , changeFilter, filter, resetFilter, unselectSelectedEvent} = this.props; 
 		const renderD4UMMAP = (props) => {
      return (
        <D4UMMAP 
					viewport= {viewport}
					changeViewport ={changeViewport}
					events= {events}
					changeSelectedEvent = {changeSelectedEvent}
					filter = {filter}
					selectEvent={selectEvent}
        />
      );
    }
 		const renderSelectCity = (props) => {
      return (
				<SelectCity
				changeCity ={changeCity} 
				cities= {cities} 
				changeViewport ={changeViewport}
				/>
      );
    }
		const renderSideOverlay = (props) => {
			return (
				<SideOverlay selectEvent={selectEvent}/>
			);
		}
		const renderPlay = (props) => {
			return ( 
							<Play 
								changeFilter = {changeFilter} 
								resetFilter = { resetFilter}
								filter= {filter}
								unselectSelectedEvent = {unselectSelectedEvent}
							/>
						 );
		}
		
		return (
			<div id="d4um-container">
				<Router>
					<div>
						<Route exact path="/" render={renderSideOverlay}/>
						<Route exact path="/" render={renderSelectCity}/>
						<Route exact path="/" render={renderPlay}/>
						<Route exact path="/" render={renderD4UMMAP}/>
					</div>
				</Router>
			</div>
			)
	}
}
const mapDispatchToProps = (dispatch) =>{
	return {
		changeSelectedEvent : (val) => dispatch({type:'SELECT_EVENT', payload:val}),
		unselectSelectedEvent : (val) => dispatch({type:'UNSELECT_EVENT', payload:val}),
		changeCity : (val) => dispatch({type:'SELECT_CITY', payload:val}),
		changeViewport : (val) => dispatch({type:'SET_VIEWPORT', payload:val}),
		changeEventData : (val) => dispatch({type:'CHANGE_EVENTDATA', payload:'somevalue'}),
		changeFilter : (val) => dispatch({type:'SET_FILTER', payload:val}),
		resetFilter : () => dispatch({type:'RESET_FILTER',payload: {}})
	}
};
const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp
