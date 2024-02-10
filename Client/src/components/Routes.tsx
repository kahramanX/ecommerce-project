import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/home";
import ComponentShowcase from "pages/ComponentShowcase";
import "assets/index.scss";
import generalBackgroundImage from "assets/generalBackgroundImage.webp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/all/components",
    element: <ComponentShowcase />,
  },
]);

const Routes = () => {
  return (
    <div
      className={`bg-center bg-repeat`}
      style={{ backgroundImage: `url(${generalBackgroundImage})` }}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
