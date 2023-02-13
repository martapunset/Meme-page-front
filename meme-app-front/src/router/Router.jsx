import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import {
  Layout,
  AllMemes,
  UploadPage,
  MemeDetailPage,
} from "../pages";

export const Router = () => {



  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AllMemes />} />

          <Route path="/upload" element={<PrivateRoutes><UploadPage /></PrivateRoutes>} />   
          <Route path="/meme/:id" element={<MemeDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};
