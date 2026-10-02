import { use } from "react";
import { useNavigate } from "react-router-dom";
function SoftwareDeveloper() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            {/* Header */}
            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-4">

                    <h1 className="text-2xl font-bold text-slate-950">
                        Software Developer
                    </h1>

                    <p className="mt-1 text-sm text-slate-600">
                        Learn the skills and technologies needed to become
                        a software developer.
                    </p>

                </div>
            </div>


            {/* Main Content */}
            <main className="mx-auto max-w-6xl px-6 py-8">

                {/* Hero */}
                <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">

                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>

                        Career Path

                    </div>

                    <h2 className="mt-4 text-3xl font-extrabold text-slate-950">
                        Software Developer
                    </h2>

                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
                        Build applications, solve programming problems, work
                        with databases, create APIs, and develop reliable
                        software using modern technologies.
                    </p>

                </section>


                {/* Skills */}
                <section className="mt-8">

                    <h2 className="text-xl font-bold text-slate-950">
                        Skills You Will Learn
                    </h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Programming */}
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

                            <h3 className="font-bold text-slate-900">
                                Programming
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Learn programming fundamentals, variables,
                                functions, loops, objects, and data structures.
                            </p>

                        </div>


                        {/* Web Development */}
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

                            <h3 className="font-bold text-slate-900">
                                Web Development
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Learn how frontend and backend applications
                                work together to build modern web applications.
                            </p>

                        </div>


                        {/* Databases */}
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

                            <h3 className="font-bold text-slate-900">
                                Databases
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Learn SQL, database design, relationships,
                                queries, and data management.
                            </p>

                        </div>


                        {/* APIs */}
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

                            <h3 className="font-bold text-slate-900">
                                API Development
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Learn how to create and consume APIs and
                                connect frontend applications to backend services.
                            </p>

                        </div>


                        {/* Git */}
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

                            <h3 className="font-bold text-slate-900">
                                Version Control
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Learn Git, branches, commits, merging, and
                                collaboration workflows.
                            </p>

                        </div>


                        {/* Testing */}
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

                            <h3 className="font-bold text-slate-900">
                                Testing & Debugging
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Learn how to find bugs, test applications,
                                and improve software reliability.
                            </p>

                        </div>

                    </div>

                </section>


                {/* Learning Roadmap */}
                <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

                    <h2 className="text-xl font-bold text-slate-950">
                        Software Developer Roadmap
                    </h2>

                    <div className="mt-6 space-y-4">

                        <div className="flex gap-4">

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                                1
                            </span>

                            <div>
                                <h3 className="font-bold">
                                    Programming Fundamentals
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    Learn the fundamentals of programming and
                                    problem solving.
                                </p>
                            </div>

                        </div>


                        <div className="flex gap-4">

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                                2
                            </span>

                            <div>
                                <h3 className="font-bold">
                                    Frontend Development
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    Learn HTML, CSS, JavaScript, and frontend
                                    frameworks.
                                </p>
                            </div>

                        </div>


                        <div className="flex gap-4">

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                                3
                            </span>

                            <div>
                                <h3 className="font-bold">
                                    Backend Development
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    Learn servers, APIs, authentication, and
                                    backend programming.
                                </p>
                            </div>

                        </div>


                        <div className="flex gap-4">

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                                4
                            </span>

                            <div>
                                <h3 className="font-bold">
                                    Databases
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    Learn how applications store and retrieve
                                    data.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* Quiz */}
                <section className="mt-8 rounded-xl border-2 border-emerald-500 bg-emerald-50/40 p-6 text-center">

                    <h2 className="text-xl font-bold text-slate-950">
                        Ready to Test Your Knowledge?
                    </h2>

                    <p className="mt-2 text-sm text-slate-600">
                        Take the Software Developer quiz and test what
                        you've learned.
                    </p>

                    <button
                        type="button"
                        className="mt-5 rounded-md bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
                        onClick={() => navigate("//software-developer-quiz")}
                    >
                        Start Quiz
                    </button>

                </section>

            </main>

        </div>
    );
}

export default SoftwareDeveloper;