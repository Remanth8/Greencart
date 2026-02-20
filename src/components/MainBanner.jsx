import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'> 
      <img src ={assets.main_banner_bg} alt="banner" className='w-full h-[500px] object-cover hidden md:block'/>
      <img src ={assets.main_banner_bg_sm} alt="banner" className='w-full h-[380px] object-cover md:hidden'/>

      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center md:items-start md:text-left'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold max-w-xs sm:max-w-md leading-snug'>
          Freshness You can trust, Savings you will Love! </h1>
      
      <div className='flex items-center mt-6 font-medium'>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
        Shop Now
        <img className='md:hidden transition group-focus:translate-x-1'src={assets.white_arrow_icon} alt="arrow"/>
        </Link>

        <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
        Explore deals
        <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow"/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
