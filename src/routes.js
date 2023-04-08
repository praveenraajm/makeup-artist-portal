import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "pages/Home/Home")
);
const NavBar = lazy(() =>
  import(/* webpackChunkName: "NavBar" */ "pages/NavBar/NavBar")
);

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/navBar" Component={NavBar} />
      </Routes>
    </Suspense>
  );
}
