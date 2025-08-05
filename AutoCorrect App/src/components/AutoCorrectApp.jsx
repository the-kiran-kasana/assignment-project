import React from "react";
import {useState} from 'react';

function AutoCorrectApp()
{
    const [word , setWord] = useState('');
    const [correct , setCorrected] = useState('');
    const [count , setCount] = useState('');


function simpleAutoCorrect(sentences,i)
{
    const corrections = {
           teh: 'the',
           recieve: 'receive',
           adress: 'address',
           wierd: 'weird',
           thier: 'their',
         };

    return sentences.split(' ').map(w => {

        const lower = w.toLowerCase();
       let corrected;

       if (corrections[lower]) {
         corrected = corrections[lower];
         setCount(i++)
       } else {
         corrected = w;
       }
         return corrected;
        })
        .join(' ');

}

     const handleSubmit = (e) =>{
            e.preventDefault();
     }

     const handleChange = (e)=>{
          let input = e.target.value;
          setWord(input);

          setCorrected(simpleAutoCorrect(input,0));

     }


     return (
         <>
            <h1>hello AutoCorrectApp</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter the sentences" value={word} onChange={handleChange} style={{ width: '50%', maxHeight: 300, objectFit: 'cover', borderRadius: 5 , padding: 10}}/>
                <button type="submit">Enter</button>
            </form>
            <h3>{correct}</h3>
            <h5>Number of Corrected word : {count}</h5>
         </>
     );

}

export default AutoCorrectApp;


