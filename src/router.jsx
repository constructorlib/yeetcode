import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Test } from "pages/";

// import { Example } from "exp/";

const _pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/test" element={<Test />} />

      {/* ***EXPERIMENTAL*** */}
      {/* <Route path="/example" element={<Example />} /> */}
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <_pages />
    </BrowserRouter>
  );
};

export default Router;
