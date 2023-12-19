import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const Navigate = useNavigate();
  const [name, setName ]=useState("");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addfull=()=>{
    if(name==="" || email==="" || password===""){
      return alert("please fill full infromation");
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate("/Todolist");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign in error:", errorCode, errorMessage);
    }
  };



  return (
    <>
      <div className='container1'>
        <div className='container1_header'>Welcome to SignIn page</div>
        <div className='container1_mid'>
          <form onClick={addfull}>
          <input type='text' placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='button' onClick={handleSignIn}>
              Sign In
            </button>
          </form>
          <p className="text11">
            No account yet? {' '}
            <NavLink to="/Signup">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
