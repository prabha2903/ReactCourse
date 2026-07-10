import React, { useEffect, useState } from 'react'

function Ue1() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState('');
    let IncrementCount =()=>{
        setCount(count+1)
    }
    let handleChange = (e)=>{
        setText(e.target.value)
    }
    //component mounting and component update
    //  useEffect(()=>{
    //     console.log('use Effect Runs')
    //     document.title = `button clicked for ${count} time`
    //  })

    //component mounting
    //  useEffect(()=>{
    //     console.log('use Effect Runs')
    //     document.title = `button clicked for ${count} time`
    //  },[])

//certain particular value will be mounting
     useEffect(()=>{
        console.log('use Effect Runs')
        document.title = `button clicked for ${count} time`
     },[text])

  return (
    <div>
        <h1>This is Count value: {count}</h1>
        <input onChange={handleChange} type='text' value={text}></input>
        <h2>{text}</h2>
        <button onClick={IncrementCount}>Increment</button>
    </div>
  )
}

export default Ue1