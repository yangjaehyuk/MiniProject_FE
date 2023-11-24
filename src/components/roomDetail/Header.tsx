import { ArrowBackIos } from '@mui/icons-material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'

export default function Header() {
  return (
    <div className='fixed top-0 left-0 w-full h-[48px] my-auto z-20 shadow-md bg-white '>
        <div className='w-[768px] flex justify-between h-[48px] m-auto items-center z-10 px-5 '>
        <ArrowBackIos className='flex m-2'/>
        <span className='flex text-title font-bold '>객실상세</span>
        <div className='flex'>
            <div className='w-8 mr-1'>
            <HomeOutlinedIcon/>
            </div>
            <div className='w-8'>
            <ShoppingCartOutlinedIcon />
            </div>
        </div>
        </div>
       
        
    </div>
  )
}
