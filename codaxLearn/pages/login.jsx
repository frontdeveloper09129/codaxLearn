import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// 1. Imported the official Google Login component
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const navigate = useNavigate();
    
    // FIXED TYPO: Changed 'emial'/'setEmial' to 'email'/'setEmail' to prevent JavaScript crashes
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch("http://localhost:5000/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await response.json();

            if (response.ok) {
                console.log(data)
                setEmail("")
                setPassword("")
                navigate("/dash_board")
            } else {
                console.log(data)
                setEmail("")
                setPassword("")
            }
        } catch (error) {
            console.error({ message: "something was wrong", error })
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg" onSubmit={handleSubmitLogin}>
                <h1 className="mb-2 text-center text-3xl font-bold">
                    Welcome Back
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Login to your account
                </p>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        onChange={(e) => setEmail(e.target.value)} // FIXED TYPO HERE
                        disabled={loading}
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="w-full h-[40px] flex items-center justify-between text-sm mb-4">
                    {/* Left Side: Checkbox for Login State */}
                    <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                        <span>Keep me logged in</span>
                    </label>

                    {/* Right Side: Forgot Password Link */}
                    <span>
                        <a href="forget-password" className="text-blue-600 hover:underline">
                            Forget your password?
                        </a>
                    </span>
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Loading...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>

                {/* 2. Added Visual Divider Line */}
                <div className="relative my-6 w-full flex items-center justify-center">
                    <div className="border-t border-gray-300 w-full absolute"></div>
                    <span className="bg-white px-3 text-xs text-gray-400 relative z-10 uppercase tracking-wider">Or sign in with</span>
                </div>
            </form>
        </main>
    );
}

export default Login;