import {
	convertLineString,
	convertSubgraph 
} from '../lib/utils';

test('convert Linestring  from backend ( affected_subgraph ) to path array for deck gl', () => {
	var testData = "LINESTRING(9.7441138 52.3725554,9.7440523 52.3720947,9.7440011 52.3717967,9.7439862 52.3716662,9.7440009 52.3715866)";
	var testData2 = "LINESTRING(9.8135175 52.3172347,9.8136214 52.31745,9.8146824 52.3179731,9.8149586 52.3180234)"
	expect(convertLineString(testData)).toEqual( [[9.7441138,52.3725554],[9.7440523,52.3720947],[9.7440011,52.3717967],[9.7439862,52.3716662],[9.7440009,52.3715866]]);
});

// we use this second line string in our test for our affected graph conversion 
// so lets make first sure that it converts correctly
test('convert second Linestring  from backend ( affected_subgraph ) to path array for deck gl', () => {
	var testData = "LINESTRING(9.8135175 52.3172347,9.8136214 52.31745,9.8146824 52.3179731,9.8149586 52.3180234)"
	expect(convertLineString(testData)).toEqual( [[9.8135175,52.3172347],[9.8136214,52.31745],[9.8146824,52.3179731],[9.8149586,52.3180234]]);
});

test('convert affected_subgraph  from backend to path array for deck gl', () => {
	var testData = ["LINESTRING(9.7441138 52.3725554,9.7440523 52.3720947,9.7440011 52.3717967,9.7439862 52.3716662,9.7440009 52.3715866)",
		"LINESTRING(9.8135175 52.3172347,9.8136214 52.31745,9.8146824 52.3179731,9.8149586 52.3180234)"];
	expect(convertSubgraph(testData)).toEqual( [
		{'path':[
				[9.7441138,52.3725554],
				[9.7440523,52.3720947],
				[9.7440011,52.3717967],
				[9.7439862,52.3716662],
				[9.7440009,52.3715866]
			]
		},
		{
			'path': [
				[9.8135175,52.3172347],
				[9.8136214,52.31745],
				[9.8146824,52.3179731],
				[9.8149586,52.3180234]
			]
		}
	]);
});
