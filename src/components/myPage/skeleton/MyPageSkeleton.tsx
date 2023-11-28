import React from 'react';

const MyPageSkeleton = () => {
	return (
		<div className="pr-6 pl-6 animate-pulse">
			<div className="w-full border-t-2 border-l-2 border-r-2 border-gray rounded-t-lg">
				<div className="text- text-content w-full border-gray p-4">
					<p className="w-1/4 bg-gray">&nbsp;</p>
				</div>
			</div>
			<div className="w-full border-2 border-gray rounded-md px-4">
				<div className="pt-3 pb-1 text-content">
					<p className="bg-gray w-1/2">&nbsp;</p>
				</div>
				<div className="pt-3 pb-1 flex">
					<div className="h-[80px] w-[80px] rounded-md bg-gray"></div>
					<div className="w-full">
						<div className="pl-4">
							<div
								className="p-1 border border-gray bg-gray text-white rounded-sm text-sm"
								style={{ width: '57.6px' }}
							>
								&nbsp;
							</div>
							<div className="text-title w-2/3 mt-2 bg-gray">&nbsp;</div>
							<div className="text-content w-1/4 mt-2 bg-gray">&nbsp;</div>
							<div className="text-content w-1/3 mt-2 bg-gray">&nbsp;</div>
							<div className="text-content w-1/2 bg-gray mt-2">&nbsp;</div>
							<div className="text-content w-1/3 bg-gray mt-2">&nbsp;</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPageSkeleton;
