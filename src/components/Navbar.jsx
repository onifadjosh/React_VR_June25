import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 style={{color:'red', fontSize:'30px'}}>Logo</h1>

        <div className='d-flex gap-3'>
            {/* <a href="/">Home</a> */}
            <Link to='/' className='text-danger'>Home</Link>

            {/* <a href="/contact">Contact Us</a> */}

            <Link to='/contact' className='text-danger'>Contact</Link>


            {/* <a href="/about">About Us</a> */}
            <Link to='/about' className='text-danger'>About</Link>

            <a href="#">Settings</a>
        </div>


        <div>
            <Button/>

        <Button/>
        </div>
    </nav>
  )
}

export default Navbar