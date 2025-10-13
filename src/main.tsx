import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout1 from "./Layout/Layout1.tsx";
import ErrorComponent from "./components/ErrorComponent.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import User from "./pages/User.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 ></Layout1>,
    errorElement: <ErrorComponent></ErrorComponent>,
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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <RouterProvider router={router}>
      <App />
      
    </RouterProvider>
  // </StrictMode>
);
