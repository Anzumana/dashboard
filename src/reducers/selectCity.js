const initialState = {
	city:'----',
	cities : [
		{
			text: 'Hannover',
			value: 'hannover',
			location:'9.548431,52.470767-9.973886,52.296619',
			viewport:{
				latitude: 52.376712,
				longitude: 9.754260,
				zoom: 11,
				pitch: 0,
				bearing: 0,
				transitionDuration:3000
			}
		},
		{
			text: 'Braunschweig',
			value: 'braunschweig',
			location:'10.355531,52.361515-10.727006,52.152200',
			viewport:{
				latitude: 52.275471,
				longitude: 10.524445,
				zoom: 9,
				pitch: 58.07,
				bearing: 10.5579,
				transitionDuration:3000
		}
		},
		{
			text: 'Wolfsburg',
			value: 'wolfsburg',
			location:'10.611414,52.489153-10.967783,52.291364',
			viewport:{
				latitude: 52.413830,
				longitude: 10.773462,
				zoom: 9,
				pitch: 58.59013474066599,
				bearing: -49.63659663812949,
				transitionDuration:3000
			}
		},
		{
			text: 'Raodwork A 39',
			value: 'roadwork-0',
			location:'9.548431,52.470767-9.973886,52.296619',
			viewport:{
				latitude: 52.423048,
				longitude: 10.737844,
				zoom: 13,
				pitch: 54,
				bearing: 4.74,
				transitionDuration:3000
			}
		},
		{
			text: 'Traffic Warning Sandkamp',
			value: 'roadwork-1',
			location:'8.611414,52.489153-10.967783,52.291364',
			viewport:{
				latitude: 52.428780,
				longitude: 10.750485,
				zoom: 13,
				pitch: 56,
				bearing: 4.74,
				transitionDuration:3000
			}
		},
		{
			text: 'Traffic Warning Cremlingen - Scheppau',
			value: 'roadwork-2',
			location:'8.611414,52.489153-10.967783,52.291364',
			viewport:{
				latitude: 52.281313,
				longitude: 10.710486,
				zoom: 13,
				pitch: 54,
				bearing: 4.74,
				transitionDuration:3000
			}
		},
		
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
