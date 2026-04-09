import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "./signin.jsx";
import { SignUp } from "./signup.jsx";
import { Pract } from "./pract.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/chat" element={<Pract />} />
    </Routes>
  </BrowserRouter>,
);
