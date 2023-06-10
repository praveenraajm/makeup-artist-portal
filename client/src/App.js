// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";

import "react-toastify/dist/ReactToastify.css";
import NavBar from "pages/NavBar/NavBar";
import Footer from "pages/Footer/Footer";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <NavBar />
      <Router />
      {/* <ToastContainer /> */}
      <Footer />
    </ThemeConfig>
  );
}
