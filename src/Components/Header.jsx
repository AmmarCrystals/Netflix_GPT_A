import { Netflix_Logo } from "../Utils/Constant";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch
import { useNavigate } from "react-router";
import { removeUser } from "../Utils/userSlice"; // Import removeUser action

const Header = () => {
  const [isUserAvailable, setIsUserAvailable] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser()); // Dispatch removeUser action
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
