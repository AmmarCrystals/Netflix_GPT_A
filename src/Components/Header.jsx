import { Netflix_Logo } from "../Utils/Constant";

const Header = () => {
  return (
    <>
      <div>
        <div className="z-50 relative">
          <img
            className="h-32 w-90 gradient-to-b from-red to-transparent absolute"
            src={Netflix_Logo}
            alt=""
          />
         
          
        </div>
      </div>
    </>
  );
};

export default Header;
