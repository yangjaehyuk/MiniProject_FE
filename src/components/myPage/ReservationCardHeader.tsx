import React from 'react';

const ReservationCardHeader = ({ orderDate }: { orderDate: string }) => {
	return (
		<div className="border-b border-gray">
			<div className="font-semibold text-content w-full border-gray p-4">
				{orderDate}
			</div>
		</div>
	);
};

export default ReservationCardHeader;
