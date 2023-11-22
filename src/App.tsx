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
import Layout from 'components/common/Layout';
import SubLayout from 'components/common/SubLayout';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Main />} />
				<Route path="/:category" element={<Category />} />
				<Route path="/:category/:region" element={<Region />} />
				<Route path="/login" element={<Login />} />
				{/* Route path="/signup" element={} />
				<Route path="/mypage" element={} /> */}
				<Route path="/places/:hotelId" element={<PlaceDetail />} />
				<Route path="/places/:hotelId/:roomId" element={<RoomDetail />} />

				{/* <Route path='/orders' element={}/>
					 <Route path='/result' element={}/> */}
			</Route>
			<Route element={<SubLayout />}>
				<Route path="/cart" element={<Cart />} />
			</Route>
		</Routes>
	);
}

export default App;
