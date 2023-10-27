import { useState } from "react"

export default function count(){

const[count,setCount] = useState(0)

  return(
    <>
      <h1>数の増減</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>plus</button>
      <button onClick={() => setCount(count -1)}>minus</button>
    
    
    </>
  )

}