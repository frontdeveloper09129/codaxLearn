import { fetchingGetMeProfile, Logout } from "../services/api.services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export const Header = () => {
    useEffect(() => {
        GetMeProfile()
    }, [])

    const [UserProfile, setUserProfile] = useState({});
    const navigate = useNavigate();


    const GetMeProfile = async () => {
        try {
            const data = await fetchingGetMeProfile()

            setUserProfile(data.user)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const HandleLogout = async () => {
        try {
            const data = await Logout();
            console.log(data)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header className="w-full sticky top-0 z-20 border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <a href="#" className="text-2xl font-bold tracking-tight">codaxLearn</a>

                    <nav className="hidden flex-wrap gap-2 text-sm font-medium text-slate-600 sm:flex">
                        <a href="#" className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Home</a>
                        <a href="#career-context" className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Context</a>
                        <a href="#contact" className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Contact</a>
                        <a href="#learn" className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Learn</a>
                        <a href="#careers" className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Careers</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="flex max-w-[180px] items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                J
                            </div>
                            {UserProfile && (
                                <div className="min-w-0">
                                    <p className="text-xs font-medium text-slate-500">Welcome</p>
                                    <p className="truncate text-sm font-bold text-slate-950">{UserProfile.username}</p>
                                </div>
                            )}
                        </div>
                        <details className="relative sm:hidden">
                            <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                                Menu
                            </summary>
                            <nav className="absolute right-0 mt-2 w-48 rounded-md border border-slate-200 bg-white p-2 text-sm font-medium text-slate-600 shadow-lg">
                                <a href="#" className="block rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Home</a>
                                <a href="#career-context" className="block rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Context</a>
                                <a href="#contact" className="block rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Contact</a>
                                <a href="#learn" className="block rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Learn</a>
                                <a href="#careers" className="block rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">Careers</a>
                                <button
                                    className="rounded-md border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm transition hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 active:scale-95"
                                    onClick={HandleLogout}>
                                    Logout
                                </button>
                            </nav>
                        </details>
                    </div>
                </div>
            </div>
        </header>
    )
}