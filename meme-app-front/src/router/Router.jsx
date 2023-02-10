import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Layout,
  AllMemes,
  LoginPage,
  UploadPage,
  MemeDetailPage,
} from "../pages";

export const Router = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AllMemes />} />

          <Route path="/upload" element={<UploadPage />} />
          <Route path="/meme/:id" element={<MemeDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};
