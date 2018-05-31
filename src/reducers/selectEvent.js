const initialState = {
}
export default (state = initialState, action) =>{
	switch(action.type){

		case 'SELECT_EVENT':
			return Object.assign({},  action.payload );

		default:
			return state;
			
	}
}
