import {BrowserRouter, Route, Routes} from "react-router-dom";
import VerifyEmailPage from "../pages/auth/VerifyEmailPage.tsx";
import LoginPage from "../pages/auth/LoginPage.tsx";
import CreateAccountPage from "../pages/auth/CreateAccountPage.tsx";
import LandingPage from "../pages/landing/LandingPage.tsx";
import DashboardPage from "../pages/dashboard/DashboardPage.tsx";
import NotFoundPage from "../pages/misc/NotFoundPage.tsx";
import AppLayout from "../layout/AppLayout.tsx";
import PublicRoute from "./PublicRoute.tsx";
import ProfilePage from "../pages/profile/ProfilePage.tsx";
import PricingPage from "../pages/pricing/PricingPage.tsx";
import PrivateFreeRoute from "./PrivateFreeRoute.tsx";
import FreePage from "../pages/free/FreePage.tsx";
import PrivateProRoute from "./PrivateProRoute.tsx";
import ProPage from "../pages/pro/ProPage.tsx";
import PrivateStarterRoute from "./PrivateStarterRoute.tsx";
import StarterPage from "../pages/starter/StarterPage.tsx";
import EmailVerifiedPage from "../pages/auth/EmailVerifiedPage.tsx";
import UpgradeStarterPage from "../pages/pricing/UpgradeStarterPage.tsx";
import UpgradeProPage from "../pages/pricing/UpgradeProPage.tsx";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout><LandingPage/></AppLayout>}/>

                <Route path="/login" element={<AppLayout><PublicRoute><LoginPage/></PublicRoute></AppLayout>}/>
                <Route path="/register" element={<AppLayout><PublicRoute><CreateAccountPage/></PublicRoute></AppLayout>}/>
                <Route path="/verify-email" element={<AppLayout><PublicRoute><VerifyEmailPage/></PublicRoute></AppLayout>}/>
                <Route path="/pricing" element={<AppLayout><PublicRoute><PricingPage/></PublicRoute></AppLayout>}/>

                <Route path="/email-verified" element={<AppLayout><PrivateFreeRoute><EmailVerifiedPage/></PrivateFreeRoute></AppLayout>}/>

                <Route path="/dashboard" element={<AppLayout><PrivateFreeRoute><DashboardPage/></PrivateFreeRoute></AppLayout>}/>
                <Route path="/profile" element={<AppLayout><PrivateFreeRoute><ProfilePage/></PrivateFreeRoute></AppLayout>}/>

                <Route path="*" element={<NotFoundPage/>}/>

                <Route path="/upgrade-starter" element={<AppLayout><PrivateFreeRoute><UpgradeStarterPage/></PrivateFreeRoute></AppLayout>}></Route>
                <Route path="/upgrade-pro" element={<AppLayout><PrivateFreeRoute><UpgradeProPage/></PrivateFreeRoute></AppLayout>}></Route>

                <Route path="/free" element={<AppLayout><PrivateFreeRoute><FreePage/></PrivateFreeRoute></AppLayout>}></Route>

                <Route path="/starter" element={<AppLayout><PrivateStarterRoute><StarterPage/></PrivateStarterRoute></AppLayout>}></Route>

                <Route path="/pro" element={<AppLayout><PrivateProRoute><ProPage/></PrivateProRoute></AppLayout>}></Route>
            </Routes>
        </BrowserRouter>
    )
}