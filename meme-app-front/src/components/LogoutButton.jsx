import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

import { useAuth0 } from "@auth0/auth0-react";

//import { AuthContext } from "../../auth/authContext/AuthContext";
import { useContext } from "react";
import React from "react";

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  // const { logoutReducer } = useContext(AuthContext);

  const dispatch = useDispatch();
  if (!isAuthenticated) {
    dispatch(logout());
  }

  function logoutWrapper() {
    logout({ returnTo: window.location.origin });
  }

  return <button onClick={() => logoutWrapper()}>Logout</button>;
};
