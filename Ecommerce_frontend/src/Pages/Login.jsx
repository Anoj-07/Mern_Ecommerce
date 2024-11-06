import {useState } from "react";

const Login = () => {
  const [curerntState, setcurrentState] = useState('Login');

  const OnSubmitHandler = async(e) => {
    e.preventDefault();
  }

  return (
    <form 
    onSubmit={OnSubmitHandler}
    className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{curerntState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {curerntState === "Login" ?'': <input className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Name"
        type="text" required />
      }

      <input className="w-full px-3 py-2 border border-gray-800 "
        placeholder="email"
        type="email" required />

      <input className="w-full px-3 py-2 border border-gray-800 "
        placeholder="password"
        type="password" required />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer"> Forgot Password?</p>
          {
            curerntState === 'Login' 
            ? <p onClick={()=> setcurrentState('Sign Up')} className="cursor-pointer">Create account</p> 
            : <p onClick={() => setcurrentState('Login')} className="cursor-pointer">Login Here</p>
          }
        </div>

        <button className="bg-black text-white font-light px-8 py-2 mt-4">{curerntState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>

  )
}

export default Login