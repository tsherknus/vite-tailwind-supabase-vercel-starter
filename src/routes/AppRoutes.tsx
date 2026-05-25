import {BrowserRouter, Route, Routes} from "react-router-dom";
import VerifyEmailPage from "../pages/auth/VerifyEmailPage.tsx";
import LoginPage from "../pages/auth/LoginPage.tsx";
import RegisterPage from "../pages/auth/RegisterPage.tsx";
import LandingPage from "../pages/landing/LandingPage.tsx";
import DashboardPage from "../pages/dashboard/DashboardPage.tsx";
import {PrivateRoute} from "./PrivateRoute.tsx";
import NotFoundPage from "../pages/misc/NotFoundPage.tsx";
import AppLayout from "../layout/AppLayout.tsx";
import {PublicRoute} from "./PublicRoute.tsx";
import ProfilePage from "../pages/profile/ProfilePage.tsx";
import PricingPage from "../pages/pricing/PricingPage.tsx";
import {PrivateFreeRoute} from "./PrivateFreeRoute.tsx";
import FreePage from "../pages/free/FreePage.tsx";
import {PrivateProRoute} from "./PrivateProRoute.tsx";
import ProPage from "../pages/pro/ProPage.tsx";
import {PrivateStarterRoute} from "./PrivateStarterRoute.tsx";
import StarterPage from "../pages/starter/StarterPage.tsx";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<AppLayout><PublicRoute><LoginPage/></PublicRoute></AppLayout>}/>
                <Route path="/register" element={<AppLayout><PublicRoute><RegisterPage/></PublicRoute></AppLayout>}/>
                <Route path="/verify-email" element={<AppLayout><PublicRoute><VerifyEmailPage/></PublicRoute></AppLayout>}/>
                <Route path="/pricing" element={<AppLayout><PublicRoute><PricingPage/></PublicRoute></AppLayout>}/>

                <Route path="/" element={<AppLayout><LandingPage/></AppLayout>}/>
                <Route path="/dashboard" element={<AppLayout><PrivateRoute><DashboardPage/></PrivateRoute></AppLayout>}/>
                <Route path="/profile" element={<AppLayout><PrivateRoute><ProfilePage/></PrivateRoute></AppLayout>}/>

                <Route path="*" element={<NotFoundPage/>}/>

                <Route path="/free" element={<AppLayout><PrivateFreeRoute><FreePage/></PrivateFreeRoute></AppLayout>}></Route>

                <Route path="/starter" element={<AppLayout><PrivateStarterRoute><StarterPage/></PrivateStarterRoute></AppLayout>}></Route>

                <Route path="/pro" element={<AppLayout><PrivateProRoute><ProPage/></PrivateProRoute></AppLayout>}></Route>
            </Routes>
        </BrowserRouter>
    )
}