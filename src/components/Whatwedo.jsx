import React from 'react'
import Search from '../assets/search.png';
import Comment from '../assets/comment.png';
import Ad from '../assets/advertising.png';
import brand from '../assets/brand.png';
import wallet from '../assets/wallet-passes-app.png';
import speed from '../assets/speed.png';

const Whatwedo = () => {
    return (
        <div className='font-lato'>
            <div className='max-w-[1240px] w-full items-center mx-auto'>
                <div className='mt-6 flex flex-col justify-center item-center'>
                    <h1 className='font-bold text-3xl py-4'>What We Do</h1>
                    <h3 className='text-gray-700 px-6 text-[500] my-2 text-xl'>Save time managing advertisement & content for your business.</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 items-center mx-8'>
                        <div className='w-full flex flex-col justify-center items-center shadow-lg mx-auto py-4 px-2 mt-6 hover:scale-105 duration-300'>
                            <img src={Search} className='h-12' alt="" />
                            <h1 className='font-bold text-xl text-gray-700 mt-6'>SEO Services</h1>
                            <p className='text-gray-700 px-6 text-[800] my-2'>This is a wider card with supporting text below as a natural content.</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center shadow-lg mx-auto py-4 px-2 mt-6 hover:scale-105 duration-300'>
                            <img src={Comment} className='h-12' alt="" />
                            <h1 className='font-bold text-xl text-gray-700 mt-6'>Social Content</h1>
                            <p className='text-gray-700 px-6 text-[800] my-2'>This is a wider card with supporting text below as a natural content.</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center shadow-lg mx-auto py-4 px-2 mt-6 hover:scale-105 duration-300'>
                            <img src={Ad} className='h-12' alt="" />
                            <h1 className='font-bold text-xl text-gray-700 mt-6'>Creative Ads</h1>
                            <p className='text-gray-700 px-6 text-[800] my-2'>This is a wider card with supporting text below as a natural content.</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center shadow-lg mx-auto py-4 px-2 mt-6 hover:scale-105 duration-300'>
                            <img src={brand} className='h-12' alt="" />
                            <h1 className='font-bold text-xl text-gray-700 mt-6'>Brand Identity</h1>
                            <p className='text-gray-700 px-6 text-[800] my-2'>This is a wider card with supporting text below as a natural content.</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center shadow-lg mx-auto py-4 px-2 mt-6 hover:scale-105 duration-300'>
                            <img src={wallet} className='h-12' alt="" />
                            <h1 className='font-bold text-xl text-gray-700 mt-6'>Budget & Marketing</h1>
                            <p className='text-gray-700 px-6 text-[800] my-2'>This is a wider card with supporting text below as a natural content.</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center shadow-lg mx-auto py-4 px-2 mt-6 hover:scale-105 duration-300'>
                            <img src={speed} className='h-12' alt="" />
                            <h1 className='font-bold text-xl text-gray-700 mt-6'>Optimize Versions</h1>
                            <p className='text-gray-700 px-6 text-[800] my-2'>This is a wider card with supporting text below as a natural content.</p>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Whatwedo