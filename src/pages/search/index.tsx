import Header from 'components/common/Header';
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { capacityState } from 'recoil/atoms/capacityAtom';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { formatFullDateRangeWithoutYear } from 'utils/formatDate';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import SiderRegions from 'components/main/SiderRegions';
import CalendarModal from 'components/common/CalendarModal';
import RegionProdCapacityModal from 'components/region/RegionProdCapacityModal';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCapacityModalOpen, setIsCapacityModalOpen] = useState(false);

	const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);
	const [formattingDate, setFormattingDate] = useState(
		formatFullDateRangeWithoutYear(checkInDate, checkOutDate),
	);

    const [searchInput , setSearchInput] = useState<string>('');

	const capacityValue = useRecoilValue(capacityState);

    useEffect(() => {
		setFormattingDate(
			formatFullDateRangeWithoutYear(checkInDate, checkOutDate),
		);
	}, [checkInDate, checkOutDate]);

	const handleCalendarClick = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleCapacityClick = () => {
		setIsCapacityModalOpen((prev) => !prev);
	};

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
    };

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(searchInput !== '') {
            navigate('/');
        }
        
    }
	return (
		<div>
            <CalendarModal isOpen={isModalOpen} handleOpen={handleCalendarClick} />
			<RegionProdCapacityModal isOpen={isCapacityModalOpen} handleOpen={handleCapacityClick} />

			<Header title={'검색'} />
			<div className="flex mt-[48px] flex-col">
				<div className="mt-5 w-full border border-borderGray rounded">
					<form className="flex w-full items-center" onSubmit={handleSubmit}>
						<SearchOutlinedIcon className="ml-3" sx={{ fill: '#616161' }} />
						<input
                            onChange={onChange}
							className="pl-1 pr-10 pt-3 pb-2 w-full"
							type="text"
                            value={searchInput}
							placeholder="지역 키워드로 찾아보세요"
						/>
					</form>
					<div className="flex w-full text-content font-bold text-black">
						<div className="flex items-center border border-borderGray rounded px-3 py-[11px] w-full">
							<DateRangeIcon sx={{ fill: '#616161' }} />
							<button
								className="w-full flex items-start pl-1"
								onClick={handleCalendarClick}
							>
								{formattingDate}
							</button>
						</div>
						<div className="flex items-center border border-borderGray rounded px-3 py-[11px] w-full">
							<PersonOutlineIcon sx={{ fill: '#616161' }} />
							<button
								className="w-full flex items-start pl-1"
								onClick={handleCapacityClick}
							>
								성인 {capacityValue}
							</button>
						</div>
					</div>
				</div>
                <div>
                    <div className='py-5'>
                        <p className='text-black text-title font-bold'>인기 검색어</p>
                    </div>
                    <div>
                        <div>
                            <span className='text-primary font-bold mr-2'>1</span>
                            <RemoveIcon  sx={{ fill: '#cccccc', fontSize:'14px' }}/>
                            <span className='ml-2'>서울</span>

                        </div>
                        <div className='pt-2'>
                            <span className='text-primary font-bold mr-2'>2</span>
                            <RemoveIcon sx={{ fill: '#cccccc' , fontSize:'14px' }}/>
                            <span className='ml-2'>부산</span>

                        </div>
                        <div className='pt-2'>
                            <span className='text-primary font-bold mr-2'>3</span>
                            <RemoveIcon sx={{ fill: '#cccccc' , fontSize:'14px' }}/>
                            <span className='ml-2'>강원</span>

                        </div>
                        <div className='pt-2'>
                            <span className='text-black font-bold mr-2'>4</span>
                            <RemoveIcon sx={{ fill: '#cccccc' , fontSize:'14px' }}/>
                            <span className='ml-2'>경상</span>

                        </div>
                        <div className='pt-2'>
                            <span className='text-black font-bold mr-2'>5</span>
                            <RemoveIcon sx={{ fill: '#cccccc' , fontSize:'14px' }}/>
                            <span className='ml-2'>전라</span>

                        </div>
                    </div>
                </div>
                <div>
                <div className='py-8'>
                        <p className='text-black text-title font-bold'>지금 사랑받는 여행지</p>
                    </div>
                    <SiderRegions />

                </div>
			</div>
		</div>
	);
}
