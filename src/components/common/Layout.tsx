import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className="bg-bgGray min-h-screen font-body ">
			<div className="bg-white min-h-screen max-w-[768px] px-5 m-auto top-0 left-0 overflow-x-clip ">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
