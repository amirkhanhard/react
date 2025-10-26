import React, { useRef, useState } from 'react'

const Testing = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  const handleClickX = () => {
    
    x++;
    console.log(x);
  }
  const handleClickY = () => {
    
    setY(c => c + 1);
    console.log(y);
  }
  const handleClickZ = () => {
    
    z.current = z.current+1;
    console.log(z);
  }
  
  return (
    <>
      <div> LET {x}</div>
      <button className="btn" onClick={handleClickX}>
      LET
    </button>
       <div> state {y}</div>
      <button className="btn" onClick={handleClickY}>
      STATE
    </button>
       <div> use Ref {z.current}</div>
        <button className="btn" onClick={handleClickZ}>
      REF
    </button>
    </>
  )
}


export default Testing