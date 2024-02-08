import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "pages/home/App";
import ComponentShowcase from "pages/ComponentShowcase";
import "assets/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all/components",
    element: <ComponentShowcase />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
