import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function Footer() {
  return (
    <div className='fixed h-[68px] bottom-0 left-1/2 transform translate-x-[-50%] w-[768px] bg-white px-5 py-3 shadow-xl '>
        <div className='flex justify-between items-center w- mx-auto'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <p>12.11 ~ 12.12</p>
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
                <button className='bg-secondary w-[108px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary'>
                    예약하기
                </button>
            </div>
        </div>

    </div>
  )
};
