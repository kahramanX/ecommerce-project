import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components
import HomePage from "pages/Home";
import ProductDetail from "pages/ProductDetail";
import ProductCategory from "pages/ProductCategory";
import NotFound from "pages/NotFound";
import Account from "pages/Account";
import ComponentShowcase from "pages/ComponentShowcase";
import ProtectedRoute from "./ProtectedRoute";
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
        path: "/login",
        element: (
            <>
                <Header />
                <div>LOGIN</div>
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/register",
        element: (
            <>
                <Header />
                <div>REGISTER</div>
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/account",
        element: (
            <>
                <Header />
                <Account />
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
        children: [{ path: "address", element: <div>ADDRESS</div> }],
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
