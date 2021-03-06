export const getTodo = () => fetch('http://localhost:8080/userBadges').then((res) => res.json());
// export const fetchResults=() =>{
// var header = new Headers();
// header.append('Authorization', 'Basic ' + 'D4UM'+ ':' + 'D4uM$2017' );
// console.log('fetchResults');
// return fetch('https://d4umnode.hannit.de/events?location=9.59969,52.42556-9.82954,52.33702&since=2017-12-05T19:30:00&until=2017-12-05T19:30:00&type=null',{
// header:header,
// mode:'cors',
// credentials:'include'
// });
// }
export const fetchResults = (until) => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const since = new Date(2017, 10, 12).toISOString();
  const url = `${'https://d4umnode.hannit.de/events?location=9.448464,52636607-11.163406,52.176500&since='}${since}&until=${until}&type=null`;
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
// '2017-12-05T19:30:00'
export const getEvents = (since, until) => {
  const header = new Headers();
  const url = 'http://dash-data.l3s.uni-hannover.de/events';
  return fetch(url, {
    header,
    mode: 'cors',
  });
};
export const getStructDep= () => {
  const header = new Headers();
  const url = 'http://dash-data.l3s.uni-hannover.de/structDep';
  return fetch(url, {
    header,
    mode: 'cors',
  });
};
export const getTraffic = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/traffic';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getRoadwork = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/roadwork';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getMotorway = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/motorway';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getMotorwayLink = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/motorway_link';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getPrimary = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/primary';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getPrimaryLink = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/primary_link';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getSecondary = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/secondary';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getSecondaryLink = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/secondary_link';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getTertiary = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/tertiary';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getTertiaryLink = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/tertiary_link';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getTrunk = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/trunk';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
export const getTrunkLink = () => {
  const header = new Headers();
  header.append('Authorization', 'Basic D4UM:D4uM$2017');
  const url = 'https://d4umnode.hannit.de/trunk_link';
  return fetch(url, {
    header,
    mode: 'cors',
    credentials: 'include',
  });
};
