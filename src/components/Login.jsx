import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate the Form Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign In/Sign Up
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " : " + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen bg-black">
        <img
          className="absolute w-full h-full object-cover z-1 opacity-[0.5]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt=""
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 py-12 px-10 bg-black/65 rounded-md shadow-lg max-w-md w-full"
        >
          <h1 className="font-bold text-4xl mb-10 text-white text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              required
              ref={name}
              type="text"
              placeholder="Full Name"
              className="block w-full p-3 my-4 border border-gray-500 text-white rounded max-w-[300px] mx-auto"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="block w-full p-3 my-4 border border-gray-500 text-white rounded max-w-[300px] mx-auto"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="block w-full p-3 my-4 border border-gray-500 text-white rounded max-w-[300px] mx-auto"
          />
          <p className="text-red-600 ml-9">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            type="submit"
            className="block w-full p-3 my-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 max-w-[300px] mx-auto cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white z-10 ml-9 mt-8 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a User? Sign In here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
