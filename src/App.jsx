import { useState } from 'react'
import perrito from './assets/perritos.png';
import { Header } from './components/header';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main className='flex flex-col gap-28 mb-40'>

        {/* HERO */}
        <section className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center bg-[url('/paisaje.avif')]">
          <div className='w-full h-full bg-gradient-to-t from-black/80 to-black/20'>
            <div className='max-w-screen-xl w-full mx-auto pt-10 sm:pt-16 md:pt-20 px-4 text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-black'>
                TAILWIND CSS TEMPLATE TITLE
              </h1>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold pt-4'>
                Subtitle of course tailwind
              </h2>

              <a href="#" className='w-fit p-3 sm:p-4 mx-auto mt-6 sm:mt-8 flex items-center gap-2 bg-blue-700 hover:bg-blue-900 rounded-md text-white font-bold'>
                Go more
                <RigthIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className='max-w-screen-xl w-full px-4 mx-auto flex flex-col gap-20 md:gap-28'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-5'>
            <div className='flex flex-col max-w-lg gap-4 basis-1/3'>
              <h1 className='text-2xl sm:text-3xl font-bold'>
                About tailwind css
              </h1>
              <p className='text-sm sm:text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat dolor molestiae assumenda sed praesentium commodi itaque recusandae facilis ducimus at a qui debitis provident, doloremque quidem blanditiis facere quod!
              </p>
              <a href="#" className='w-fit p-3 sm:p-4 flex items-center gap-2 bg-neutral-700 hover:bg-neutral-900 rounded-md text-white font-bold'>
                Go more
                <RigthIcon />
              </a>
            </div>
            <img src="/paisaje.avif" alt="" className='max-w-xl w-full object-cover aspect-video rounded-md' />
          </div>

          {/* CARDS */}
          <div className='flex flex-col sm:flex-row justify-evenly gap-8 sm:gap-5'>
            <div className='flex flex-col gap-4 basis-1/3'>
              <img src="/paisaje.avif" alt="" className='w-full object-cover aspect-video rounded-md' />
              <h1 className='text-lg sm:text-xl font-bold'>Title card</h1>
              <p className='text-sm sm:text-base'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repellendus cum doloremque odio nostrum eum fugiat cupiditate deleniti, pariatur iure ratione consequatur aspernatur quo suscipit ipsum nam praesentium impedit autem.
              </p>
              <a href="#" className='w-fit p-3 sm:p-4 flex items-center gap-2 bg-transparent hover:bg-neutral-900 rounded-md text-white font-bold border border-white'>
                Read more
                <RigthIcon />
              </a>
            </div>

            <div className='flex flex-col gap-4 basis-1/3'>
              <img src="/paisaje.avif" alt="" className='w-full object-cover aspect-video rounded-md' />
              <h1 className='text-lg sm:text-xl font-bold'>Title card</h1>
              <p className='text-sm sm:text-base'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repellendus cum doloremque odio nostrum eum fugiat cupiditate deleniti, pariatur iure ratione consequatur aspernatur quo suscipit ipsum nam praesentium impedit autem.
              </p>
              <a href="#" className='w-fit p-3 sm:p-4 flex items-center gap-2 bg-transparent hover:bg-neutral-900 rounded-md text-white font-bold border border-white'>
                Read more
                <RigthIcon />
              </a>
            </div>

            <div className='flex flex-col gap-4 basis-1/3'>
              <img src="/paisaje.avif" alt="" className='w-full object-cover aspect-video rounded-md' />
              <h1 className='text-lg sm:text-xl font-bold'>Title card</h1>
              <p className='text-sm sm:text-base'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repellendus cum doloremque odio nostrum eum fugiat cupiditate deleniti, pariatur iure ratione consequatur aspernatur quo suscipit ipsum nam praesentium impedit autem.
              </p>
              <a href="#" className='w-fit p-3 sm:p-4 flex items-center gap-2 bg-transparent hover:bg-neutral-900 rounded-md text-white font-bold border border-white'>
                Read more
                <RigthIcon />
              </a>
            </div>
          </div>

          {/* GALERÍA */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md sm:col-span-2 aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md sm:col-span-2 aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md sm:col-span-2 aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md aspect-video' />
            <img src="/paisaje.avif" alt="" className='w-full h-full object-cover rounded-md sm:col-span-2 aspect-video' />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

const RigthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
    className="size-5 sm:size-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
)

export default App
