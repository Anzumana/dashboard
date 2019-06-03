const initalState= "mapbox://styles/mapbox/streets-v10";

export default function(state = initalState , action){
			let value = '';
	switch(action.type){
			case 'typicallyAffectedSubgraph' :
				break;
			case 'affectedSubgraph':
				break;
			case	"[mapStyle] street":
				value = "mapbox/streets-v10";
				return 	"mapbox://styles/" + value
			case "[mapStyle] outdoors":
				value = "mapbox/outdoors-v10";
				return "mapbox://styles/" + value
			case "[mapStyle] light":
				value = "mapbox/light-v9";
				return "mapbox://styles/" + value
			case "[mapStyle] dark":
				value = "mapbox/dark-v9";
				return "mapbox://styles/" + value
			case "[mapStyle] satellite":
				value = "mapbox/satellite-v9";
				return "mapbox://styles/" + value
			case "[mapStyle] satelliteStreets":
				value = "mapbox/satellite-streets-v10";
				return "mapbox://styles/" + value
			case "[mapStyle] navigationPreviewDay":
				value = "mapbox/navigation-preview-day-v4";
				return "mapbox://styles/" + value;
			case "[mapStyle] navigationPreviewNight":
				value = "mapbox/navigation-preview-night-v4";
				return "mapbox://styles/" + value;
			case "[mapStyle] navigationGuidanceDay":
				value = "mapbox/navigation-guidance-day-v4";
				return 'mapbox://styles/' + value
			case "[mapStyle] navigationGuidanceNight":
				value = "mapbox/navigation-guidance-night-v4";
				return "mapbox://styles/" + value;
		default:
			return state;
	}
};
