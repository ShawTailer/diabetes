import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./index.css";

import Home from "./Components/Home"
import Root from "./Root/Root";
import InfoPage from "./Components/InfoPage";
import MyIntroPage from "./Components/MyIntroPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "info/:section",   
        element: <InfoPage />,
      },
      
    ],
  },
  {
    path: "gioi-thieu",  // not nested in Root anymore
    element: <MyIntroPage />,
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} /> <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
