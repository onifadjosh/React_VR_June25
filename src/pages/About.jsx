import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
 let token=  localStorage.getItem('token')
 let navigate = useNavigate()

  useEffect(()=>{
    const getAllUsers=async()=>{
     let response =  await axios.get('http://localhost:5000/user/allUsers',{
      headers:{
        'Authorization': `Bearer ${token}`,

      }
     })
     console.log(response.data)
    }

    getAllUsers()
  }, [])


  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>
      <h1>This is the about page</h1>

      <button onClick={logout} className='btn btn-danger'>logout</button>
    </div>
  )
}

export default About