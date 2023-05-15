import { Class } from "@mui/icons-material";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";

const MainGrid = lazy(() =>
  import(/* webpackChunkName: "MainGrid" */ "pages/Home/MainGrid")
);
const NavBar = lazy(() =>
  import(/* webpackChunkName: "NavBar" */ "pages/NavBar/NavBar")
);
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ "pages/About/About")
);
const Portfolio = lazy(() =>
  import(/* webpackChunkName: "Portfolio" */ "pages/Portfolio/Portfolio")
);
const Classes = lazy(() =>
  import(/* webpackChunkName: "Classes" */ "pages/Classes/Classes")
);
const Contacts = lazy(() =>
  import(/* webpackChunkName: "Contacts" */ "pages/Contacts/Contacts")
);

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" exact Component={MainGrid} />
        {/* <Route path="/navBar" exact Component={NavBar} /> */}
        <Route path="/about" exact Component={About} />
        <Route path="/portfolio" exact Component={Portfolio} />
        <Route path="/classes" exact Component={Classes} />
        <Route path="/contacts" exact Component={Contacts} />
      </Routes>
    </Suspense>
  );
}
