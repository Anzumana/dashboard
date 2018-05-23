export const getTodo=() =>{
	console.log('gettodo');
	return fetch('http://localhost:8080/userBadges').then(res=>res.json());
}
