import React from "react";
import {useState , useEffect} from "react";
import axios from "axios";

export default function weather()
{
  const [weather , setWeather] = useState('')

  useEffect(() => {
      await axios.get("https://home.openweathermap.org/api_keys")
      .then(res => res.json())
      .catch(());
  },[]);
}

