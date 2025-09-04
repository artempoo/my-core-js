Array.prototype.myFilter = function(callback, thisArg) {
	if (typeof callback !== "function") {
		throw new TypeError("is not a function");
	}

	const arr = this;
	if (arr == null) {
		throw new TypeError("arr is null or undefined");
	}

	const len = arr.length >>> 0;

	const result = [];

	for (let i = 0; i < len; i++) {
		let res;
		if (i in arr) {
			res = callback.call(thisArg, arr[i], i, arr);
		}
		if (res) {
			result.push(arr[i]);
		}
	}

	return result;
};
