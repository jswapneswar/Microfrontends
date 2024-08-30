import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    counter,
  },
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
