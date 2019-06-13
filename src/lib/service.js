export const getTodo=() =>{
	console.log('gettodo');
	return fetch('http://localhost:8080/userBadges').then(res=>res.json());
}
//export const fetchResults=() =>{
	//var header = new Headers();
	//header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	//console.log('fetchResults');
	//return fetch('https://d4umnode.hannit.de/events?location=9.59969,52.42556-9.82954,52.33702&since=2017-12-05T19:30:00&until=2017-12-05T19:30:00&type=null',{
		//header:header,
		//mode:'cors',
		//credentials:'include'
	//});
//}
export const fetchResults=(until) =>{
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	console.log('fetchResults');
	console.log(until);
	var since = new Date(2017,10,12).toISOString();
	let url = 'https://d4umnode.hannit.de/events?location=' + '9.448464,52636607-11.163406,52.176500' + '&since='+since +'&until=' + until +'&type=null'
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
//'2017-12-05T19:30:00'
export const getEvents = (since,until) => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	console.log('fetchResults');
	var since = new Date(2017,10,12).toISOString();
	var until = new Date().toISOString();
	debugger;
	let url = 'https://d4umnode.hannit.de/test?location=' + '9.448464,52636607-11.163406,52.176500' + '&since='+ encodeURIComponent(since) + '&until=' + until + '&type=null'
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getTraffic = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	console.log('fetchResults');
	let url = 'https://d4umnode.hannit.de/traffic';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getRoadwork = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	console.log('fetchResults');
	let url = 'https://d4umnode.hannit.de/roadwork';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getMotorway = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/motorway';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getMotorwayLink = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/motorway_link';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getPrimary = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/primary';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getPrimaryLink = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/primary_link';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getSecondary = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/secondary';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getSecondaryLink = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/secondary_link';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getTertiary = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/tertiary';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getTertiaryLink = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/tertiary_link';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getTrunk = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/trunk';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
export const getTrunkLink = () => {
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	let url = 'https://d4umnode.hannit.de/trunk_link';
	return fetch(url,{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
