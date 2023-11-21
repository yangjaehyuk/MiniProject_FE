import React from 'react';
import './App.css';
import { Button } from '@material-tailwind/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';

function App() {
	return (
		<>
			<div className="bg-bgGray h-full ">
				<div className="bg-white h-screen w-[768px] px-4 pt-[56px] m-auto top-0 left-0 scrollbar-hide overflow-x-clip overflow-y-scroll ">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Main />}></Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</>
	);
}

export default App;
