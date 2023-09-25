import React from 'react'
import Name from '../assets/name.png'
export default function Header() {
  return (
    <header className='  container py-8'>
      <section className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Name} className='xs:h-10 xs:w-24 xs:mr-6 '/>
          </a>
          <button className='button-header -mr-10 lg:-mr-48 btn-sm btn xs:btn-xs xs:mx-auto'>Join Forces</button>
        </div>

      </section>
    </header>
  )
}
