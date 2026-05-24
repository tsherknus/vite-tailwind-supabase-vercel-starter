import { useAuth } from "../context/AuthContext";
import type {ReactNode} from "react";

interface PublicRouteProps {
    children: ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
    const { loading } = useAuth(); // your auth state

    if (loading) {
        return <div>Loading...</div>; // or spinner
    }

    // User is logged in → render the requested page
    return children;
}