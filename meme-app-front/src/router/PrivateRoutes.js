import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = ({ children }) => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return loginWithRedirect();
    } 
    else {
        return children
    }
};

export default PrivateRoutes;
