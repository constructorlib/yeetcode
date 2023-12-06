import { configureStore } from "@reduxjs/toolkit";

import testSlice from "./testSlice";
import profileSlice from "./profileSlice";
export default configureStore({
  reducer: {
    test: testSlice,
    profile: profileSlice,
  },
});
