import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components
import HomePage from "pages/Home";
import ProductDetail from "pages/ProductDetail";
import ProductCategory from "pages/ProductCategory";
import ComponentShowcase from "pages/ComponentShowcase";
import ProtectedRoute from "./ProtectedRoute";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

// Styles
import "assets/index.scss";

// Images
import generalBackgroundImage from "assets/generalBackgroundImage.webp";
import NotFound from "pages/NotFound";

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
        errorElement: <NotFound />,
    },
    {
        path: "/product/:ProductName",
        element: (
            <>
                <Header />
                <ProductDetail />
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/category/:ProductCategory",
        element: (
            <>
                <Header />
                <ProductCategory />
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/all/components",
        element: <ComponentShowcase />,
        errorElement: <NotFound />,
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
