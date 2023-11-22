import React from 'react'
import room from '../../assets/images/room.jpg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SoldOutRoomItem() {
  return (
    <div className='flex py-5 justify-between border-b border-borderGray cursor-pointer'>
        <div>
            <img src={room} alt='room image' className='w-[320px] h-[160px] rounded-lg'/>
            <p className='text-title text-black font-bold mt-3'>보스코 프린스 트윈 / 빌리지뷰</p>
            <div className='flex gap-x-0.5 text-secondaryTextGray mt-2'>
                <PersonOutlineIcon fontSize='small'/>
                <p>기준2인 / 최대 4인</p>
            </div>
        </div>
        <div className='p-4 w-[386px] h-fit border-borderGray border rounded-lg'>
            <div className ='flex text-sm justify-between '>
                <span className='text-textGray font-semibold'>숙박</span>
                <div className='flex items-center'>
                    <span className='text-blue font-bold ml-2'>상세보기</span>
                    <KeyboardArrowRightIcon sx={{ fill: '#0152cc' ,fontSize: '16px'}}/>
                </div>
            </div>
            <div>
                <p className='text-sm text-textGray py-1'>체크인 <span className='font-semibold'>15:00</span> ~ 체크아웃 <span className='font-semibold'>15:00</span></p>
            </div>
            <div className='flex flex-col items-end'>
            <p className='text-title font-bold text-soldOut'>76,200원</p>
            <p className='font-bold text-secondaryTextGray text-content'>예약마감</p>
            </div>

        </div>
    </div>
  )
}
