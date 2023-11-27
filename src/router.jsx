import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Test, Menu } from "pages/";

import { Header, Nav } from "components/";

const _pages = () => {
  return (
    <Routes>
      <Route path="/rewards" element={<Test />} />
      <Route path="/rank" element={<Test />} />
      <Route path="/course" element={<Menu />} />
      <Route path="/profile" element={<Test />} />
      <Route path="/notifications" element={<Test />} />

      <Route exact path="/" element={<Menu />} />

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
