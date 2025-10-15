import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout1 from "./Layout/Layout1";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import RestaurantInfo from "./pages/RestaurantInfo";

const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
