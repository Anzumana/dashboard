export const getTodo=() =>{
	console.log('gettodo');
	return fetch('http://localhost:8080/userBadges').then(res=>res.json());
}
export const fetchResults=() =>{
	var header = new Headers();
	header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
	console.log('fetchResults');
	return fetch('https://d4umnode.hannit.de/events?location=9.59969,52.42556-9.82954,52.33702&since=2017-12-05T19:30:00&until=2017-12-05T19:30:00&type=null',{
		header:header,
		mode:'cors',
		credentials:'include'
	});
}
