import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useScrollToShow from 'hooks/common/handleScroll';
import TopBtn from './TopBtn';
function SubLayout() {
	const location = useLocation();
	const orders = location.pathname === '/orders';
	const show = useScrollToShow(false, 100);
	console.log(location);
	return (
		<>
			{orders ? (
				<div className="bg-bgGray min-h-screen py-16">
					<Outlet />
					{show && <TopBtn show={show} />}
				</div>
			) : (
				<div className="bg-bgGray min-h-screen py-28">
					<Outlet />
					{show && <TopBtn show={show} />}
				</div>
			)}
		</>
	);
}

export default SubLayout;
