import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Cart from './pages/cart/index';
import PlaceDetail from 'pages/placeDetail';
import Login from 'pages/login';
import Category from 'pages/category';
import Region from 'pages/region';
import RoomDetail from 'pages/roomDetail';

function App() {
	return (
		<div className="bg-bgGray min-h-screen">
			<div className="bg-white min-h-screen max-w-[768px] px-4 pt-[56px] m-auto top-0 left-0 overflow-x-clip">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/:category" element={<Category />} />
					<Route path="/:category/:region" element={<Region />} />
					<Route path="/login" element={<Login />} />
					{/* Route path="/signup" element={} />
				<Route path="/mypage" element={} /> */}
					<Route path="/places/:hotelId" element={<PlaceDetail />} />
					<Route path="/places/:hotelId/:roomId" element={<RoomDetail />} />
					<Route path="/cart" element={<Cart />} />
					{/* <Route path='/orders' element={}/>
					 <Route path='/result' element={}/> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
