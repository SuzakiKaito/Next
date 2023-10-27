import { useState } from "react"

export default function change(){

  const[add,setAdd]=useState({
    calc1 : '',
    calc2 : '',
    result:0

  })

  return(
    <>
      <h1>数の足し算</h1>
      <div className="app">
        <input type="text" onChange={(e) => {setAdd({...add,calc1:e.target.value})}}/>
        <input type="text" onChange={(e) => {setAdd({...add,calc2:e.target.value})}}/>
          <p>{add.result}</p>
        <button onClick={()=>{
          let num1 = Number(add.calc1)
          let num2 = Number(add.calc2)
          setAdd({...add,result:num1+num2})
          }
        }>結果</button>
      </div>
    </>
  )

}