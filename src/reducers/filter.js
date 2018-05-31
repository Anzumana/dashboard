const initialState={
	since:'',
	until:''
}
export default (state = initialState, action) =>{
	switch(action.type){

		case 'SET_FILTEr':
			return action.payload;

		default:
			return state;
			
	}
}
