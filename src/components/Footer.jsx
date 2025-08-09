import React from 'react'

export  function Footer() {
  return (
    <footer className='py-12 bg-stone-950'>
        <div className='max-w-screen-xl mx-auto flex flex-col gap-8 px-4 '>
            <div className='flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-between'>

            <div className='flex flex-col gap-5 max-w-full sm:max-w-xs'>
                 <a href="/" className="block"> <img src="/logo.webp" alt="mi-logo" className="w-32" /></a>
                 <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quasi illum quis temporibus molestias libero beatae rem, commodi, tempora animi voluptatem odio veniam sed officia ut accusamus error cum provident!</p>
                  
                  <div className='flex items-center gap-2'>
                    <a href="#" className='block p-3 rounded-full bg-white duration-200 hover:scale-110'>Facebook</a>
                    <a href="#" className='block p-3 rounded-full bg-white duration-200 hover:scale-110'>Facebook</a>
                    <a href="#" className='block p-3 rounded-full bg-white duration-200 hover:scale-110'>Facebook</a>

                </div>
            </div>
           <div className='w-full flex flex-wrap gap-4 justify-between sm:justify-end'>
            <ul className='flex flex-col gap-4'>
                <li className='text-lg font-bold'>Page links</li>
                <li><a href="#" className='hover:underline'>Home</a></li>
                <li><a href="#" className='hover:underline'>About</a></li>
                <li><a href="#" className='hover:underline'>Contact</a></li>
                <li><a href="#" className='hover:underline'>Services</a></li>
            </ul>


             <ul className='flex flex-col gap-4'>
                <li className='text-lg font-bold'>Social links</li>
                <li><a href="#" className='hover:underline'>Facebook</a></li>
                <li><a href="#" className='hover:underline'>WhatsApp</a></li>
                <li><a href="#" className='hover:underline'>Instagram</a></li>
                <li><a href="#" className='hover:underline'>X</a></li>
            </ul>

        </div>
    </div>
     <hr className='opacity-50'/>
     <span className='text-white/60  text-center text-sm'>Todos los derechos reservados | los izquierdos tambieen</span>

</div>

   
        
    </footer>
  )
}
