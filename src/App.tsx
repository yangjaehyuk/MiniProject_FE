import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Category from 'pages/category';
import Region from 'pages/region';

function App() {
	return (
		<Routes>
			<Route path="/hotel" element={<Category />} />
			<Route path="/hotel/seoul" element={<Region />} />
		</Routes>
	);
}

export default App;
