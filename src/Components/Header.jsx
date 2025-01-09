import { Netflix_Logo } from "../Utils/Constant";
import {  signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch
import { useNavigate } from "react-router";
import { removeUser } from "../Utils/userSlice"; // Import removeUser action
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [isUserAvailable, setIsUserAvailable] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <>
      <div className="absolute z-50 w-full ">
        <div className="relative z-90 w-full flex justify-between  items-center px-8 ">
          <img className="h-32 w-[18rem] " src={Netflix_Logo} alt="" />{" "}
          {
            <button onClick={handleSignOut}>
              <p className="bg-red-500">Log Out</p>
            </button>
          }
        </div>

        {/* <div className="flex z-50 relative">
         
          
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Header;
