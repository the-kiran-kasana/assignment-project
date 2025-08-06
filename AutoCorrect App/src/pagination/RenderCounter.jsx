import React from "react";
import {useState,useRef,useEffect} from "react";

export default function RenderCounter()
{
  const [count , setCount] = useState(0)
  const renderCount  = useRef(1)
  const prevCount  = useRef(0)

  useEffect(() =>{
  renderCount.current += 1;
  prevCount.current = count;
  });

  return (
     <div>
         <h2>counter : {count}</h2>
         <button onClick={() => setCount((prev) => prev+1)}> increase count</button>
         <p>render : {renderCount.current}</p>
         <p>prev :{prevCount.current}</p>
     </div>
  );

}