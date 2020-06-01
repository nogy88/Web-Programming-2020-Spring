function cs142MakeMultiFilter(originalArray) {
	var currentArray = originalArray;
	function arrayFilterer(filterCriteria, callback) {

		if (typeof filterCriteria !== "function") {
			return currentArray;
		}
		currentArray = currentArray.filter(filterCriteria);

		if (typeof callback === "function") {

			callback.call(originalArray, currentArray);
		}
		return arrayFilterer;
	}
	return arrayFilterer;
}




























// cs142MakeMultiFilter(originalArray){
// 	function filterCriteria(currentArray){

// 			if()
// 				return true;
// 			else
// 				return false;
// 		}
// 		function callback(){

// 		}
// 	return function arrayFilterer(filterCriteria(),callback()){
// 		var currentArray=originalArray;

// 	}
// }