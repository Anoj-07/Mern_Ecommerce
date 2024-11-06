import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [curerntState, setcurrentState] = useState('Login');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //to navigate to home page after login
useEffect(() => {
  if(token){
    navigate('/');
  }
}, [token]);

  // connecting backend of sign up and login functionality
  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if(curerntState == 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password
        })
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        }else{
          toast.error(response.data.message);
        }

      }else{
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password
        })
       if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
       }else{
        toast.error(response.data.message);
       }
      }

    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  }

  return (
    <form
      onSubmit={OnSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{curerntState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {curerntState === "Login" ? '' : <input
          onChange={(e) => setName(e.target.value)} value={name}
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          type="text" required />
      }

      <input
        onChange={(e) => setEmail(e.target.value)} value={email}
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="email"
        type="email" required />

      <input 
      onChange={(e) => setPassword(e.target.value)} value={password}
      className="w-full px-3 py-2 border border-gray-800 "
        placeholder="password"
        type="password" required />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer"> Forgot Password?</p>
        {
          curerntState === 'Login'
            ? <p onClick={() => setcurrentState('Sign Up')} className="cursor-pointer">Create account</p>
            : <p onClick={() => setcurrentState('Login')} className="cursor-pointer">Login Here</p>
        }
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">{curerntState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>

  )
}

export default Login