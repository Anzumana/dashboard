const initalState = false;

export default function(state = initalState , action){
	switch(action.type){
		case 'Fullscreen:on':
			return true;
		case 'Fullscreen:off':
			return false;
		case 'Fullscreen:toggle':
			return !state;
		default:
			return state;
	}
};
