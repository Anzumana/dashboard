const initialState = {
	city:'----',
	cities : [
		{
			text: 'Hannover',
			value: 'hannover',
			location:'long:lat'
		},
		{
			text: 'Wolfsburg',
			value: 'wolfsburg',
			location:'long:lat'
		},
		{
			text: 'Braunschweig',
			value: 'braunschweig',
			location:'long:lat'
		}
	]
}
export default (state = initialState, action) =>{
	switch(action.type){

		case 'SELECT_CITY':
			return Object.assign({}, state, {
				city: action.payload
			});

		default:
			return state;
			
	}
}
