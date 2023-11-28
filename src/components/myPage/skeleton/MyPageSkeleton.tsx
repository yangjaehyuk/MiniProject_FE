import React from 'react';

const MyPageSkeleton = () => {
	return (
		<div className="pr-6 pl-6">
			<div className="w-full border-t-2 border-l-2 border-r-2 border-gray rounded-t-lg">
				<div className="text- text-content w-full border-gray p-2 bg-gray">
					&nbsp;
				</div>
			</div>
			<div className="w-full border-2 border-gray rounded-md">
				<div className="pl-4 pt-3 pb-1  text-content">&nbsp;</div>
				<div className="pl-4 pt-3 pb-1 flex">
					<div className="h-[80px] w-[80px] rounded-md bg-gray"></div>
					<div>
						<div className="pl-4">
							<div
								className="p-1 border border-gray bg-gray text-white rounded-sm text-sm"
								style={{ width: '57.6px' }}
							>
								&nbsp;
							</div>
							<div className="text-title pt-0.5 pb-0.5 mt-2 bg-gray">
								&nbsp;
							</div>
							<div className="text-content pt-0.5 pb-0.5 mt-2 bg-gray">
								&nbsp;
							</div>
							<div className="text-content pt-0.5 pb-0.5 mt-2 bg-gray">
								&nbsp;
							</div>
							<div className="text-content bg-gray pt-0.5 pb-0.5 mt-2">
								&nbsp;
							</div>
							<div className="text-content bg-gray pt-0.5 pb-0.5 mt-2">
								&nbsp;
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPageSkeleton;
