import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ComponentShowcase from "./ComponentShowcase.tsx";

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
