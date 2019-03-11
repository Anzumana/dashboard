const initialState = {
	latitude: 52.413830,
	longitude: 10.773462,
	zoom: 12,
	width:1040 ,
	height:618,
	pitch: 0,
	bearing: 0
};
// values for deck gl testing with their sample data
	//latitude: 37.9360513,
	//longitude: -122.3535851,
//hannover
	//latitude: 52.385932,
	//longitude: 9.739497,
export default function(state=initialState, action){
	switch(action.type){

		case 'SET_VIEWPORT':
			return Object.assign({},action.payload)
		default:
			 return state;
	}
}
