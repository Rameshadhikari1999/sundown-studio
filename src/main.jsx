import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import router from "./routes.jsx";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);