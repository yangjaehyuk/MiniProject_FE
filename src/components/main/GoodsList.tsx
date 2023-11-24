import React from 'react';
import star from '../../assets/images/icon-star.svg';
import item from '../../assets/images/item.svg';
const GoodsList = () => {
	return (
		<>
			<div className="flex text-xxsm px-1 py-2 justify-between items-center">
				<div className="flex flex-col  w-[120px] h-[250px]  ">
					<img src={item} alt="item" width={120} />
					<span className="text-sm my-1 "> 호텔 베르누이 서울</span>
					<div className="flex justify-start">
						<img src={star}></img>
						<div className="ml-1 font-semibold">4.5</div>
					</div>
					<div className="flex justify-end font-semibold text-content">
						458,500원 ~
					</div>
				</div>
				<div className="flex flex-col w-[120px] h-[250px] ">
					<img src={item} alt="item" width={120} />
					<span className="text-sm  break-words my-1">
						가평 호호키즈풀빌라(미온수)
					</span>
					<div className="flex justify-start">
						<img src={star}></img>
						<div className="ml-1 font-semibold">4.5</div>
					</div>
					<div className="flex justify-end font-semibold text-content">
						458,500원 ~
					</div>
				</div>
				<div className="flex flex-col  w-[120px] h-[250px]  ">
					<img src={item} alt="item" width={120} />
					<span className="text-sm my-1"> 가평 로렌시아키즈풀</span>
					<div className="flex justify-start">
						<img src={star}></img>
						<div className="ml-1 font-semibold">4.5</div>
					</div>
					<div className="flex justify-end font-semibold text-content">
						458,500원 ~
					</div>
				</div>
				<div className="flex flex-col   w-[120px] h-[250px] ">
					<img src={item} alt="item" width={120} />
					<span className="text-sm my-1"> 글래드 마포</span>
					<div className="flex justify-start">
						<img src={star}></img>
						<div className="ml-1 font-semibold">4.5</div>
					</div>
					<div className="flex justify-end font-semibold text-content">
						458,500원 ~
					</div>
				</div>
				<div className="flex flex-col  w-[120px] h-[250px]  ">
					<img src={item} alt="item" width={120} />
					<span className="text-sm my-1">골드리버 호텔</span>
					<div className="flex justify-start">
						<img src={star}></img>
						<div className="ml-1 font-semibold">4.5</div>
					</div>
					<div className="flex justify-end font-semibold text-content">
						458,500원 ~
					</div>
				</div>
			</div>
		</>
	);
};

export default GoodsList;
