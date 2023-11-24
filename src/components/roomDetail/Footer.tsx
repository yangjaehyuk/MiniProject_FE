import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { footerFormatFullDateRange } from 'utils/formatDate';


export default function Footer() {
    const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);

    const formattingDate= footerFormatFullDateRange(checkInDate,checkOutDate);


  return (
    <div className='fixed h-[68px] bottom-0 left-1/2 transform translate-x-[-50%] bg-white w-[768px] px-5 py-3 shadow-xl '>
        <div className='flex justify-between items-center w-mx-auto bg-white'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <p className='text-sm font-bold'>{formattingDate}</p>
                    <p className='text-green text-sm font-bold ml-3'>무료취소</p>
                </div>
                <div>
                    <p className="text-title font-bold text-black">76,200원</p>
                </div>

            </div>
            <div className='flex gap-x-2'>
                <button className='border border-borderGray rounded w-[44px] h-[44px] cursor-pointer'>
                    <ShoppingCartOutlinedIcon fontSize='small'/>
                </button>
                <button className='bg-secondary w-[364px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary'>
                    예약하기
                </button>
                {/* <button className='bg-soldOut w-[364px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary'>
                    예약마감
                </button> */}
            </div>
        </div>

    </div>
  )
};
