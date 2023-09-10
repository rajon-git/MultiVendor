import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGooglePlus,AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

const Login = () => {
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
          <h2 className="text-xl mb-3">Wellcome To E-Commerce</h2>
          <p className="text-sm mb-3">
            Please signin to your account and start your business
          </p>
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
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account? <Link to="/register">Sign Up here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] h-[1px] bg-slate-700"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">or</span>
              </div>
              <div className="w-[45%] h-[1px] bg-slate-700"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] rounded-md flex bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>

              <div className="w-[35px] h-[35px] rounded-md flex bg-indigo-700 shadow-lg hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>

              <div className="w-[35px] h-[35px] rounded-md flex bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <CiTwitter />
                </span>
              </div>

              <div className="w-[35px] h-[35px] rounded-md flex bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
