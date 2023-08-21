import React from 'react'

const Sidebar = () => {
  return (
        <div className='flex flex-col items-center justify-center border-2 border-black w-[15%] h-[91.2vh] text-blue-500 underline decoration-sky-500 font-bold'>
            <div className='flex justify-center border-b-2 border-black h-[60px] w-full'><a href="#" className='text-2xl'>Contact</a></div>
            <div className='flex flex-wrap justify-center border-b-2 border-black h-[60px] w-full'><a href="#" className='text-2xl text-center'>Charts and Map</a></div>
        </div>
  )
}

export default Sidebar
