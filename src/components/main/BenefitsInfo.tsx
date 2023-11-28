import React from 'react';
import Benefits1 from '../../assets/images/Benefits1.svg';
import Benefits2 from '../../assets/images/Benefits2.svg';
import Benefits3 from '../../assets/images/Benefits3.svg';
import Benefits4 from '../../assets/images/Benefits4.svg';
import Benefits5 from '../../assets/images/Benefits5.svg';
import Benefits6 from '../../assets/images/Benefits6.svg';

const BenefitsInfo = () => {
	return (
		<div className="pb-4">
			<div className="font-semibold"> 바로 받는 해택 모음</div>
			<div className=" flex justify-between my-6">
				<div className="flex flex-col gap-2">
					<img
						src={Benefits1}
						alt="Benefits1 "
						className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
					/>
					<img
						src={Benefits2}
						alt="Benefits2 "
						className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
					/>
					<img
						src={Benefits3}
						alt="Benefits3 "
						className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<img
						src={Benefits4}
						alt="Benefits4 "
						className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
					/>
					<img
						src={Benefits5}
						alt="Benefits5 "
						className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
					/>
					<img
						src={Benefits6}
						alt="Benefits6 "
						className=" border-solid border-[1px] border-gray rounded-sm w-[330px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default BenefitsInfo;
