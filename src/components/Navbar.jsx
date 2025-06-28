import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 style={{color:'red', fontSize:'30px'}}>Logo</h1>

        <div className='d-flex gap-3'>
            <a href="#">Home</a>

            <a href="#">Contact Us</a>


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