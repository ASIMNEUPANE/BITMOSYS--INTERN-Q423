import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/Home.jsx";
import Cryptos from "./page/Cryptos.jsx";
import Layout from "./Layouts/Layout.jsx";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, newStore } from "./store.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/Cryptos", element: <Cryptos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={newStore}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
