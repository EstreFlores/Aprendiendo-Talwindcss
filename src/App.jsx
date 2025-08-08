import { useState } from 'react'
import perrito from './assets/perritos.png';
//import './App.css'

function App() {
 
  return (
    <main className="p-10">

      <div className="flex flex-col  gap-20">

      <button type = "button" className=" transition-colors duration-[2s] bg-blue-300 text-white px-4 py-2 rounded-lg block w-fit
      hover:bg-blue-800 hover:font-bold hover:scale-110">
        principal
      </button>

      <button type="button" className="px-4 py-2 rounded-lg block w-fit bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white">Show more</button>

      <button type="button" className="px-4 py-2 rounded-lg block w-fit bg-red-600 text-white hover:bg-red-800 active:bg-red-950">button active</button>

      <button type="button" className="px-4 py-2 rounded-lg block w-fit bg-neutral-600 text-white font-bold hover:bg-neutral-800 focus:bg-transparent focus:text-neutral-800 focus:border-2  focus:border-neutral-800">button focus</button>

      <button type="button" className=" transition-all px-4 py-2 rounded-lg block w-fit font-bold bg-transparent text-yellow-600 outline outline-2 outline-yellow-600 hover:bg-yellow-600 hover:text-white focus:bg-yellow-600 focus:text-white focus:outline-offset-4 ">button focus</button>

       <button type = "button" className="duration-1000 ease-in-cubic bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit
       hover:bg-blue-800 hover:pl-80 ">
        principal
      </button>

      <button type = "button" className=" duration-1000 ease-in-out-back bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit
       hover:bg-blue-800 hover:pl-80 ">
        principal
      </button>


      <div className="animate-floating p-8 bg-sky-600 rounded-full w-fit text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>

      </div>


      </div>











      <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg mt-20">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>



    <div className="mt-20">
      <div className="flex flex-wrap justify-center gap-10">

      <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
       <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>
      </div>
    </div>

    <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>


    <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>

     <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>

     <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>


     <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>
    
    
     <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>

    <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      

      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>

     <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
       <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>
      </div>
    </div>

    <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>
    

     <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
       <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>
      </div>
    </div>

    <div className="overflow-hidden rounded-lg border border-black/20 max-w-lg">
      <img src={perrito} alt="perrito" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Tituloo</h1>
        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquam atque rem repudiandae, fuga doloremque, ex velit commodi dicta nemo dignissimos. </p>
      
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg block w-fit mt-2">show more</a>

      </div>
    </div>

      </div>
    </div>



    <div className="mt-20">
    <a href="#user" className="block w-fit p-2 bg-gradient-to-tr from-emerald-300 to-sky-400 rounded-xl">
        <div className="flex gap-3 items-center">
          <img src="https://i.pinimg.com/474x/5d/69/42/5d6942c6dff12bd3f960eb30c5fdd0f9.jpg" className="w-14 h-14 rounded-full" alt="" />
           
           <div>
           <h1 className="text-xl font-bold">Username</h1>
           <h2 className="text-blue-600">@vaniti user</h2>
          </div>
        </div>
      </a>

      <div className="w-96 h-40 bg-black mt-20"></div>

      <div className="w-[560px] h-40 bg-sky-600"></div>

      <div className="w-[860px] h-40 bg-[#74546c]"></div>

      <div className="w-120 h-40 text-blue-gris font-black text-6xl">sadas</div>

      <div className="w-160 h-40 bg-lime-500"></div>

      <div className="mt-20 w-40 h-40 bg-red-pink-white"></div>

      <div className="mt-20 w-40 h-40 bg-red-pink-black"></div>


      <div className="flex mt-20">
        <div className="w-40 h-40 bg-green.lol-50"></div>
        <div className="w-40 h-40 bg-green.lol-100"></div>
        <div className="w-40 h-40 bg-green.lol-200"></div>
        <div className="w-40 h-40 bg-green.l "></div>

      </div>
      
      
      </div>

    </main>
  )
}

export default App
