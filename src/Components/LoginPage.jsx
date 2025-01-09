import { auth } from "../Utils/firebase"; // Import auth from firebase
import { useEffect, useState } from "react";
import { Netflix_Background } from "../Utils/Constant";
import Header from "./Header";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import checkValidation from "../Utils/formValidation";
import { app } from "../Utils/firebase"; // Adjust the path as needed
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // Added useDispatch and useSelector
import { addUser, removeUser } from "../Utils/userSlice"; // Import addUser and removeUser actions

const LoginPage = () => {
  const [SignUP, setSignUP] = useState(false);
  const [validatoionError, setValidationError] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const result = checkValidation(
    name.current?.value,
    email.current?.value,
    password.current?.value
  );

  // Handle form change

  const handleFormChange = () => {
    setSignUP(!SignUP);
  };

  // SignUP function
  const handleSingUp = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // Sign In function

  const handleSingIn = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  // sign out function

  //   import { getAuth, signOut } from "firebase/auth";

  // const auth = getAuth();
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

  return (
    <>
      <Header />
      <div>
        <img
          className="w-full h-screen absolute"
          src={Netflix_Background}
          alt=""
        />

        <form
          onClick={(e) => {
            e.preventDefault();
          }}
          className="bg-black bg-opacity-85 relative mx-auto top-[9rem]  h-[23rem] w-[23.5rem] "
        >
          <h1 className="text-white text-3xl font-semibold pl-11 pt-6">
            {!SignUP ? "Sign In" : "Sign Up"}
          </h1>

          {SignUP && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="pl-4 w-[18rem] h-10 bg-gray-500 mx-auto mt-4 block rounded-lg"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email or phone number"
            autoComplete="Email"
            className="pl-4 w-[18rem] h-10 bg-gray-500 mx-auto mt-4 block rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className=" pl-4 w-[18rem] h-10 bg-gray-500 mx-auto mt-4 block rounded-lg"
          />
          <p className="text-sm text-red-600 mt-4 pl-12 ">{validatoionError}</p>

          {!SignUP ? (
            <button
              onClick={handleSingIn}
              className="w-[18rem] hover:bg-red-500 h-10 bg-red-600 mx-auto mt-6 block rounded-lg"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={handleSingUp}
              className="w-[18rem] hover:bg-red-500 h-10 bg-red-600 mx-auto mt-6 block rounded-lg"
            >
              {" "}
              Sign Up
            </button>
          )}

          <p className="text-white text-md mt-4 pl-11 ">
            <span className="text-xs">New to Netflix? </span>
            <button onClick={handleFormChange}>
              {SignUP ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
