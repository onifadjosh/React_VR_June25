import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFriends } from '../redux/appSlice'




const Home = () => {
  let dispatch = useDispatch()
  const [name, setname] = useState('')

  const friends = useSelector((state)=>(state.friends))
  const pami = useSelector((state)=>(state.count))
  return (
    <div>Home my home, when shall I see my home

    <h1>{pami}</h1>

    <input type="text"  onChange={(e)=>setname(e.target.value)}/>

    {
      friends.map((friend, index)=>(
        <h1 key={index}>{friend}</h1>
      ))
    }

    <button onClick={()=>dispatch(addToFriends(name))}>add to friends</button>
        
    </div>
  )
}

export default Home