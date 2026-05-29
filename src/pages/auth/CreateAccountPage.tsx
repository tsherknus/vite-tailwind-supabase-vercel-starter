import {Link, Navigate, useNavigate, useSearchParams} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.tsx";
import {type FormEvent, useState} from "react";

function CreateAccountPage() {
    const {signUp, session} = useAuth()
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const subscription = searchParams.get("subscription");
    const [loading, setLoading] = useState<boolean>(false);
    const [signupError, setSignupError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleRegister = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setLoading(true)
            // @ts-ignore
            const {error} = await signUp(email, password)
            setLoading(false)

            if (error) throw error

            // if the user is signing up for pro or starter pass them through to stripe
            // else navigate to the verify email step
            if (subscription === 'pro') {
                navigate("/stripe-pro")
            } else if (subscription === 'starter') {
                navigate("/stripe-starter")
            } else {
                navigate("/verify-email")
            }
        } catch (err) {
            if (err instanceof Error) {
                setSignupError(err.message)
            } else {
                setSignupError("An unexpected error occurred")
            }
        }
    }

    if (session) {
        // User is logged in → redirect to achievements
        return <Navigate to="/dashboard" replace/>;
    }

    return (
        <div className="flex flex-col justify-center m-10">
            <form onSubmit={handleRegister}>
                <h2 className="font-bold pb-2">Register</h2>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                {signupError && <div><p>There was a problem signing in:</p><p>{signupError}</p></div>}
                <div className="flex flex-col py-4">
                    <input className="p-3 mt-2 bg-[#525050] rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="p-3 mt-2 bg-[#525050] rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="w-full mt-4 p-3 rounded-sm bg-gray-900 hover:bg-gray-800 hover:ring-1 ring-gray-400 active:bg-gray-800 active:ring-1 active:ring-gray-400
                        hover:transition-colors duration-150 ease-out" type="submit" disabled={loading}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default CreateAccountPage;