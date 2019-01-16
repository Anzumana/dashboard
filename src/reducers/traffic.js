const initalState = {
    features: [
      {
        geometry: {
          coordinates: [
            9.7649396,
            52.3428443
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '08.01.2019 09:00:00',
          END: '14.01.2019 23:59:00',
          ID: 'eb9f4131-5fa9-478a-85b2-820e48a85769',
          IMPACT: 'gesperrt, eine örtliche Umleitung ist eingerichtet, ortskundige Autofahrer werden gebeten, das Gebiet weiträumig zu umfahren, Stau zu erwarten',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'B65, B3, B6 Hannover, Südschnellweg, Richtung Sehnde/Peinein Höhe Hildesheimer Straße/Willmerstraßegesperrt, eine örtliche Umleitung ist eingerichtet, ortskundige Autofahrer werden gebeten, das Gebiet weiträumig zu umfahren, Stau zu erwarten, bis 14.01.2019',
          NAME: '',
          REASON: '',
          ROAD: 'Südschnellweg',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'OBSTRUCTION'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.6224,
            52.42107
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '',
          ID: '4590174b-ce1a-462f-a03f-065e1a267df7',
          IMPACT: 'Höchstgeschwindigkeit',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'A2 Hannover Richtung Dortmundzwischen Hannover-Herrenhausen und Wunstorf-KolenfeldHöchstgeschwindigkeit von 120 km/h, Straßenschäden',
          NAME: '',
          REASON: 'Straßenschäden',
          ROAD: 'Wunstorf-Kolenfeld',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'OBSTRUCTION'
        },
        type: 'Feature'
      }
    ],
    type: 'FeatureCollection'
  };
export default function(state = initalState, action){
	switch(action.type){
		case 'TEST':
			return null;
		default:
			 return state;
	}
}
