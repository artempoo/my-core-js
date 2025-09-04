Array.prototype.myReduce = function(callback, initialValue) {
	const originalArr = this;

	let acc, startIndex;

	if (initialValue === undefined) {
		if (originalArr.length === 0) throw new TypeError("Array is empty");
		acc = originalArr[0];
		startIndex = 1;
	} else {
		acc = initialValue;
		startIndex = 0;
	}

	for (let i = startIndex; i < originalArr.length; i++) {
		acc = callback.call(thisArg, originalArr[i], i, originalArr);
	}

	return acc;
};
