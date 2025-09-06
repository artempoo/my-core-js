Array.prototype.myFind = function(callback) {
	if (typeof callback !== "function") {
		throw new TypeError("is not a function");
	}
	const array = this;
	const len = array.length >>> 0;

	let result;

	for (let i = 0; i < len; i++) {
		if (callback(array[i], i, array)) {
			result = array[i];
			break;
		}
	}

	return result;
};
