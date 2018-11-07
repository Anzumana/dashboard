import reducers from '../reducers/selectCity';

test('selectCity reducer init', () => {
  const result = reducers(undefined, {type:'ANYTHING'});
	expect(result).toBeDefined();
});

test('set viewport', () => {
	const startState = {
			    city: '----',
				    cities: [
							      {
											        text: 'Hannover',
											        value: 'hannover',
											        location: '9.548431,52.470767-9.973886,52.296619',
											        viewport: {
																          latitude: 52.376712,
																          longitude: 9.75426,
																          zoom: 9,
																          pitch: 58.07993019329368,
																          bearing: 10.55792307692307,
																          transitionDuration: 3000
																        }
											      },
							      {
											        text: 'Braunschweig',
											        value: 'braunschweig',
											        location: '10.355531,52.361515-10.727006,52.152200',
											        viewport: {
																          latitude: 52.275471,
																          longitude: 10.524445,
																          zoom: 9,
																          pitch: 58.07,
																          bearing: 10.5579,
																          transitionDuration: 3000
																        }
											      },
							      {
											        text: 'Wolfsburg',
											        value: 'wolfsburg',
											        location: '10.611414,52.489153-10.967783,52.291364',
											        viewport: {
																          latitude: 52.41383,
																          longitude: 10.773462,
																          zoom: 9,
																          pitch: 58.59013474066599,
																          bearing: -49.63659663812949,
																          transitionDuration: 3000
																        }
											      }
							    ]
			  };
	const expectedState= {
		     city: 'hannover',
			     cities: [
						       {
										         text: 'Hannover',
										         value: 'hannover',
										         location: '9.548431,52.470767-9.973886,52.296619',
										         viewport: {
															           latitude: 52.376712,
															           longitude: 9.75426,
															           zoom: 9,
															           pitch: 58.07993019329368,
															           bearing: 10.55792307692307,
															           transitionDuration: 3000
															         }
										       },
						       {
										         text: 'Braunschweig',
										         value: 'braunschweig',
										         location: '10.355531,52.361515-10.727006,52.152200',
										         viewport: {
															           latitude: 52.275471,
															           longitude: 10.524445,
															           zoom: 9,
															           pitch: 58.07,
															           bearing: 10.5579,
															           transitionDuration: 3000
															         }
										       },
						       {
										         text: 'Wolfsburg',
										         value: 'wolfsburg',
										         location: '10.611414,52.489153-10.967783,52.291364',
										         viewport: {
															           latitude: 52.41383,
															           longitude: 10.773462,
															           zoom: 9,
															           pitch: 58.59013474066599,
															           bearing: -49.63659663812949,
															           transitionDuration: 3000
															         }
										       }
						     ]
		   };
	const result = reducers(startState, 
			{
				type:'SELECT_CITY', 
				payload:'hannover'
				
			});
	expect(result).toEqual(expectedState);
});
