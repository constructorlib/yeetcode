import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import store from "./context/";

import GlobalStyles from "styles/";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      {/* //* Router Logic */}
      <Router />
      {/* //* Router Logic */}
    </StyledEngineProvider>
  </Provider>
);
