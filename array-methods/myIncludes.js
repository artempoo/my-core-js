Array.prototype.myIncludes = function(searchElement) {
	const array = this;
	const len = array.length >>> 0;

	for (let i = 0; i < len; i++) {
		if (array[i] === searchElement || (isNaN(array[i]) && isNaN(searchElement)))
			return true;
	}

	return false;
};
