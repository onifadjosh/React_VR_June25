import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    let params = useParams()
    console.log(params)
    const{username} = params
  return (
    <div>This is the Profile page for ------ {username}</div>
  )
}

export default Profile