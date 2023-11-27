import React from 'react';

const ReservationCardHeader = ({ orderDate }: { orderDate: string }) => {
	return (
		<div className="w-full border-2 border-gray rounded-md cursor-pointer">
			<div className="text-bold text-title w-full border-gray p-4">
				{orderDate}
			</div>
		</div>
	);
};

export default ReservationCardHeader;
