Array.prototype.mySplice = function(start, deleteCount, ...items) {
	const originalArr = this;
	const result = [];

	const itemsLen = items.length >>> 0;

	const originLength = itemsLen > 0 ? originalArr.length + items.length : originalArr.length;

	//собираем элементы в результирующий массив
	for (let i = start, j = 0; j < deleteCount; j++, i++) {
		result.push(originalArr[i]);
	}

	//удаляем элементы из исходного
	for (let i = start + deleteCount; i < originalArr.length; i++) {
		originalArr[i - deleteCount] = originalArr[i];
	}

	for (let i = result.length; i < originalArr.length; i++) {
		originalArr[i - deleteCount] = originalArr[i];
	}

	originalArr.length = originalArr.length - deleteCount;
	console.log(originalArr);
	return result;
};
