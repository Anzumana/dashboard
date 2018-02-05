import React, { Component } from 'react';
import { BrowserRouter  as Router , Route , Link} from 'react-router-dom';
import './App.css';
import About from './components/About';
import BubbleChart from './components/BubbleChart'
import SimpleLineChart from './components/SimpleLineChart'
import SimpleTreemap from './components/SimpleTreemap'
import MakeMap from './components/Map.js'
import myScene  from './components/Scene'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

const myHeader = () => 
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


class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
			const { visible } = this.state
    return (
				<div >
								<Router>
								<div style={{height:  +100 +'vh'}}>
					<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
					<Sidebar.Pushable as={Segment}>
						<Sidebar as={Menu} animation='overlay' direction='right' visible={visible} icon='labeled'  vertical inverted>
							<Menu.Item name='home'>
								<Icon name='cube' />
								<Link to='/'>Dashboard
								</Link>
							</Menu.Item>
							<Menu.Item name='barchart'>
								<Icon name='bar chart' />
								<Link to='/SimpleTreemap'>Treemap</Link><br/>
							</Menu.Item>
							<Menu.Item name='camera'>
								<Icon name='line chart' />
								<Link to='/SimpleLineChart'>LineChart</Link> <br/>
							</Menu.Item>
							<Menu.Item name='camera'>
								<Icon name='calendar' />
								<Link to='/bubbleChart'>BubbleChart</Link> <br/>
							</Menu.Item>
							<Menu.Item name='globe'>
								<Icon name='globe' />
								<Link to='/MakeMap'>Globe</Link> <br/>
							</Menu.Item>
							<Menu.Item name='map'>
								<Icon name='map' />
								<Link to='/myScene'>Map</Link><br/>
							</Menu.Item>
						</Sidebar>
						<Sidebar.Pusher>
							<Segment basic>
									<Route path="/" children={Header}/>
									<Route exact path="/" component={Home}/>
									<Route path="/about" component={About}/>
									<Route path="/bubbleChart" component={BubbleChart}/>
									<Route path="/SimpleLineChart" component={SimpleLineChart}/>
									<Route path="/SimpleTreemap" component={SimpleTreemap}/>
									<Route path="/MakeMap" component={MakeMap}/>
									<Route path="/myScene" component={myScene}/>
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
									</div>
								</Router>
				</div>
    )
  }
}
export default App;
