import { Netflix_Logo } from "../Utils/Constant";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const Header = () => {
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
      <div>
        <div className="flex z-50 relative">
          <button onClick={handleSignOut}>
            <img
              className="h-32 w-90 gradient-to-b from-red to-transparent absolute"
              src={Netflix_Logo}
              alt=""
            />
          </button>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Header;
