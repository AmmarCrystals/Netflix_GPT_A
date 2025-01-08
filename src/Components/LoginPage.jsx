import { useEffect, useState } from "react";
import { Netflix_Background } from "../Utils/Constant";
import Header from "./Header";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import checkValidation from "../Utils/formValidation";
import { app } from "../Utils/firebase"; // Adjust the path as needed
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // Added useDispatch and useSelector
import { addUser, removeUser } from "../Utils/userSlice"; // Import addUser and removeUser actions

const LoginPage = () => {
  const dispatch = useDispatch();

  const [SignUP, setSignUP] = useState(false);
  const [validatoionError, setValidationError] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const result = checkValidation(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );
    setValidationError(result);
    signInWithEmailAndPassword(
      auth,
      email.current?.value,
      password.current?.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(addUser(user)); // Dispatch addUser action
        navigate("/browse");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const auth = getAuth();

  const handleSingUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      email.current?.value,
      password.current?.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(addUser(user)); // Dispatch addUser action
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

    updateProfile(auth.currentUser, {
      displayName: email.current?.value,
    })
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })); // ...
      })
      .catch((error) => {
        // An error occurred
        // ...clg
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })); // ...
        console.log(displayName);
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  const handleFormChange = () => {
    setSignUP(!SignUP);
  };

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
              onClick={handleButtonClick}
              className="w-[18rem] hover:bg-red-500 h-10 bg-red-600 mx-auto mt-6 block rounded-lg"
            >
              {" "}
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
