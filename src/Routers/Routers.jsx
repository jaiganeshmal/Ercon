import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SingleCardPaage from "../Componants/SingleCardPaage";
const Loader = React.lazy(() => import("../Componants/Loader"));
const Home = React.lazy(() => import("../Pages/Home"));
const About = React.lazy(() => import("../Pages/About"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const Products = React.lazy(() => import("../Pages/Products"));
const Clientele = React.lazy(() => import("../Pages/Clientele"));
const Accredditations = React.lazy(() => import("../Pages/Accredditations"));
const Career = React.lazy(() => import("../Pages/Career"));
const Gallery = React.lazy(() => import("../Pages/Gallery"));

const Routers = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/SingleCardPaage/:id" element={<SingleCardPaage />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/accreditations" element={<Accredditations />} />
          <Route path="/" element={<Accredditations />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
