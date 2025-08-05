import React from 'react';
import { useParams } from 'react-router-dom';

function Details()
{
  const { id } = useParams();
  return (
      <>
        <p>welcome to Details page</p>
        <h3>details of pasts : {id}</h3>
      </>
  )
}

export default Details;