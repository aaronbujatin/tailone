import React from 'react'
import web from '../assets/web-design.png'
const Ourwork = () => {
  
  return (
    <div className='font-lato h-[70vh] my-16'>
      <div className='max-w-[1240px] w-full items-center mx-auto'>
        <div className='mt-6 flex flex-col justify-center item-center'>
          <h1 className='font-bold text-3xl py-4'>Our work</h1>
          <h3 className='text-gray-700 px-6 text-[500] my-2 text-xl'>We create engaging experiences that are innovatingand beautiful.</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 items-center mx-8 my-4'>
            <div className='relative w-full flex flex-col justify-center items-center shadow-lg mx-auto overflow-hidden'>
              <img src={web} class=" h-[12rem] hover:scale-105 duration-300 " alt="" />
              <div className='absolute opacity-0 hover:opacity-100 w-full bottom-0 pt-24 bg-cyan-400'>
                <h1>Web Developement</h1>
                <h4>Web</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourwork