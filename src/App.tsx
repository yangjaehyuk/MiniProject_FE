import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Cart from './pages/cart/index';
import PlaceDetail from 'pages/placeDetail';
import RoomDetail from 'pages/roomDetail';

function App() {
	return (
		<>
			<div className="bg-bgGray h-full ">
				<div className="bg-white h-screen w-[768px] px-5 m-auto top-0 left-0 scrollbar-hide overflow-x-clip overflow-y-scroll ">
					<Routes>
						<Route path="/" element={<Main />} />
						{/* <Route path="/:category" element={} />
						<Route path="/:category/:region" element={} />
						<Route path="/login" element={} />
						<Route path="/signup" element={} />
						<Route path="/mypage" element={} /> */}
						<Route path="/places/:hotelId" element={<PlaceDetail />} />
						<Route path="/places/:hotelId/:roomId" element={<RoomDetail />} />
						<Route path="/cart" element={<Cart />} />
						{/* <Route path='/orders' element={}/>
	 						<Route path='/result' element={}/> */}
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
