import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

export const UploadPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user: userAuth0 } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  // const { _id } = user;

  if (!isAuthenticated) loginWithRedirect();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    //defaultValues: user,
  });

  const onSubmit = async (data) => {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    // const userData = { _id, ...data };
    const { category, title, url } = data;
    console.log(category, title, url);
    const memeData = { category, title, url };
    const formData = new FormData();
    if (data.file) formData.append("file", data.file[0]);

    formData.append("object", JSON.stringify(memeData));

    const res = await fetch(`http://localhost:4000/memes/post/${_id}`, {
      method: "POST",
      body: formData,
    });
    const datares = await res.json();
    console.log(datares);
    //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
    <>
      <h1> File Upload</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register("title")} />
        <input type="text" placeholder="category" {...register("category")} />
        <div className="uploadField">
          <hr></hr>

          <label>paste url</label>
          <input type="text" {...register("url")} />
        </div>

        <div className="uploadField">
          <label>Upload from your computer</label>

          <input type="file" {...register("file")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const UploadForm = styled.form`
  height: 200px;
  max-width: 600x;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0 auto;
  align-items: center;
  margin: 200px;

  .uploadField {
    height: 100px;
    padding: 100px;
    margin: 50px;
    display: flex;
    flex-direction: column;
  }

  // background: #18191e;
  //background-color: black;
`;

function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="File URL" id="fullWidth" />
    </Box>
  );
}
