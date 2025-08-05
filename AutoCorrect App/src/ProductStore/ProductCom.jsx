import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

export default function productCom()
{
      const [product , setProduct] = useState("");
      const [error , setError] = useState("");

      useEffect(() =>{
           axios.get("https://dummyjson.com/products")
          .then(res => setProduct(res.data))
           console.log(product)
      },[]);

      return (
          <>
            <h3>{product.title}</h3>
          </>
     )
}