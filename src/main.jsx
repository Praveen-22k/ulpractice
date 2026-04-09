import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { Pract } from "./pract.jsx";
import { SignIn } from "./signin.jsx";
import { SignUp } from "./signup.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <SignUp /> */}
    {/* <SignIn /> */}
    <Pract></Pract>
  </BrowserRouter>,
);
