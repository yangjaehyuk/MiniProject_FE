import React from 'react';
import { Outlet } from 'react-router-dom';

function SubLayout() {
	return (
		<div className="bg-bgGray min-h-screen py-28">
			<Outlet />
		</div>
	);
}

export default SubLayout;
