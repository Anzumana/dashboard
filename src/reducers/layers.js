const initalState= {
	activeOptions:{
	},
	mapOptions:{
		'streets': { id: 'streets' , path: 'Take out the garbage' },
		'outdoors': { id: 'outdoors' , path: 'Watch my favorite show' },
		'dark': { id: 'dark' , path: 'Take out the garbage' },
		'light': { id: 'light' , path: 'Charge my phone' },
		'satelliteStreets': { id: 'satelliteStreets' , path: 'Cook dinner' },
		'satelliteStreets': { id: 'satelliteStreets', path: 'test path' },
		'navigationPreviewDay': { id: 'navigationPreviewDay', path: 'test path' },
		'navigationPreviewNight': { id: 'navigationPreviewNight', path: 'test path' },
		'navigationGuidanceDay': { id: 'navigationGuidanceDay', path: 'test path' },
		'navigationGuidanceNight': { id: 'navigationGuidanceNight', path: 'test path' },
	},
	dataOptions:{
		 'affected': { id: 'affected' , path: 'Take out the garbage' },
		 'typicall': { id: 'typicall' , path: 'Take out the garbage' },
	},
	columns:{
		'activeOptions': {
			id: 'activeOptions',
			title: 'Map Options',
			taskIds: [] 
		},
		'mapOptions': {
			id: 'mapOptions',
			title: 'Data Options',
			taskIds: [
				"streets",
				"outdoors",
				"light",
				"dark",
				"satellite",
				"satelliteStreets",
				"navigationPreviewDay",
				"navigationPreviewNight",
				"navigationGuidanceDay",
				"navigationGuidanceNight",
			]
		},
		'dataOptions': {
			id: 'dataOptions',
			title: 'Data Options',
			taskIds: ['typicallyAffectedSubgraph','affectedSubgraph'] 
		}
	},
	columnOrder: ['activeOptions','mapOptions','dataOptions']
};

export default function(state = initalState , action){
	switch(action.type){
		case 'REORDER':
			return action.payload;
		default:
			return state;
	}
};
