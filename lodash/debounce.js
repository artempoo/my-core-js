function debounce(func, delay) {
	let timer;

	return function(...args) {
		const context = this;
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			func.call(context, ...args);
		}, delay);
	};
}
