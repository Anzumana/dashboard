// libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
// Styling
import './App.css';
// Services
import {
  getTodo, fetchResults, getTraffic, getEvents, getRoadwork, getMotorway, getMotorwayLink, getPrimary, getSecondary, getTertiary, getTrunk, getTrunkLink, getPrimaryLink, getSecondaryLink, getTertiaryLink,
} from './lib/service';
// Component
import Play from './components/Play';
import MakeMap from './components/Map.js';
import myScene from './components/Scene';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Statistic,
} from 'semantic-ui-react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import SideOverlay from './components/SideOverlay.js';
import D4UMMAP from './D4UMMAP.js';
import Scatterplot from './components/Scatterplot.js';
import SelectCity from './components/SelectCity.js';
import About from './components/About';
import BubbleChart from './components/BubbleChart';
import SimpleLineChart from './components/SimpleLineChart';
import SimpleTreemap from './components/SimpleTreemap';
import { DragDropContext } from 'react-beautiful-dnd';

class BadgesStatistic extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Segment inverted>
        <Statistic onClick={this.test} color="red" inverted>
          <Statistic.Value>27</Statistic.Value>
          <Statistic.Label>WeekendHero</Statistic.Label>
        </Statistic>
        <Statistic onClick={this.show2} color="orange" inverted>
          <Statistic.Value>8'</Statistic.Value>
          <Statistic.Label>Student</Statistic.Label>
        </Statistic>
        <Statistic color="yellow" inverted>
          <Statistic.Value>28</Statistic.Value>
          <Statistic.Label>Guide</Statistic.Label>
        </Statistic>
        <Statistic color="olive" inverted>
          <Statistic.Value>7'</Statistic.Value>
          <Statistic.Label>Newbie</Statistic.Label>
        </Statistic>
        <Statistic color="green" inverted>
          <Statistic.Value>14</Statistic.Value>
          <Statistic.Label>Pupile</Statistic.Label>
        </Statistic>
        <Statistic color="teal" inverted>
          <Statistic.Value>82</Statistic.Value>
          <Statistic.Label>SeriousBusiness</Statistic.Label>
        </Statistic>
        <Statistic color="blue" inverted>
          <Statistic.Value>1'</Statistic.Value>
          <Statistic.Label>FeedbackHero</Statistic.Label>
        </Statistic>
        <Statistic color="violet" inverted>
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>Timetraveler</Statistic.Label>
        </Statistic>
        <Statistic color="purple" inverted>
          <Statistic.Value>25</Statistic.Value>
          <Statistic.Label>purple</Statistic.Label>
        </Statistic>
        <Statistic color="pink" inverted>
          <Statistic.Value>15</Statistic.Value>
          <Statistic.Label>pink</Statistic.Label>
        </Statistic>
        <Statistic color="brown" inverted>
          <Statistic.Value>36</Statistic.Value>
          <Statistic.Label>brown</Statistic.Label>
        </Statistic>
        <Statistic color="grey" inverted>
          <Statistic.Value>49</Statistic.Value>
          <Statistic.Label>grey</Statistic.Label>
        </Statistic>
      </Segment>
    );
  }
}
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      d: ['sdfsdf', 'sdfsdf'],
    };
  }

  componentWillMount() {
    this.setState({ m: 2 });
    getTodo().then((res) => this.setState({ d: res }));
    this.fetchTest = this.fetchTest.bind(this);
  }

  fetchTest() {
    fetchResults().then((res) => {
      const b = res.json().then((data) => { console.log(data); });
    })
      .catch((error) => console.log('Error:', error));
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchTest}>some text on my button </button>
			some sample text
        {Object.entries(this.state.d).map((item) => (
          <h4>
            {item}
            {' '}
sdfsdf
            {' '}
          </h4>
        ))}
				html
      </div>
    );
  }
}
class Guage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="guage" className="bg-light-blue">
        <p className="white">
					Online / Users
        </p>
        <Progress
          type="circle"
          percent={Math.floor(this.props.value / this.props.maxValue * 100)}
        />
      </div>
    );
  }
}
class Greeting extends React.Component {
  render() {
    return (
      <div className="Greeting">
        <h1 className="Greeting__header"> Data4UrbanMobility</h1>
        <p className="Greeting__subheader">Datenbasierte Mobilitätsdienstleistungen für die Stadt der Zukunft</p>
      </div>
    );
  }
}
class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '----',
      value: 23,
			 cities: [
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
				 },
				 {
					 text: 'Bielefeld',
					 value: 'bielefeld',
				 },
      ],
    };
    this.update = this.update.bind(this);
    this.test = this.test.bind(this);
    this.switchCity = this.switchCity.bind(this);
  }

  update(e) {
    this.setState({ currentEvent: e.type });
  }

  test() {
    const incrementValue = this.state.value + 1;
    this.setState({ value: incrementValue });
  }

  switchCity(event, data) {
    console.log('SWITCH CITYYYYYY ');
    console.log(event);
    console.log(data);
    this.setState({ city: data.value });
    // fetch api for selected region
  }

  render() {
    return (
      <div>
        <Test />
        <Greeting />
        <BadgesStatistic />
        <Guage value={this.state.value} maxValue="100" />
        <Guage value="61" maxValue="100" />
        <Guage value="61" maxValue="100" />
        <div className="f3 serif b dark-blue b--solid br--top br2 dim"> home component </div>
        <Link to="/myScene">UserMovement</Link>
        <br />
        <Link to="/SimpleLineChart">LineChart</Link>
        <br />
        <Link to="/bubbleChart">BubbleChart</Link>
        <br />
        <Link to="/SimpleTreemap">SimpleTreemap</Link>
        <br />
        <Link to="/MakeMap">MakeMap</Link>
        <br />
        <Link to="/myScene">myScene</Link>
        <br />
      </div>
    );
  }
}
// class DashboardWithSidebar extends Component {
// constructor(){
// super();
// this.state = {
// visible: false
// }
// this.toggleVisibility = this.toggleVisibility.bind(this);
// }
// toggleVisibility() {
// this.setState({ visible: !this.state.visible })
// }

// render() {
// const { visible} = this.state
// const { city,cities,viewport, changeViewport, changeEventData, selectEvent, filter, changeFilter} = this.props;
// const createD4UMMAP = (props) => {
// return (
// <D4UMMAP
// viewport= {viewport}
// changeViewport ={changeViewport}
// selectEvent = {selectEvent}
// filter = { filter }
// />
// );
// }
// return (
// <div id="d4um-container">
// {cities[0].location}
// {city}
// {this.props.city}
// <SelectCity
// changeCity ={this.props.changeCity}
// cities= {this.props.cities}
// changeViewport ={changeViewport}
// />
// <Router>
// <div style={{height:  +100 +'vh'}}>
// <Button onClick={this.toggleVisibility}>
// <Icon name='align justify' size="large" />
// </Button>
// <Sidebar.Pushable as={Segment}>
// <Sidebar as={Menu} animation='overlay' direction='left' visible={visible} icon='labeled'  vertical inverted>
// <Menu.Item name='home'>
// <Icon name='cube' />
// <Link to='/'>Dashboard
// </Link>
// </Menu.Item>
// <Menu.Item name='barchart'>
// <Icon name='bar chart' />
// <Link to='/SimpleTreemap'>Treemap</Link><br/>
// </Menu.Item>
// <Menu.Item name='camera'>
// <Icon name='line chart' />
// <Link to='/SimpleLineChart'>LineChart</Link> <br/>
// </Menu.Item>
// <Menu.Item name='camera'>
// <Icon name='calendar' />
// <Link to='/bubbleChart'>BubbleChart</Link> <br/>
// </Menu.Item>
// <Menu.Item name='globe'>
// <Icon name='globe' />
// <Link to='/MakeMap'>Globe</Link> <br/>
// </Menu.Item>
// <Menu.Item name='map'>
// <Icon name='map' />
// <Link to='/myScene'>Map</Link><br/>
// </Menu.Item>
// </Sidebar>
// <Sidebar.Pusher>
// <Segment basic>
// <Route exact path="/events" component={SelectCity}/>
// <Route exact path="/events" component={SideOverlay}/>
// <Route exact path="/events" render={createD4UMMAP}/>
// <Route exact path="/events" component={Scatterplot}/>
// <Route exact path="/" component={Home}/>
// <Route path="/about" component={About}/>
// <Route path="/bubbleChart" component={BubbleChart}/>
// <Route path="/SimpleLineChart" component={SimpleLineChart}/>
// <Route path="/SimpleTreemap" component={SimpleTreemap}/>
// <Route path="/MakeMap" component={MakeMap}/>
// <Route path="/myScene" component={myScene}/>
// </Segment>
// </Sidebar.Pusher>
// </Sidebar.Pushable>
// </div>
// </Router>
// </div>
// )
// }
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.test = this.test.bind(this);
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId
			&& destination.index === source.index
    ) {
      return;
    }


    console.log(this.props);
    const start = this.props.layers.columns[source.droppableId];
    const finish = this.props.layers.columns[destination.droppableId];
    // move items inside of a columns
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.props.layers,
        columns: {
          ...this.props.layers.columns,
          [newColumn.id]: newColumn,
        },
      };
      store.dispatch({ type: 'REORDER', payload: newState });
      console.log('state', newState);
      return;
    }
    // move items between columns
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.props.layers,
      columns: {
        ...this.props.layers.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    // if source from map options and target active otions
    console.log(newState);
    if (destination.droppableId === 'activeOptions' && source.droppableId === 'mapOptions') {
      newState.columns.activeOptions.taskIds.forEach((element, index) => {
        console.log(element);
        if (newState.tasks[element].type === 'mapOptions' && element !== draggableId) {
          const removedItem = 	newState.columns.activeOptions.taskIds.splice(index, 1)[0];
          newState.columns.mapOptions.taskIds.push(removedItem);
        }
      });
    }
    store.dispatch({ type: 'REORDER', payload: newState });
    this.test(result.draggableId);

    console.log('onDragEnd', result);
  }

  test(value) {
    switch (value) {
      case 'typicallyAffectedSubgraph':
        store.dispatch({
          type: '[LAYER]:typically_affected_subgraph',
        });
        break;
      case 'affectedSubgraph':
        store.dispatch({
          type: '[LAYER]:affected_subgraph',
        });
        break;
      case 'none':
        store.dispatch({
          type: '[LAYER]:none',
        });
        break;
      case	'streets':
        store.dispatch({ type: '[mapStyle] street' });
        break;
      case 'outdoors':
        store.dispatch({ type: '[mapStyle] outdoors' });
        break;
      case 'light':
        store.dispatch({ type: '[mapStyle] light' });
        break;
      case 'dark':
        store.dispatch({ type: '[mapStyle] dark' });
        break;
      case 'satellite':
        store.dispatch({ type: '[mapStyle] satellite' });
        break;
      case 'satelliteStreets':
        store.dispatch({ type: '[mapStyle] satelliteStreets' });
        break;
      case 'navigationPreviewDay':
        store.dispatch({ type: '[mapStyle] navigationPreviewDay' });
        break;
      case 'navigationPreviewNight':
        store.dispatch({ type: '[mapStyle] navigationPreviewNight' });
        break;
      case 'navigationGuidanceDay':
        store.dispatch({ type: '[mapStyle] navigationPreviewNight' });
        break;
      case 'navigationGuidanceNight':
        store.dispatch({ type: '[mapStyle] navigationGuidanceNight' });
        break;
      default:
        this.setState({
          mapStyle: `mapbox://styles/${value}`,
        });
    }
  }

  onDragStart(result) {
    store.dispatch({ type: 'SELECT_EVENT', payload: result });
    if (result.draggableId === 'events') {
      getEvents().then((res) => {
        res.json().then((json) => {
          store.dispatch({ type: 'SET_EVENTDATA', payload: json });
        });
      });
    }
    if (result.draggableId === 'currentSpeeds') {
      getPrimary().then((res) => {
        res.json().then((json) => {
          store.dispatch({ type: '[PRIMARY]:SET', payload: json });
        });
      });
    }
    console.log(result);
  }

  componentDidMount() {
    getRoadwork().then((res) => {
      res.json().then((json) => {
        store.dispatch({ type: '[ROADWORK]:SET', payload: json });
      });
    });
    // getTraffic().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[TRAFFIC]:SET',payload:json});
    // });
    // }
    // );
    // getSecondary().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[SECONDARY]:SET',payload:json});
    // });
    // }
    // );
    // //getTertiary().then((res) =>{
    // //res.json().then((json) => {
    // //store.dispatch({type: '[TERTIARY]:SET',payload:json});
    // //});
    // //}
    // //);
    // //getTrunk().then((res) =>{
    // //res.json().then((json) => {
    // //store.dispatch({type: '[TRUNK]:SET',payload:json});
    // //});
    // //}
    // //);
    // getMotorway().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[MOTORWAY]:SET',payload:json});
    // });
    // }
    // );
    // getPrimaryLink().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[PRIMARY_LINK]:SET',payload:json});
    // });
    // }
    // );
    // getSecondaryLink().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[SECONDARY_LINK]:SET',payload:json});
    // });
    // }
    // );
    // getTertiaryLink().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[TERTIARY_LINK]:SET',payload:json});
    // });
    // }
    // );
    // getTrunkLink().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[TRUNK_LINK]:SET',payload:json});
    // });
    // }
    // );
    // getMotorwayLink().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[MOTORWAY_LINK]:SET',payload:json});
    // });
    // }
    // );
    // //every 5 minutes  = 300000
    // setInterval(() =>{
    // getTraffic().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[TRAFFIC]:SET',payload:json});
    // });
    // }
    // );
    // },300000);
    // setInterval(() =>{
    // getRoadwork().then((res) =>{
    // res.json().then((json) => {
    // store.dispatch({type: '[ROADWORK]:SET',payload:json});
    // });
    // }
    // );
    // },300000);
  }

  render() {
    const {
      city, cities, viewport, changeViewport, changeCity, events, selectEvent, changeSelectedEvent, changeFilter, filter, resetFilter, unselectSelectedEvent,hoverEvent
    } = this.props;
 		const renderD4UMMAP = (props) => (
   <D4UMMAP
     viewport={viewport}
     changeViewport={changeViewport}
     events={events}
     changeSelectedEvent={changeSelectedEvent}
      hoverEvent={hoverEvent}
     filter={filter}
     selectEvent={selectEvent}
   />
    );
    const renderSideOverlay = (props) => (
      <SideOverlay selectEvent={selectEvent} />
    );

    return (
      <div id="d4um-container">
        <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
          <Router>
            <div>
              <Route exact path="/" render={renderD4UMMAP} />
              <Route exact path="/" render={renderSideOverlay} />
            </div>
          </Router>
        </DragDropContext>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeSelectedEvent: (val) => dispatch({ type: 'SELECT_EVENT', payload: val }),
  unselectSelectedEvent: (val) => dispatch({ type: 'UNSELECT_EVENT', payload: val }),
  changeCity: (val) => dispatch({ type: 'SELECT_CITY', payload: val }),
  changeViewport: (val) => dispatch({ type: 'SET_VIEWPORT', payload: val }),
  changeEventData: (val) => dispatch({ type: 'CHANGE_EVENTDATA', payload: 'somevalue' }),
  changeFilter: (val) => dispatch({ type: 'SET_FILTER', payload: val }),
  resetFilter: () => dispatch({ type: 'RESET_FILTER', payload: {} }),
  hoverEvent: (val) => dispatch({ type: 'HOVER_EVENT', payload: val })
});
const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
