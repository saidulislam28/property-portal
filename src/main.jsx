import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WebLogo from './assets/propertyPortalLogo.png';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><img src={WebLogo} alt="" /></div>
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
