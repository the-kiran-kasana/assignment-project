import React from "react";
import {useState,useRef,useEffect,useReducer} from "react";


function reducer(state , action)
{
  switch(action.type){
        case 'increment':
        return {count : state.count+1};

        case 'decrement':
        return {count : state.count-1};

        default :
        return state;
  }
}



export default function UseReducepage()
{
  const [state , dispatch] = useReducer(reducer , {count:0})


  return (
     <div>
         <h1>hii we are in usereducer function </h1>

         <p>counter {state.count}</p>
         <button onClick={() => dispatch({type:'increment'})}>increment count</button>
         <button onClick={() => dispatch({type:'decrement'})}>decrement count</button>
     </div>
  );

}