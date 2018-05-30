const initialState = {
	latitude: 52.385932,
	longitude: 9.739497,
	zoom: 7,
	width:1040 ,
	height:618,
	pitch: 0,
	bearing: 0
};
export default function(state=initialState, action){
	switch(action.type){

		case 'SET_VIEWPORT':
			return Object.assign({},action.payload)
		default:
			 return state;
	}
}
			//return {...state,viewport: action.payload}
