import { useState,useEffect } from "react";

type Props = {
  title:string
}

export function Footer(props:Props){
  const[state,setState] = useState<Props>({
    title:props.title
  })

  return(
    <>
    <footer>
      <small>
        <p>&copy;</p>
        <p>{state.title}</p>
      </small>
    </footer>
    
    </>

  )
}