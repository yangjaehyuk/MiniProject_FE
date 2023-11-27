import React from 'react';
import loading from '../../assets/images/loading.gif';

export default function Loading() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className="relative flex flex-col justify-center items-center">
				<img className='w-[50px] h-[50px]' src={loading} alt="loading" />
        <div className='font-bold text-black'>Loading...</div>
			</div>
		</div>
	);
}
