import {useNavigate} from "react-router-dom";

function DashboardPage() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col w-full">
            <p>Dashboard Page</p>
            <button className="w-full rounded-sm mt-4 p-3 bg-gray-400 hover:bg-gray-800 hover:ring-1
                        ring-gray-700 active:bg-gray-600 active:ring-1 active:ring-gray-400
                        hover:transition-colors duration-150 ease-out text-black hover:text-gray-300
                        font-bold text-lg"
                    onClick={() => navigate("/free")}>Free Content</button>
            <button className="w-full rounded-sm mt-4 p-3 bg-gray-400 hover:bg-gray-800 hover:ring-1
                        ring-gray-700 active:bg-gray-600 active:ring-1 active:ring-gray-400
                        hover:transition-colors duration-150 ease-out text-black hover:text-gray-300
                        font-bold text-lg"
                    onClick={() => navigate("/starter")}>Starter Content</button>
            <button className="w-full rounded-sm mt-4 p-3 bg-gray-400 hover:bg-gray-800 hover:ring-1
                        ring-gray-700 active:bg-gray-600 active:ring-1 active:ring-gray-400
                        hover:transition-colors duration-150 ease-out text-black hover:text-gray-300
                        font-bold text-lg"
                    onClick={() => navigate("/pro")}>Pro Content</button>
        </div>
    )
}
export default DashboardPage;