import {useState, useEffect} from "react";
function Register() {
    const [username, SetUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [password, Setpassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const handleRegsForm = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
        })

        const data = await response.json()

        if(response.ok) {
            console.log(data)
        }else {
            console.log(data)
        }
    }
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
            <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg" onSubmit={handleRegsForm}>
                <h1 className="mb-2 text-center text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Create your codaxLearning account
                </p>

                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        onChange={(e) => SetUsername(e.target.value)}
                    />
                </div>

                <div className="mb-4">
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
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        onChange={(e) => SetEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
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
                        placeholder="Create a password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        onChange={(e) => Setpassword(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="confirm-password"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        onChange={(e) => SetConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                    Register
                </button>
            </form>
        </main>
    );
}

export default Register;