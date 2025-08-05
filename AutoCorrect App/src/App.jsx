import { useState } from 'react'
import {Routes , Route,Link} from 'react-router-dom';
import './App.css'
import AutoCorrectApp from "./components/AutoCorrectApp"
import About from "./Routing-in-React/About";
import Home from "./Routing-in-React/Home";
import Details from "./Routing-in-React/Details";
import ProductCom from "./ProductStore/ProductCom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/*     <Link to="/">Home</Link> */}
    <Link to="/About">About</Link>
    <Link to="/Details">Details</Link>
    <Link to="/AutoCorrectApp">AutoCorrectApp</Link>
    <Link to="/">Product</Link>
    <Routes>
{/*           <Route path='/' element={<Home />}/> */}
          <Route path='/About' element={<About />}/>
          <Route path="/Details/:id" element={<Details />} />
          <Route path='/AutoCorrectApp' element={<AutoCorrectApp />}/>
          <Route path='/' element={<ProductCom/>}/>
    </Routes>
    </>
  );
}

export default App


{/* <AutoCorrectApp /> */}