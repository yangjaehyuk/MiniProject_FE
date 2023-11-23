import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function SubLayout() {
	const location = useLocation();
	const orders = location.pathname === '/orders';

	console.log(location);
	return (
		<>
			{orders ? (
				<div className="bg-bgGray min-h-screen py-16">
					<Outlet />
				</div>
			) : (
				<div className="bg-bgGray min-h-screen py-28">
					<Outlet />
				</div>
			)}
		</>
	);
}

export default SubLayout;
