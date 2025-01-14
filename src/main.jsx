import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import UpdateProfile from "./routes/UpdateProfile";
import Login from "./routes/Login";
import Register from "./routes/Register";
import AuthProvider from "./providers/AuthProvider";
import DetailsOfData from "./component/DetailsOfData";
import PrivateRoutes from "./routes/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import Error from "./component/error/Error";
import Support from "./routes/Support";
import UserProfile from "./routes/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path:"/data/:id",
        element: (
          <PrivateRoutes>
            <DetailsOfData></DetailsOfData>
          </PrivateRoutes>
        ),
        loader: () =>(fetch('/data.json'))
      },
      {
        path: "/about",
        element: <About></About>,
      },{
        path: "/support",
        element:<PrivateRoutes>
          <Support></Support>
        </PrivateRoutes>
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
