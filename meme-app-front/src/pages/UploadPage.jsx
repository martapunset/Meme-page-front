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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({});

  const onSubmit = async (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;

    const { category, title, url } = data;

    const memeData = { category, title, url };
    const formData = new FormData();

    if (data.file) formData.append("file", data.file[0]);

    formData.append("object", JSON.stringify(memeData));

    const res = await fetch(`http://localhost:4000/memes/post/${_id}`, {
      method: "POST",
      body: formData,
    });
    const datares = await res.json();

    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    if (res.status === 200) navigate("/");
  };

  return (
    <>
      <div>
        <h1> Meme/ Gifs Upload</h1>
      </div>

      <FlexContainer>
        <UploadForm onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <label>Choose a name</label>
            <input type="text" placeholder="name" {...register("title")} />
          </Field>
          <Field>
            <label>Choose a category</label>

            <input
              type="text"
              placeholder="category"
              {...register("category")}
            />
          </Field>
          <div className="uploadField">
            <Field>
              <label>paste meme-s url here</label>
              <input type="text" {...register("url")} />
            </Field>
          </div>
          <h3>Upload from your computer</h3>
          <Field className="uploadField">
            <input type="file" {...register("file")} />
          </Field>
          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </UploadForm>
        <ImageContainer>
          <img src="https://media.tenor.com/P5DB2iGAecsAAAAi/peach-cat.gif" />
        </ImageContainer>
      </FlexContainer>
    </>
  );
};

const ImageContainer = styled.div`
  padding-top: 80px;
  width: 300px;
  height: 300px;
`;
const UploadForm = styled.form`
  height: 300px;
  max-width: 500x;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0 auto;
  align-items: center;
  margin: 100px;
  margin-top: 50px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  min-width: 430px;
  margin: 5px 10px;

  & > input {
    margin: 0 10px;
    width: 250px;
    border-radius: 10px;
    height: 30px;
    padding: 8px;
    border: 1px;
  }
`;

const Button = styled.button`
  background-color: #e061ba;
  border: none;
  color: #fff;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: 40px;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background-color: #e692da;
  }
`;

const FlexContainer = styled.div`
  padding-top: 50px;
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
`;
