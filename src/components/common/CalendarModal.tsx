import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { endDateState, startDateState } from 'recoil/atoms/dateAtom';
import formatFullDateRange from 'utils/formatDate';

interface CalendarModalProps {
	handleModal: () => void;
}

interface MyContainerProps {
  className?: string;
}

export default function CalendarModal({ handleModal }: CalendarModalProps) {
	const [startDate, setStartDate] = useRecoilState(startDateState);
	const [endDate, setEndDate] = useRecoilState(endDateState);

  const [startDay,setStartDay] = useState<Date | null>(startDate);
  const [endDay, setEndDay] = useState<Date | null>(endDate);
  const [formattingDate , setFormattingDate] = useState(formatFullDateRange(startDate,endDate));
  const [lastStartDate, setLastStartDate] = useState(startDate);
  const [isReset,setIsRest] = useState(false);

  const handleOnChange = (dates: [Date, Date]) => {
    setIsRest(false);
    const [start, end] = dates;
    setStartDay(start);
    setEndDay(end);
  };

  const handleBtnClick = () => {
    handleModal();
    if(startDay !== null && endDay !== null) {
      setStartDate(startDay);
      setEndDate(endDay);
    }
  }

  const handleResetClick = () => {
    setStartDay(null);
    setEndDay(null);
    setIsRest(true);
  }
  
  useEffect(() => {
    // startDay와 endDay가 동시에 변경되었는지 확인
    if (startDay !== null && startDay !== lastStartDate && endDay !== null) {
      setFormattingDate(formatFullDateRange(startDay, endDay));
      setLastStartDate(startDay);
    } else if (startDay !== null && startDay !== lastStartDate) {
      // startDay만 변경되었을 때 원하는 포맷으로 문자열 설정
      setFormattingDate(formatFullDateRange(startDay,null)); // 원하는 포맷으로 변경하세요.
      setLastStartDate(startDay);
    } else if (startDay !== null && endDay !== null) {
      // endDay만 변경되었을 때도 포맷팅 로직을 실행하거나 다른 문자열 설정 가능
      setFormattingDate(formatFullDateRange(startDay, endDay)); // 또는 다른 포맷
    }
  }, [startDay, endDay, lastStartDate,]);
	return (
		<div className="bg-bgGray min-h-screen ">
			<div className="bg-white min-h-screen max-w-[768px] px-5 m-auto top-0 left-0 overflow-x-clip ">
				{/* 헤더 */}
				<div className="fixed top-0 left-1/2 transform translate-x-[-50%] w-full bg-white shadow-md flex justify-center">
					<div className="w-[768px] h-[92px] flex flex-col  justify-evenly ">
						<div className="flex justify-between items-center px-5">
							<CloseIcon onClick={handleModal} />
							<span className="text-title text-black font-bold">날짜 선택</span>
							<span onClick={handleResetClick} className="text-content text-blue cursor-pointer">초기화</span>
						</div>
						<div className="flex w-[768px] justify-center">
							<div className="text-red w-[50px] h-[44px] flex justify-center items-center">
								일
							</div>
							<div className="w-[50px] h-[44px] flex justify-center items-center">
								월
							</div>
							<div className="w-[50px] h-[44px] flex justify-center items-center">
								화
							</div>
							<div className="w-[50px] h-[44px] flex justify-center items-center">
								수
							</div>
							<div className="w-[50px] h-[44px] flex justify-center items-center">
								목
							</div>
							<div className="w-[50px] h-[44px] flex justify-center items-center">
								금
							</div>
							<div className="text-blue w-[50px] h-[44px] flex justify-center items-center">
								토
							</div>
						</div>
					</div>
				</div>
				<div className="pt-[92px] flex justify-center w-[360px]">
					<DatePicker
						selected={startDay}
						onChange={handleOnChange}
						startDate={startDay}
						endDate={endDay}
						selectsRange
						inline
					/>
				</div>
				{/* 푸터 */}
				<div className="fixed bottom-0 left-1/2 transform translate-x-[-50%] w-[768px] h-[68px] px-5 py-3">
          {isReset ? <button className="bg-soldOut w-full h-[44px] text-white rounded text-[16px] font-bold cursor-pointer">
						날짜를 선택해주세요
					</button> : 
          <button onClick={handleBtnClick} className="bg-secondary w-full h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary">
          {formattingDate}
        </button>}
					
				</div>
			</div>
		</div>
	);
}
