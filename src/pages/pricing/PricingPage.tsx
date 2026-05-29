import {useAuth} from "../../context/AuthContext.tsx";
import {Navigate, useNavigate} from "react-router-dom";

function PricingPage() {
    const { session, subscription } = useAuth();
    const navigate = useNavigate()

    if (session) {
        if (subscription === 'pro') {
            return <Navigate to="/dashboard" replace/>;
        } else if (subscription === 'starter') {
            return <Navigate to="/upgrade-pro" replace/>;
        } else {
            return <Navigate to="/upgrade-starter" replace/>;
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row flex-wrap w-full mt-2">
                <div className="flex flex-col items-start justify-start w-full h-[23rem] min-w-[16rem] s
                m:max-w-[18rem] sm:mr-4 md:max-w-[22rem] mb-4 rounded-md p-8 bg-gray-900">
                    <p className="font-bold text-xl">Free Tier</p>
                    <p className="mt-2">Get them hooked with a free service.</p>
                    <div className="mt-4">
                        <div><span className="font-bold text-2xl">Free</span><span>/month</span></div>
                    </div>
                    <button className="w-full rounded-sm mt-4 p-3 bg-gray-400 hover:bg-gray-800 hover:ring-1
                            ring-gray-700 active:bg-gray-600 active:ring-1 active:ring-gray-400
                            hover:transition-colors duration-150 ease-out text-black hover:text-gray-300
                            font-bold text-lg"
                            onClick={() => navigate("/register")}>Get Started</button>
                    <div className="mt-6 text-lg">Feature 1</div>
                    <div className="mt-2 text-lg">Feature 2</div>
                    <div className="mt-2 text-lg">Feature 3</div>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-[23rem] min-w-[16rem] s
                m:max-w-[18rem] sm:mr-4 md:max-w-[22rem] mb-4 rounded-md p-8 bg-gray-900 ">
                    <p className="font-bold text-xl">Starter Tier</p>
                    <p className="mt-2">Basic plan with limited services.</p>
                    <div className="mt-4">
                        <div><span className="font-bold text-2xl">$9</span><span>/month</span></div>
                    </div>
                    <button className="w-full rounded-sm mt-4 p-3 bg-gray-400 hover:bg-gray-800 hover:ring-1
                            ring-gray-700 active:bg-gray-600 active:ring-1 active:ring-gray-400
                            hover:transition-colors duration-150 ease-out text-black hover:text-gray-300
                            font-bold text-lg"
                            onClick={() => navigate("/register?subscription=starter")}>Try Starter</button>
                    <div className="mt-6 text-lg">Feature 1</div>
                    <div className="mt-2 text-lg">Feature 2</div>
                    <div className="mt-2 text-lg">Feature 3</div>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-[23rem] min-w-[16rem] s
                m:max-w-[18rem] sm:mr-4 md:max-w-[22rem] mb-4 rounded-md p-8 bg-gray-900 ">
                    <p className="font-bold text-xl">Pro Tier</p>
                    <p className="mt-2">Complete package, no compromises.</p>
                    <div className="mt-4">
                        <div><span className="font-bold text-2xl">$29</span><span>/month</span></div>
                    </div>
                    <button className="w-full rounded-sm mt-4 p-3 bg-gray-400 hover:bg-gray-800 hover:ring-1
                            ring-gray-700 active:bg-gray-600 active:ring-1 active:ring-gray-400
                            hover:transition-colors duration-150 ease-out text-black hover:text-gray-300
                            font-bold text-lg"
                            onClick={() => navigate("/register?subscription=pro")}>Go Pro</button>
                    <div className="mt-6 text-lg">Feature 1</div>
                    <div className="mt-2 text-lg">Feature 2</div>
                    <div className="mt-2 text-lg">Feature 3</div>
                </div>
            </div>
        </div>
    )
}

export default PricingPage;