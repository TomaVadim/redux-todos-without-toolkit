import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { App } from "@/components/app";
import { store } from "@/stores/redux/store";

const root = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
