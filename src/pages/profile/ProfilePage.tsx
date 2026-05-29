import {useAuth} from "../../context/AuthContext.tsx";

function ProfilePage() {
    const {session, subscription, signOut} = useAuth()

    // @ts-ignore
    const email = session?.user.user_metadata.email

    const userSignOut = async () => {
        //@ts-ignore
        signOut()
    }

    return (
        <div>
            <p className="pb-3">Profile Page</p>
            <p className="pb-3">{email}</p>
            <p className="pb-3">Subscription Tier: {subscription}</p>
            <button className="p-3 rounded-sm bg-gray-900 hover:bg-gray-800 hover:ring-1 ring-gray-400 active:bg-gray-800 active:ring-1 active:ring-gray-400
                        hover:transition-colors duration-150 ease-out" onClick={userSignOut}>Sign Out</button>
        </div>
    )
}
export default ProfilePage;