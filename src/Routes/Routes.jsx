import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home></Home> },
        {path: '/category/:id', element: <CategoryNews></CategoryNews>}
    ],
  },
  { path: "/about", element: <About></About> },
      { path: "/career", element: <Career></Career> },
  {
    path: "*",
    element: <h2 className="text-8xl text-center">Error 404</h2>,
  },
]);

export default router;
