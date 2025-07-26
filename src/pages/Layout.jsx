import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex' style={{height:'100vh'}}>
        <div className='bg-primary d-flex ' style={{flexBasis:'20%', flexDirection:'column'}}>
            <Link to='/' className='text-danger'>Home</Link>

            {/* <a href="/contact">Contact Us</a> */}

            <Link to='/contact' className='text-danger'>Contact</Link>


            {/* <a href="/about">About Us</a> */}
            <Link to='/about' className='text-danger'>About</Link>
        </div>

        <div className='' style={{flexBasis:'80%'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout