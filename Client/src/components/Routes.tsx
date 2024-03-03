import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import ComponentShowcase from "pages/ComponentShowcase";
import ProtectedRoute from "./ProtectedRoute";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

// Images
import generalBackgroundImage from "assets/generalBackgroundImage.webp";

// Pages
import HomePage from "pages/Home";
import ProductDetail from "pages/ProductDetail";
import ProductCategory from "pages/ProductCategory";
import NotFound from "pages/NotFound";
import Account from "pages/Account";
import LoginRegister from "pages/LoginRegister";

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
                <ProtectedRoute>
                    <LoginRegister />
                </ProtectedRoute>
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
                <ProtectedRoute>
                    <LoginRegister />
                </ProtectedRoute>
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/account",
        errorElement: <NotFound />,
        children: [
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <div>PROFILE</div>
                    </ProtectedRoute>
                ),
            },
            {
                path: "address",
                element: (
                    <ProtectedRoute>
                        <div>ADDRESS</div>
                    </ProtectedRoute>
                ),
            },
        ],
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
