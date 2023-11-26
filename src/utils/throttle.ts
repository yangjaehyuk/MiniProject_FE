type ThrottleFunction<T extends unknown[]> = (...args: T) => void;

export function throttle<T extends unknown[]>(
	func: ThrottleFunction<T>,
	delay: number,
): ThrottleFunction<T> {
	let isThrottled = false;
	let lastArgs: T | null = null;

	function wrapper(...args: T) {
		if (isThrottled) {
			lastArgs = args;
			return;
		}

		func(...args);
		isThrottled = true;

		setTimeout(() => {
			isThrottled = false;
			if (lastArgs) {
				wrapper(...lastArgs);
				lastArgs = null;
			}
		}, delay);
	}

	return wrapper;
}
