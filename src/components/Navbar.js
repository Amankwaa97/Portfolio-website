import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <div className='py-4 px-16'>
        <nav className='flex justify-between items-center'>
          <Link to='/'><h1 className='text-2xl border-4 border-primary p-2 font-bold '>JO</h1></Link>
          <div className='space-x-4 font-semibold items-center'>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/about'>About</a>
           
          </div>
          <div className='flex gap-4'>
            <a href='https://github.com/Amankwaa97'><FaGithub size={40} /></a>
            <a href='https://www.linkedin.com/in/jessica-oppong-1560ab30b/'><FaLinkedin size={40} /></a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
