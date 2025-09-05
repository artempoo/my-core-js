Array.prototype.mySlice = function(start, end) {
	const originalArr = this;
	const result = [];

	const len = originalArr.length;

	let startIndex = start || 0;
	let endIndex = end || len;

	if (startIndex < 0) {
		startIndex = Math.max(startIndex + len, 0);
	}
	if (endIndex < 0) {
		endIndex = Math.max(end + len, 0);
	}

	for (let i = startIndex; i < endIndex; i++) {
		result.push(originalArr[i]);
	}
	return result;
};

const res = ['к', 'у', 'к', 'у', 'c', 'и'].mySlice(4, 6);
console.log(res);
