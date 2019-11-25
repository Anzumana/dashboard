import reducers from '../reducers/viewport';

test('viewport reducer init', () => {
  const result = reducers(undefined, { type: 'ANYTHING' });
  expect(result).toBeDefined();
});

test('set viewport', () => {
  const startState = {
    latitude: 52.385932,
    longitude: 9.739497,
    zoom: 12,
    width: 1040,
    height: 618,
    pitch: 0,
    bearing: 0,
  };
  const expectedState = {
    latitude: 52.385932,
    longitude: 9.739497,
    zoom: 14,
    width: 1040,
    height: 618,
    pitch: 0,
    bearing: 0,
  };
  const result = reducers(startState,
    {
      type: 'SET_VIEWPORT',
      payload: {
        latitude: 52.385932,
        longitude: 9.739497,
        zoom: 14,
        width: 1040,
        height: 618,
        pitch: 0,
        bearing: 0,
      },
    });
  expect(result).toMatchSnapshot();
});
