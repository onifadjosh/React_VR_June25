import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [namee, setnamee] = useState('Pamilerin')
    const [number, setnumber] = useState(0)
    useEffect(()=>{
        console.log('I ran oooooo')
    }, [number, namee])

    //useeffect without dependency array, onload will run and when any state changes will still run
    //use effect with empty dependency array onload will run and when state changes won't run
    //use effect with state in the dependency array onload will run and when the state changes it will run again

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
  return (
    <div>
        <button onClick={()=>setnamee('Temi')}><h1>{namee}</h1></button> <br />
        <button onClick={()=>setnumber(number+1)}><h1>{number}</h1></button>
    </div>
  )
}

export default Effect