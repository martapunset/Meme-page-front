import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Layout.css";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";
import { Email } from "@mui/icons-material";
import { postUserByEmail } from "../api/apiUsers";
import { useEffect } from "react";
import { FilterBar } from "../components/FilterBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Layout = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user: userAuth0 } = useAuth0();
  console.log(isAuthenticated);

  useEffect(() => {
 

    if (isAuthenticated) {
      const tempUser = {
        firstName: userAuth0.given_name || "default_name",
        lastName: userAuth0.family_name || "default_lastname",
        userName: userAuth0.nickName || "DEFAULT NICKname",
        email: userAuth0.email,
        picture: userAuth0.picture,
        loggedIn: true,
      };
      const userAsync = async () => {
        const user = await postUserByEmail(tempUser);

        dispatch(login(user));
        localStorage.setItem("user", JSON.stringify(user));
      };
      userAsync();
    }
  }, [isAuthenticated]);

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="grid-container">
        <div className="header">
          {" "}
          <NavBar>   </NavBar>
        </div>
        <div className="menu">
       
        </div>
        <div className="main">
          <Outlet />
        </div>

        <div className="footer"> Footer</div>
      </div>
    </React.Fragment>
  );
};
