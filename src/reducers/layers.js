const initalState= {
	tasks:{
		'outdoors': { id: 'outdoors' , type: 'mapOptions' ,path: 'Watch my favorite show' },
		'dark': { id: 'dark' , type: 'mapOptions' ,ppath: 'Take out the garbage' },
		'light': { id: 'light' , type: 'mapOptions' ,ppath: 'Charge my phone' },
		'satelliteStreets': { id: 'satelliteStreets' , type: 'mapOptions' ,ppath: 'Cook dinner' },
		'satelliteStreets': { id: 'satelliteStreets', type: 'mapOptions' ,ppath: 'test path' },
		'navigationPreviewDay': { id: 'navigationPreviewDay', type: 'mapOptions' ,ppath: 'test path' },
		'navigationPreviewNight': { id: 'navigationPreviewNight', type: 'mapOptions' ,ppath: 'test path' },
		'navigationGuidanceDay': { id: 'navigationGuidanceDay',type: 'mapOptions' ,path: 'test path' },
		'navigationGuidanceNight': { id: 'navigationGuidanceNight',type: 'mapOptions' ,path: 'test path' },
		'streets': { id: 'streets' , path: 'Take out the garbage' ,type: 'mapOptions' },
		'affected': { id: 'affected' ,type: 'dataOptions', path: 'Take out the garbage' },
		'typicall': { id: 'typicall' ,type: 'dataOptions', path: 'Take out the garbage' },
		'roadwork': { id: 'roadwork' ,type: 'dataOptions', path: 'Take out the garbage' },
		'trafficWarnings': { id: 'roadwork' ,type: 'dataOptions', path: 'Take out the garbage' },
		'events':{ id: 'futureEvents',type: 'dataOptions' , info: '08/2017-01/2018' },
		'currentSpeeds':{ id: 'currentSpeeds',type: 'dataOptions' , info: '08/2017-01/2018' } 
	},
	columns:{
		'activeOptions': {
			id: 'activeOptions',
			title: 'Map Options',
			taskIds: ['streets'] 
		},
		'mapOptions': {
			id: 'mapOptions',
			title: 'Data Options',
			taskIds: [
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
			taskIds: ['typicallyAffectedSubgraph','affectedSubgraph', 'roadwork','trafficWarnings','events' ,'currentSpeeds' ] 
		}
	},
	columnOrder: ['activeOptions','dataOptions','mapOptions']
};

export default function(state = initalState , action){
	switch(action.type){
		case 'REORDER':
			return action.payload;
		default:
			return state;
	}
};
