Array.prototype.myForEach = function(callback, thisArg) {
	const originArr = this;
	for (let i = 0; i < originArr.length; i++) {
		if (i in originArr) callback.call(thisArg, originArr[i], i, originArr);
	}
};
