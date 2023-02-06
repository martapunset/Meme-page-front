import { Routes, Route, Navigate } from "react-router-dom";
import {
  Layout,
  AllMemes,
  LoginPage,
  UploadPage,
  MemeDetailPage,
} from "../pages";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<Layout />}>
          <Route path="/" element={<AllMemes />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/:id" element={<MemeDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};
