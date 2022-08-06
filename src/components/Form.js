import React from 'react'
import { useRef,useState } from 'react';

const Form = () => {

  const [error,setError] = useState("");

  const [username , setUsername] = useState("");

  const changeHandler = (e) => {
    // console.log(e.target.value)
    const isLowerCase = e.target.value === e.target.value.toLowerCase();
    setError(isLowerCase ? null : "all letter must be small")
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler}>

    <label htmlFor = 'username'>username</label>
      <input type='text' id='username'
       className='username'
       value={username.toLowerCase()}
       onChange={(e) => setUsername(e.target.value)} 
       style={{marginBottom:"10px"}} />

      <p style={{color:"red"}}>{error}</p>
      
      <label htmlFor='password'>password</label>
      <input type='password' id='password'  className='password' />
      <br />
      <button>submit</button>
    
     </form>
  )
}

export default Form;



// const Form = () => {

//   // const usernameRef = useRef();
//   // const passwordRef = useRef();

//   // const submitHandler = (e) =>{
//   //   e.preventDefault();

//     // console.dir(e.target[0].value);
//     // console.dir(e.target[1].value);
//     // console.log(e.target.username.value);
//     // console.log(e.target.password.value);

//     // console.log(usernameRef);
//     // console.log(passwordRef);

//     // const { username,password } = e.target.elements;
//     // console.log(username.value);
//     // console.dir(password.value);

//     // console.log(usernameRef.current.value);
//     // console.dir(passwordRef.current.value);

//   // }



//   return (
//     <form onSubmit={submitHandler}>
//      <label htmlFor = 'username'>username</label>
//      <input type='text' id='username' ref={usernameRef} className='username' style={{marginBottom:"10px"}} />
//      <br />
//      <label htmlFor='password'>password</label>
//      <input type='password' id='password' ref={passwordRef} className='password' />
//      <br />
//      <button>submit</button>
      
//     </form>
//   )
// }

// export default Form;
