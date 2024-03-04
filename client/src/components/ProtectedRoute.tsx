import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const user = true;
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default ProtectedRoute;
