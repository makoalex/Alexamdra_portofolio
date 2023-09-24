import React from 'react'
import Name from '../assets/name.png'
export default function Header() {
  return (
    <header className=' fixed container py-8'>
      <section className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Name}/>
          </a>
          <button className=' button-header -mr-40 btn-sm btn '>Join Forces</button>
        </div>

      </section>
    </header>
  )
}
