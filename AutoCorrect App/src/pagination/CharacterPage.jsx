import React, { useRef, useEffect, useState } from "react";
import axios from "axios";


export default function CharacterPage()
{
   const [characters , setCharacter] = useState([]);
   const [page , setPage] = useState(1);


    async function fetchPost(){
          axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
         .then(res => setCharacter(res.data.results))
         .catch(error => console.error(error));
    }

    useEffect(() =>{
      fetchPost();
    },[page])



   return (
        <div>
            <h1>welcome to pagination topic</h1>
             {characters.map(character => (
                    <p key={character.id}> id : {character.id} <span> Name: {character.name}</span> </p>
             ))}

             <button onClick={() => setPage((prev) => prev-1)} disabled = {page == 1}> prev </button>
              {"  " +  page  + "  "}
             <button onClick={() => setPage((prev) => prev+1)}>next</button>

        </div>
   )
}