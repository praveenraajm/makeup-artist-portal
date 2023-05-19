import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AppBar = lazy(() =>
  import(/* webpackChunkName: "AppBar" */ "pages/Home/AppBar")
);
const About = lazy(() => import(/* webpackChunkName: "About" */ "pages/About"));
const Portfolio = lazy(() =>
  import(/* webpackChunkName: "Portfolio" */ "pages/Portfolio")
);
const Classes = lazy(() =>
  import(/* webpackChunkName: "Classes" */ "pages/Classes")
);
const Contacts = lazy(() =>
  import(/* webpackChunkName: "Contacts" */ "pages/Contacts")
);
const FineArtGallery = lazy(() =>
  import(/* webpackChunkName: "FineArtGallery" */ "pages/FineArtGallery")
);

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" exact Component={AppBar} />
        <Route path="/about" exact Component={About} />
        <Route path="/portfolio" exact Component={Portfolio} />
        <Route path="/classes" exact Component={Classes} />
        <Route path="/contacts" exact Component={Contacts} />
        <Route path="/fine-art-gallery" exact Component={FineArtGallery} />
      </Routes>
    </Suspense>
  );
}
