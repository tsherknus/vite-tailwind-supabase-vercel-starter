import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import {type ReactNode} from "react";

interface PrivateStarterRouteProps {
    children: ReactNode;
}

export function PrivateStarterRoute({ children }: PrivateStarterRouteProps) {
    const { session, loading, subscription } = useAuth(); // your auth state

    if (loading) {
        return <div>Loading...</div>; // or spinner
    }

    if (session === undefined || session === null) {        // User is not logged in → redirect to sign in
        return <Navigate to="/login" replace/>;
    }

    console.log(subscription)

    if (subscription === 'starter' || subscription === 'pro') {
        // User is logged in → render the requested page
        return children;
    } else {
        return <Navigate to="/upgrade-starter" replace/>;
    }
}

export default PrivateStarterRoute;