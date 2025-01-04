import { useState } from "react";
import { Netflix_Background } from "../Utils/Constant";
import Header from "./Header";
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import checkValidation from "../Utils/formValidation";
// import { getAuth } from "firebase/auth";
import { app } from "../Utils/firebase"; // Adjust the path as needed

const LoginPage = () => {
  const [SignUP, setSignUP] = useState(false);
  const [validatoionError, setValidationError] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const result = checkValidation(
      email.current?.value,
      password.current?.value
    );
    setValidationError(result);
  };

  const handleSingUp = () => {
    setSignUP(!SignUP);
  };

  const auth = getAuth();
  createUserWithEmailAndPassword(
    auth,
    email.current?.value,
    password.current?.value
  )
    .then((userCredential) => {
      // Signed up
      console.log(userCredential);
      const user = userCredential.user;
      // ...
      console.log("User info" + user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });

  return (
    <>
      <Header />
      <div>
        <img
          className="w-full h-screen absolute"
          src={Netflix_Background}
          alt=""
        />

        <div className="bg-black bg-opacity-85 relative mx-auto top-[9rem]  h-[23rem] w-[23.5rem] ">
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
            className="pl-4 w-[18rem] h-10 bg-gray-500 mx-auto mt-4 block rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className=" pl-4 w-[18rem] h-10 bg-gray-500 mx-auto mt-4 block rounded-lg"
          />
          <p className="text-sm text-red-600 mt-4 pl-12 ">{validatoionError}</p>
          <button
            onClick={handleButtonClick}
            className="w-[18rem] hover:bg-red-500 h-10 bg-red-600 mx-auto mt-6 block rounded-lg"
          >
            {!SignUP ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-white text-md mt-4 pl-11 ">
            <span className="text-xs">New to Netflix? </span>
            <button onClick={handleSingUp}>
              {SignUP ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
