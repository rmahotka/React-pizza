import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from '../pages/Cart'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);