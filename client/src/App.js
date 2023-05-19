import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "pages/NavBar/NavBar";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <NavBar />
      <Router />
      {/* <ToastContainer /> */}
    </ThemeConfig>
  );
}
