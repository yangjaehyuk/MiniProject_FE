import React from 'react';

const ReservationCardHeader = ({ orderDate }: { orderDate: string }) => {
	return (
		<div className="w-full border-t-2 border-l-2 border-r-2 border-gray rounded-t-lg">
			<div className="text- text-content w-full border-gray p-2">
				{orderDate}
			</div>
		</div>
	);
};

export default ReservationCardHeader;
