import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface CalendarModalProps {
    handleModal : () => void;
  }
  

export default function CalendarModal({handleModal} :CalendarModalProps) {
  return (
    <div>
        {/* 헤더 */}
        <div className='fixed top-o w-full h-[156px] flex flex-col'>
            <div className='flex justify-between'>
                <CloseIcon />
                <span className='text-title text-black font-bold'>날짜 선택</span>
                <span>초기화</span>

            </div>
            <div className='flex w-[768px] justify-evenly'>
                <span className='text-red'>일</span>
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
                <span className='text-blue'>토</span>
            </div>
        </div>
        {/* 라이브러리들어갈곳 */}
        <div>


        </div>
        {/* 푸터 */}
        <div className='fixed bottom-0 w-full h-[68px]'>
            <button className='bg-secondary w-[108px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary'>
                    예약하기
            </button>

        </div>

    </div>
  )
}
