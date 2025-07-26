import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount, increaseCountBySomething } from '../redux/appSlice'


const Contact = () => {
  const [num, setnum] = useState(0)
  let dispatch = useDispatch()
  const count = useSelector((state)=>(state.count))
  const surname = useSelector((state)=>(state.surname))
  return (
    <div>
      <h1>{count}</h1>
      <h1>{surname}</h1>
      <input type="text" onChange={(e)=>setnum(e.target.value)} />

      <button onClick={()=>dispatch(increaseCount())}>increase count</button>

      <button onClick={()=>dispatch(increaseCountBySomething(Number(num)))}> increase count by num</button>
    </div>
  )
}

export default Contact