import { useState,useEffect } from "react";

type Props = {
  title:string;
}

export function Header(props:Props){
  const[state,setState] = useState<Props>({
    title:props.title
  })

  return(
    <>
    <header>
      <h1>{state.title}</h1>
    </header>
    
    </>
  )
} 

