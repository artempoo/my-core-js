Array.prototype.myReduce = function(callback, initialValue) {
	//Проверка, что callback - функция
	if (typeof callback !== "function") {
		throw new TypeError("callback must be a function");
	}
	const arr = this;

	if (arr == null) {
		throw new TypeError("Array is null or not defined");
	}

	const len = arr.length >>> 0;

	let acc, startIndex;

	if (initialValue === undefined) {
		if (len === 0) throw new TypeError("Array is empty");
		acc = arr[0];
		startIndex = 1;
	} else {
		acc = initialValue;
		startIndex = 0;
	}

	for (let i = startIndex; i < len; i++) {
		if (i in arr) {
			acc = callback(acc, arr[i], i, arr);
		}
	}

	return acc;
};
