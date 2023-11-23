import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Layout from './Layout';

interface CalendarModalProps {
    handleModal : () => void;
  }
  

export default function CalendarModal({handleModal} :CalendarModalProps) {
  return (

    <div className="bg-bgGray min-h-screen ">
			<div className="bg-white min-h-screen max-w-[768px] px-5 m-auto top-0 left-0 overflow-x-clip ">
         {/* 헤더 */}
         <div className='fixed top-0 left-1/2 transform translate-x-[-50%] w-full bg-white shadow-md flex justify-center'>
         <div className='w-[768px] h-[92px] flex flex-col  justify-evenly '>
            <div className='flex justify-between items-center px-5'>
                <CloseIcon onClick={handleModal}/>
                <span className='text-title text-black font-bold'>날짜 선택</span>
                <span className='text-content text-blue'>초기화</span>
            </div>
            <div className='flex w-[768px] justify-center'>
                <div className='text-red w-[50px] h-[44px] flex justify-center items-center'>일</div>
                <div className='w-[50px] h-[44px] flex justify-center items-center'>월</div>
                <div className='w-[50px] h-[44px] flex justify-center items-center'>화</div>
                <div className='w-[50px] h-[44px] flex justify-center items-center'>수</div>
                <div className='w-[50px] h-[44px] flex justify-center items-center'>목</div>
                <div className='w-[50px] h-[44px] flex justify-center items-center'>금</div>
                <div className='text-blue w-[50px] h-[44px] flex justify-center items-center'>토</div>
            </div>
        </div>

         </div>
         
        {/* 라이브러리들어갈곳 */}
        {/* <div>


        </div> */}
        {/* 푸터 */}
        <div className='fixed bottom-0 left-1/2 transform translate-x-[-50%] w-[768px] h-[68px] px-5 py-3'>
            <button className='bg-secondary w-full h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary'>
                    예약하기룰루핳하
            </button>

        </div>
				
			</div>
		</div>
  )
}
