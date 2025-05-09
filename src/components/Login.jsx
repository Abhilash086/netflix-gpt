import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <div className="relative h-screen bg-black">
        <img
          className="absolute w-full h-full object-cover z-1 opacity-[0.5]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt=""
        />

        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 py-12 px-10 bg-black/65 rounded-md shadow-lg max-w-md w-full">
          <h1 className="font-bold text-4xl mb-10 text-white text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="block w-full p-3 my-4 border border-gray-500 text-white rounded max-w-[300px] mx-auto"
          />}
          <input
            type="text"
            placeholder="Email"
            className="block w-full p-3 my-4 border border-gray-500 text-white rounded max-w-[300px] mx-auto"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3 my-4 border border-gray-500 text-white rounded max-w-[300px] mx-auto"
          />
          <button
            type="submit"
            className="block w-full p-3 my-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 max-w-[300px] mx-auto cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white z-10 ml-9 mt-8 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a User? Sign In here"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
