import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components
import HomePage from "pages/home";
import ComponentShowcase from "pages/ComponentShowcase";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

// Styles
import "assets/index.scss";

// Images
import generalBackgroundImage from "assets/generalBackgroundImage.webp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
    errorElement: <h1>error</h1>,
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
