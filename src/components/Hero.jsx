import React from 'react'
import Leads from '../assets/leads.svg'
import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='font-lato h-[70vh] flex flex-col justify-center items-center '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 my-8'>
                <img className='px-4' src={Leads} alt="" />
                <div className='flex flex-col items-center my-16 mx-4'>
                    <h1 className='text-4xl md:text-5xl py-4 font-bold h-full text-gray-800 px-8'>We are a Digital Agency serve <span><Typed className='text-4xl md:text-5xl py-4 font-bold text-gray-800 pl-2' strings={['Social Content', 'Online Marketing', 'Web Design', 'Brand Identity', 'Mobile Apps']} typeSpeed={120} backSpeed={140} loop /></span></h1>
                    <h5 className='text-xl text-gray-600 py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa similique illo neque fugiat illum dolorum magnam nostrum ducimus consequatur quos.</h5>
                    <div className='flex m-2 py-2 px-4'>
                    <button className='bg-cyan-400 text-white border border-cyan-400 text-lg rounded-full py-2 px-4 font-lato hover:text-cyan-400 hover:bg-white transition ease-out duration-700 ml-2'>Our work</button>
                    <button className=' border border-cyan-400 text-cyan-400 text-lg rounded-full py-2 px-4 font-lato hover:text-white hover:bg-cyan-400 transition ease-out duration-700 ml-2'>Get download link</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero