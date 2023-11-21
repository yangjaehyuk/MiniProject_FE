import { Route, Routes } from 'react-router';
import React from 'react';
import './App.css';
import Login from 'pages/login';

function App() {
	return (
		<Routes>
			{/* // 	<Route path='/' element={}/> */}
			{/* // 	<Route path='/:category' element={}/> */}
			{/* // 	<Route path='/:category/:region' element={}/> */}
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
