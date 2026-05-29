import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";

interface PrivateProRouteProps {
    children: ReactNode;
}

export function PrivateProRoute({ children }: PrivateProRouteProps) {
    const { session, loading, subscription } = useAuth(); // your auth state

    if (loading) {
        return <div>Loading...</div>; // or spinner
    }

    if (session === undefined || session === null) {
        // User is not logged in → redirect to sign in
        return <Navigate to="/login" replace/>;
    }

    if (subscription !== 'pro') {
        return <Navigate to="/upgrade-pro" replace/>;
    }

    // User is logged in → render the requested page
    return children;
}

export default PrivateProRoute;