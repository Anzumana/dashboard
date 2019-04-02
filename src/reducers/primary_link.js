const initalState = [ ]
export default function(state = initalState, action){
	switch(action.type){
		case '[PRIMARY_LINK]:SET':
			return action.payload;
		default:
			 return state;
	}
}
