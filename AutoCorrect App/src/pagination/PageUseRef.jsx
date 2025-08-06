import React, {useRef,useState} from "react"


export default function PageUseRef()
{

  const  inputRef = useRef(null);
  const [text , setText] = useState("")


  function  focusInput()
  {
//    console.log(inputRef.current.value)
      console.log(inputRef.current.focus())
      console.log(inputRef.current.focus())
      inputRef.current.style.backgroundColor = "pink";
//       setText(inputRef.current.value)
      setText("Focused!");

  }
  return (

      <div>
        <input ref={inputRef} type="text" placeholder="enter name .." />
        <button onClick={focusInput}>focusInput</button>
        <h1>{text}</h1>
      </div>
  )
}