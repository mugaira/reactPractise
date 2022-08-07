import react, {useEffect, useState} from "react";
import axios from "axios";

const Effect = () => {

 const [pokemon , setPokemon] = useState([]);
 const [count , setCount] = useState(0)

 useEffect(()=>{

   const getPokemon = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
    console.log(data.results)
    // setPokemon(data.results)
   }
   getPokemon(); 
 
 },[count])

  return (
    <>
      <p>
       {count} times-{' '}
       <button onClick={() => setCount(count + 1)} >Increase</button>
      </p>
      <ul>
       {pokemon.map((item,i) => (
        <li key={i}>{item.name} {' - '} {item.url}</li>
       ))}
      </ul>
    </>
  )
}

export default Effect
