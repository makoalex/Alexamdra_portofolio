import React from 'react'
import Name from '../assets/name.png'
export default function Header() {
  return (
    <header className='  container py-8 ]'>
      <section className='container mx-auto '>
        <div className='flex '>
          <a href='#'>
            <img src={Name} className='h-10 w-24 ml-6 '/>
          </a>
          
        </div>

      </section>
    </header>
  )
}
