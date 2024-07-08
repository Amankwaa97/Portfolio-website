import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='py-4 px-16'>
        <nav className='flex justify-between'>
          <Link to='/'><h1 className='text-2xl border-4 border-primary p-2 font-bold '>JO</h1></Link>
          <div className='space-x-4 font-semibold'>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/about'>About</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
