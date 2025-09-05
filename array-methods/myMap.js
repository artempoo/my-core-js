Array.prototype.myMap = function(callback, thisArg) {
	const originalArr = this;
	const len = originalArr.length >>> 0;
	const array = new Array(len);
	for (let i = 0; i < len; i++) {
		if (i in originalArr) {
			let resIter = callback.call(thisArg, originalArr[i], i, originalArr);
			array[i] = resIter;
		}
	}
	return array;
};
