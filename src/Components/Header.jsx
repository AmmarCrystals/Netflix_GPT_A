import { Netflix_Logo } from "../Utils/Constant";
import { getAuth, signOut } from "firebase/auth";
import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  const [isUserAvailable, setIsUserAvailable] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setIsUserAvailable(user?.email);
  }, [user]);
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
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
          {isUserAvailable && <button onClick={handleSignOut}>
            <p className="bg-red-500">Log Out</p>
          </button>}
        </div>

        {/* <div className="flex z-50 relative">
         
          
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Header;
