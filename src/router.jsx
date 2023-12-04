import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Test, Menu, Rank, Quest, Notification, Profile } from "pages/";

import { Header, Nav } from "components/";

const Courses = () => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

const _pages = () => {
  return (
    <Routes>
      <Route path="/quest" element={<Quest />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notification" element={<Notification />} />
      <Route exact path="/" element={<Courses />} />
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <_pages />
      <Nav />
    </BrowserRouter>
  );
};

export default Router;
