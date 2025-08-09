import React from 'react'
import { useState } from 'react'

export  function Header() {
     
    const [isShowMenu, setIsShowMenu] = useState(false);

    const LinkData = [
        "Home",
        "About",
        "Contact",
        "Services",
    ]

  return (
   <header className=" bg-neutral-800">
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between gap-5 px-4">

        <a href="/" className="block"> <img src="/logo.webp" alt="mi-logo" className="w-28" />
        </a>

       <ul className='hidden sm:flex items-center gap-3'>
        {LinkData.map((text, index) => (
           <li key={index}>
            <a href="#" className='block text-white font-bold py-6 hover:text-pink-600'>{text}</a>
        </li>
        ))}
       </ul>
       
        <a className="hidden sm:flex gap-1.5 items-center px-3 py-4 bg-blue-700 hover:bg-blue-800 rounded-md hover:cursor-pointer font-bold">
        <EnterIcon />
        Get started
        </a>

        <button onClick={()=>setIsShowMenu(!isShowMenu)} className=" block sm:hidden p-4 rounded-md">
        {isShowMenu ? <CloseIcon /> :  <BurguerIcon />}
        </button>   

    </nav>



    
       <ul className={`${isShowMenu ?  "flex sm:hidden": "hidden"} w-full flex-col items-center gap-3 pb-10 px-4 text-center`}>
        {LinkData.map((text, index) => (
           <li key={index} className='w-full'>
            <a href="#" className='block w-full hover:bg-black/10 text-white font-bold py-6 hover:text-pink-600'>{text}</a>
        </li>
        ))}

        <li className='w-full'>
            <a className="flex gap-1.5 w-full items-center justify-center px-3 py-4 bg-blue-700 hover:bg-blue-800 rounded-md hover:cursor-pointer font-bold">
            <EnterIcon />
            Get started
            </a>
        </li>

       </ul>
       
       
    

    
   </header>
  )
}


const EnterIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>

)

const BurguerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
)

const CloseIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


)