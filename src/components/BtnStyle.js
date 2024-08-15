import React from 'react'
import { Link} from 'react-router-dom'
const BtnStyle = ({content}) => {
  return (
    <Link to={content.to}>
    <div className='h-16 flex justify-center items-center ' >
        <span className=' border-2 border-violet-500 rounded-full w-[0.6rem] h-[0.6rem]'></span>
        <span className='h-[0.8px] w-20 bg-violet-500'></span>
        <button className='py-2 px-6 w-20 md:w-32 flex justify-center items-center lg:w-40 border-2 border-violet-500 rounded-2xl text-sm lg:text-lg hover:bg-[#36363680]'>{content.text}</button>
        <span className='h-[0.8px] w-20 bg-violet-500'></span>
        <span className=' border-2 border-violet-500 rounded-full w-[0.6rem] h-[0.6rem]'></span>
    </div>
    </Link>
  )
}

export default BtnStyle