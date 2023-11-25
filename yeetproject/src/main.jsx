import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Test from "./components/tests/Test";
import Registration from "./pages/Registration/Registration";
import "./style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Registration /> */}
    <Test />
  </React.StrictMode>
);
