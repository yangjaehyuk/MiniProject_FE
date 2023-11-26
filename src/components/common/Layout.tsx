import React from 'react';
import { Outlet } from 'react-router-dom';
import useScrollToShow from 'hooks/common/handleScroll';
import TopBtn from './TopBtn';
function Layout() {
	const show = useScrollToShow(false, 100);

	return (
		<div className="bg-bgGray min-h-screen font-body">
			<div className="bg-white min-h-screen relative max-w-[768px] px-5 m-auto top-0 left-0 overflow-x-clip">
				<Outlet />
				{show && <TopBtn show={show} />}
			</div>
		</div>
	);
}

export default Layout;
