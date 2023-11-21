import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GoodsDetail from 'pages/GoodsDetail';

function App() {
	return (
		<Routes>
			<Route path='/' element={<GoodsDetail/>}>
			</Route>
		</Routes>
	)
}

export default App;
