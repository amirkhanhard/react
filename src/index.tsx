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
import { Provider } from "react-redux";
import {store} from "./store/appStore"
import Cart from "./pages/Cart";

const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    errorElement: <ErrorComponent onRetry={(val:any)=>{console.log("Try again clicked"+ val)}}/>,
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
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
