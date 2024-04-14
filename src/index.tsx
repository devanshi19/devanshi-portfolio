import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const element: HTMLElement | null = document?.getElementById("root");
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  );
}
