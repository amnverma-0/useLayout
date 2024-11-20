import React, { useRef } from 'react'

const Formwithfocus = () => {

    const nameREf = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handlesubmit = () =>{
      
      if(nameREf.current && Document.activeElement === nameREf.current){
        emailRef.current.focus();
      }
      else if(emailRef.current && Document.activeElement === emailRef.current){
        passwordRef.current.focus();
      }
      else if(passwordRef.current && Document.activeElement === emailRef.current){
        nameREf.current.focus();
      }
    };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>NAME :</label>
          <input type="text" ref={nameREf} placeholder='name'/>
          <label>E-MAIL :</label>
          <input type='email' ref={emailRef} placeholder='email'/>
          <label>PASSWORD :</label>
          <input type='password' ref={passwordRef} placeholder='password'/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Formwithfocus
