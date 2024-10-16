import "./index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

// @ts-ignore
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// <StrictMode>
// </StrictMode>
