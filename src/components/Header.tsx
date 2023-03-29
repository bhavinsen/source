import React from 'react'
import { Progress } from './Progress'
import { MdClose } from "react-icons/md";
const Header = () => {
  return (
    <div className='bg-ghost-white h-[180px] lg:h-[120px] relative pt-[22px] pb-[27px] flex pl-10 pr-5 justify-between'>
      <div className='flex lg:items-center'>

        <h2 className='sm-unnamed-character-style-2 unnamed-character-style-2'>
          Select your source
        </h2>
      </div>
      <Progress />
      <div>

        <button className='outline-none focus:outline-none'>
          <MdClose className='text-[#707070] text-[24px] outline-none focus:outline-none' />
        </button>
      </div>
    </div>
  )
}

export default Header