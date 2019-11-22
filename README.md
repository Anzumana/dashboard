
http://negomi.github.io/react-burger-menu/
http://recharts.org/#/en-US/
https://react.semantic-ui.com/introduction
https://github.com/aliustaoglu/react-d3-gauge
https://github.com/trendmicro-frontend/react-liquid-gauge
https://reactjs.org/docs/react-without-es6.html

## Submodule
We put the mapbox component into a submodule because we would have to eject create-react-app.
For this reason we will develop the mapbox component as a submodule until its ready

run task 
npm run d4ummaster
or 
npm run d4umstaging 
if you want to deploy the respective website
[jest error fix](https://github.com/expo/expo/issues/2192)


# Snippets
src/index.js
 ```js
init();
setTimeout(() => {
  store.dispatch({
    type: 'SELECT_EVENT',
    payload: {
      capacity: 3500,
      category: 'concert',
      coordinates: '9.2323,52.323',
      geometrie: [],
      id: 103,
      name: 'Beethiven: 9. Sinfonie',
      place: 'Kuppelsaal',
      start: '2017-12-27 20:00:00',
    },
  });
}, 1000);



changeCity={changeCity}
changeViewport = {changeViewport}
changeSelectedEvent = {changeSelectedEvent}
changeFilter = {changeFilter}
resetFilter = {resetFilter}
unselectSelectedEvent = {unselectSelectedEvent}
 ```

 ```js
const init = (val) =>{
const state = store.getState();
fetch('http://localhost:8080/events').then(function(res){
res.json().then(data => {
store.dispatch({type:'SET_EVENTDATA', payload: data});
});
});
init();
fetchResults(new Date().toISOString()).then(res=> {
var b = res.json().then(data => {
data = data.map((element)=> {
element.affected_subgraph= convertSubgraph(element.affected_subgraph);
element.typically_affected_subgraph= convertSubgraph(element.typically_affected_subgraph);
return element;
} );
store.dispatch({type:'SET_EVENTDATA', payload: data});
});
})
.catch(error => console.log('Error:', error));
}



const changeSelectedEvent = val =>
  store.dispatch({type: 'SELECT_EVENT', payload: val});
const unselectSelectedEvent = val => {
  console.log('unselec');
  store.dispatch({type: 'UNSELECT_EVENT', payload: val});
};
const changeCity = val => store.dispatch({type: 'SELECT_CITY', payload: val});
const changeViewport = val =>
  store.dispatch({type: 'SET_VIEWPORT', payload: val});
const changeEventData = val =>
  store.dispatch({type: 'CHANGE_EVENTDATA', payload: 'somevalue'});
const changeFilter = val => store.dispatch({type: 'SET_FILTER', payload: val});
const resetFilter = () => store.dispatch({type: 'RESET_FILTER', payload: {}});
 ```
