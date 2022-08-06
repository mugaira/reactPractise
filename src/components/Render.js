import React from 'react'
import { useState } from 'react'

const Render = () => {

 const [counter , setCounter] = useState(0);
 const[show , setShow] = useState(false);

 const increment = (e) => {
  setCounter(counter + 1);
 }
 const decrement = (e) => {
  setCounter(counter - 1);
 }
 
 const movies = [
  { id: "mov1", value: "The Last Samurai" },
  { id: "mov2", value: "Van Helsing" },
  { id: "mov3", value: "Braveheart" },
  { id: "mov4", value: "A Few Good Men" },
  { id: "mov4", value: "Star Wars: Episode III - Revenge of the Sith" },
];


  return (
<>
<p>{counter}</p>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
<br></br>
<button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
<ul>
 {show ?
 movies.map((item,i) => <li key = {i}>  {item.value}</li>)
 : null
 }
</ul>
</>
 
  )
}

export default Render
