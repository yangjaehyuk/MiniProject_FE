import { useState, useEffect } from 'react';

function useScrollToShow(initialState = false, scrollThreshold: number) {
	const [show, setShow] = useState(initialState);

	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [show, scrollThreshold]);

	return show;
}

export default useScrollToShow;
