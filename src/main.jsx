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
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/shop",
      //   element: <Shop />,
      // },
      // {
      //   path: "/cart",
      //   element: (
      //     <PrivateRoute>
      //       <Cart />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/join",
      //   element: <JoinUs />,
      // },
      // {
      //   path: "/categoryDetails/:category",
      //   element: <CategoryDetails />,
      // },
    ],
  },
  // {
  //   path: "/signUp",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/checkout",
  //   element: <Checkout />,
  // },
  // {
  //   path: "/invoice/:transactionId",
  //   element: <Invoice />,
  // },
  
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} /> <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
