import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Test, Menu } from "pages/";

import { Header, Nav } from "components/";

const _pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/test" element={<Test />} />

      {/* ***EXPERIMENTAL*** */}
      {/* <Route path="/example" element={<Example />} /> */}
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <_pages />
      <Nav />
    </BrowserRouter>
  );
};

export default Router;
