import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }


  return (

    <div className='max-w-[1240px] text-white h-26 px-10 mx-auto items-center'>
      <div className='flex justify-between text-gray-700 py-4'>
        <h1 className="font-lato font-bold text-4xl">Tailone</h1>
        <ul className="hidden md:flex flex-nowrap font-[600] font-[Anonymous Pro] ">
          <li className="mx-2 p-2 hover:underline underline-offset-8 decoration-2 decoration-cyan-400">Home</li>
          <li className="mx-2 p-2 hover:underline underline-offset-8 decoration-2 decoration-cyan-400">What we do</li>
          <li className="mx-2 p-2 hover:underline underline-offset-8 decoration-2 decoration-cyan-400">Our Works</li>
          <li className="mx-2 p-2 hover:underline underline-offset-8 decoration-2 decoration-cyan-400">Clients</li>
          <li className="mx-2 p-2 hover:underline underline-offset-8 decoration-2 decoration-cyan-400">Team </li>
          <li className="mx-2 p-2 hover:underline underline-offset-8 decoration-2 decoration-cyan-40">Contact</li>
        </ul>
        <div onClick={handleNav} className='items-center pt-2 md:hidden'>{nav ? <AiOutlineClose size={20} color='black' /> : <AiOutlineMenu size={20} color='black' />}</div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r text-black border-r-gray-700  font-roboto tracking-widest bg-cyan-40 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
        <ul className='p-2 font-normal mt-10'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 '>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar