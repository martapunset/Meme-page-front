import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavBar } from "../components";
import { Outlet } from 'react-router-dom';
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { ImageList } from "@mui/material";
import { AllMemes } from "./AllMemes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Layout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid className="base-container" r>
          <Grid item xs={12}>
            <NavBar maxWidth="xl"></NavBar>
          </Grid>

          <Grid item xs={12}>
            <Outlet/>
          </Grid>
          <Grid item xs={12}>
            <Item>footer</Item>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
