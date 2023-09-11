import React, { useState } from "react";

const AdminLogin = () => {
    const [state,setState]=useState({
        email:"",
        password:""
      });
    
      const inputHandle=(e)=>{
        setState({
          ...state,
          [e.target.name] : e.target.value
        })
      }
    
      const submit=(e)=>{
        e.preventDefault();
        console.log(state)
      }
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2 ">
        <div className="bg-[#283046] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
                <img className="w-full h-full" src="http://localhost:3000/images/logo.png" alt="image" />
            </div>
          </div>
          <form onSubmit={submit}>
            
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input onChange={inputHandle} value={state.email}
                className="py-2 px-3 text-[#d0d2d6] outline-none border
                      border-slate-700 bg-transparent rounded-md focus:border-indigo-500
                       overflow-hidden"
                type="text"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input onChange={inputHandle} value={state.password}
                className="py-2 px-3 text-[#d0d2d6] outline-none border
                      border-slate-700 bg-transparent rounded-md focus:border-indigo-500
                       overflow-hidden"
                type="text"
                name="password"
                placeholder="Enter your password"
                id="password"
                required
              />
            </div>
            <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-5">
              Sign In
            </button>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
