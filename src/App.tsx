import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Category from 'pages/category';
import Region from 'pages/region';
import Login from 'pages/login';

function App() {
	return (
		<Routes>
			{/* // 	<Route path='/' element={}/> */}
			<Route path="/:category" element={<Category />} />
			<Route path="/:category/:region" element={<Region />} />
			<Route path="/login" element={<Login />} />
			{/* // 	<Route path='/signup' element={}/> */}
			{/* // 	<Route path='/mypage' element={}/> */}
			{/* // 	<Route path='/places/:hotelId' element={}/> */}
			{/* // 	<Route path='/places/:hotelId/:roomId' element={}/> */}
			{/* // 	<Route path='/cart' element={}/> */}
			{/* // 	<Route path='/orders' element={}/> */}
			{/* // 	<Route path='/result' element={}/> */}
		</Routes>
	);
}

export default App;
