const initialState = {
    id: 282,
    name: 'Wer der Herde folgt, sieht nur Ärsche',
    place: 'Theater am Aegi',
    start: '2017-11-12T00:00:00.000+01',
    category: 'other',
    coordinates: '9.74318436360949,52.3676906606257',
    capacity: 1100,
    impact: 1.81962033043638,
    geometrie: []
};
export default (state = initialState, action) =>{
	switch(action.type){

		case 'SELECT_EVENT':
			return Object.assign({},  action.payload );

		case 'UNSELECT_EVENT':
			return initialState;
		default:
			return state;
			
	}
}
