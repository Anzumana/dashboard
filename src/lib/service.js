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
	let url = 'https://d4umnode.hannit.de/events?location=' + '9.448464,52636607-11.163406,52.176500' + '&since='+ encodeURIComponent(since) + '&until=' + until + 
	+'&type=null'
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
