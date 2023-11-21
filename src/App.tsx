import React from 'react';
import './App.css';
import { Button } from '@material-tailwind/react';

function App() {
	return <>
	<div className="font-body text-primary text-title">안녕하세요</div>
	<Button>small</Button>
	<div className='lg bg-primary'>container</div>
	</>
}

export default App;
