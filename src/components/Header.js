import React from 'react'
import Name from '../assets/name.png'
export default function Header() {
  return (
    <header className=' container py-8'>
      <section className='container mx-auto'>
        <div className='flex justify-between items-center ml-20'>
          <a href='#'>
            <img src={Name}/>
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>

      </section>
    </header>
  )
}
