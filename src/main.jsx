import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout.jsx"
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import ErrorComponent from './components/ErrorComponent'
import User from './components/User'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<ErrorComponent />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/user/:userId",
        element:<User />
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </StrictMode>,
)
