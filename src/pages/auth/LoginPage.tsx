import {Link, Navigate, useNavigate} from "react-router-dom";
import {type FormEvent, useState} from "react";
import {useAuth} from "../../context/AuthContext.tsx";

function CreateAccountPage() {
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const {session} = useAuth()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const [signInError, setSignInError] = useState<string | null>(null);

    const handleLogin = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setLoading(true);
            // @ts-ignore
            const {error} = await signIn(email, password)
            setLoading(false);

            if (error) throw error;

            navigate("/achievements")
        } catch (err) {
            if (err instanceof Error) {
                setSignInError(err.message)
            } else {
                setSignInError("An unexpected error occurred")
            }
        }
    }

    if (session) {
        // User is logged in → redirect to achievements
        return <Navigate to="/dashboard" replace/>;
    }

    return (
        <div className="flex flex-col justify-center m-10">
            <form onSubmit={handleLogin}>
                <h2 className="font-bold pb-2">Login</h2>
                <p>Need to create an account? <Link to="/pricing">Sign Up</Link></p>
                {signInError && <div><p>There was a problem signing in:</p><p>{signInError}</p></div>}
                <div className="flex flex-col py-4">
                    <input className="p-3 mt-2 bg-[#525050] rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="p-3 mt-2 bg-[#525050] rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="w-full mt-4 p-3 rounded-sm bg-gray-900 hover:bg-gray-800 hover:ring-1 ring-gray-400 active:bg-gray-800 active:ring-1 active:ring-gray-400
                        hover:transition-colors duration-150 ease-out" type="submit" disabled={loading}>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountPage;