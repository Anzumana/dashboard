const initialState = {
	city:'----',
	cities : [
		{
			text: 'Hannover',
			value: 'hannover',
			location:'long:lat',
			viewport:{
				latitude: 52.376712,
				longitude: 9.754260,
				zoom: 9,
				pitch: 58.07993019329368,
				bearing: 10.55792307692307,
				transitionDuration:3000
			}
		},
		{
			text: 'Braunschweig',
			value: 'braunschweig',
			location:'long:lat',
			viewport:{
				latitude: 52.275471,
				longitude: 10.524445,
				zoom: 9,
				pitch: 58.07,
				bearing: 10.5579
			}
		},
		{
			text: 'Wolfsburg',
			value: 'wolfsburg',
			location:'long:lat',
			viewport:{
				latitude: 52.413830,
				longitude: 10.773462,
				zoom: 9,
				pitch: 58.59013474066599,
				bearing: -49.63659663812949
			}
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
