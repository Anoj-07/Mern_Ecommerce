import React from 'react'
import {assets} from '../assets/admin_assets/assets'

const Nav = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        {/* <img src={assets.logo} alt="" /> */}
        <p className='w-[max(10%, 80px)] font-bold text-3xl'>ADMIN PANNEL</p>
        <button
        onClick={() => setToken("")}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm'>LogOut</button>
    </div>
  )
}

export default Nav