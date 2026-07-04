import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// The dashboard is open by default so the template loads straight to the app
// as a public demo. Set REQUIRE_AUTH to true to gate every /dashboard route:
// visitors without an 'Auth' flag in localStorage are sent to /signin.
const REQUIRE_AUTH = false;

export const ProtectedRoute = () => {
    if (REQUIRE_AUTH && !localStorage.getItem('Auth')) {
        return <Navigate to='/signin' replace />;
    }

    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};
