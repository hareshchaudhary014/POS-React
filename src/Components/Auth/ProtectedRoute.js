import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./auth";

export const ProtectedRoute = ({ children }) => {
    const auth = useAuth();
    if (!auth.isLogin) {
        return <Navigate to='/login' />;
    }
    return children;
};