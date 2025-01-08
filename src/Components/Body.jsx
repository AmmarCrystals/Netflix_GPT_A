import App from "../App";
import Header from "./Header";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // if (user) {
      //   const { uid, email, displayName } = auth.currentUser;
      // dispatch(addUser({ uid: uid, email: email, displayName: displayName })); // ...
      // } else {
      //   dispatch(removeUser());
      // }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
