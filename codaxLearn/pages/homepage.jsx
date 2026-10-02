import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const [loggedin, setLoggedin] = useState(false)
    const [checkingAuth, setChekingAuth] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/auth/api/check-auth", {
            method: "GET",
            credentials: "include"
        })

            .then(res => res.json())
            .then(data => {
                if (data.loggedin === true) {
                    setLoggedin(data.loggedin);
                    setChekingAuth(true)
                    navigate("/dash_board")
                } else {
                    setLoggedin(false);
                    setChekingAuth(false)
                }
            })

            .catch(err => console.log("please log in or error", err))
    }, [navigate])

    // Replace your old if(checkingAuth) block with this:
    if (checkingAuth) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
                <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-8 shadow-lg max-w-xs w-full">
                    {/* Custom Spinning Loader */}
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"></div>

                    {/* Loading Text */}
                    <div className="text-center font-medium text-gray-700 animate-pulse">
                        Checking session...
                    </div>

                    <p className="text-xs text-gray-400 text-center">
                        Please wait a moment.
                    </p>
                </div>
            </div>
        );
    }
    return (


        <main className="min-h-screen">

            <div className="min-h-screen bg-gray-100">

                {/* Header */}
                <header className="flex flex-col gap-4 border-b bg-white px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">

                    {/* Logo */}
                    <div>
                        <h1 className="text-xl font-bold sm:text-2xl">
                            codaxLearning
                        </h1>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:gap-6">

                        {/* Login / Register */}
                        <div className="flex gap-2 sm:gap-3">
                            <button
                                onClick={() => navigate("/login")}
                                className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 sm:px-4 sm:text-base"
                            >
                                Login
                            </button>

                            <button
                                onClick={() => navigate("/register")}
                                className="rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-gray-800 sm:px-4 sm:text-base"
                            >
                                Register
                            </button>
                        </div>






                        {/* ------ this will be just disply only if the user login succesfully */}
                        {/* User profile
                        <div className="flex items-center gap-3">
                            <p className="text-sm font-medium sm:text-base">
                                johnpaul
                            </p>

                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/036/151/783/small/illustration-cartoon-of-a-cute-boy-standing-and-smiling-in-colorful-and-casual-clothes-vector.jpg"
                                alt="Profile"
                                className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                            />
                        </div> */}






                    </div>
                </header>

                {/* Hero */}
                <section className="flex min-h-[500px] items-center justify-center px-4 text-center sm:min-h-[600px]">
                    <p className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                        Share knowledge with codaxLearning
                    </p>
                </section>

            </div>
        </main>
    );
}

export default HomePage;