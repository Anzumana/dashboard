//
// format that is being parsed
// "LINESTRING(9.7441138 52.3725554,9.7440523 52.3720947,9.7440011 52.3717967,9.7439862 52.3716662,9.7440009 52.3715866)"
const convertLineString =  (inputString) =>{
	var result;
	var elementsArray = inputString.substring(11,inputString.length - 1).split(',')
			.map(function(element){
			var myArray = element.split(' ');
			myArray[0] = parseFloat(new Number(myArray[0]));
			myArray[1] = parseFloat(new Number(myArray[1]));
			return myArray;
	});
	result = elementsArray;
	return result;
}
const convertSubgraph = (affected_subgraph) => {
	var result=[];
	affected_subgraph = affected_subgraph.map((element)=>
		{
			var myElement = {};
			myElement.path= convertLineString(element);
			result.push(myElement);
		})
	return result;
}
const convertCoordinatesToPath = ( coordinates ) => {
	var result = []
	var result = coordinates.split('|').map(x => {
		var array = x.split(' ')
		var tmp = [];
		tmp.push( Number(array[1]));
		tmp.push(Number(array[0]));
		return tmp;
	});
	result.pop();
	return result;
}
const splitCamelCase = (string) => {
	return string.toString().replace(/([a-z])([A-Z])/g, '$1 $2');
}
export { convertLineString, convertSubgraph , convertCoordinatesToPath, splitCamelCase}
