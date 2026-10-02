import { Header } from "../src/components/header";
import { useNavigate } from "react-router-dom";

function FullStackDeveloper() {
    const navigate = useNavigate();
    return (<div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {/* Header Placeholder */}
        <Header />


        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="font-medium">Home</span>
                    <span>/</span>
                    <span className="font-medium">Dashboard</span>
                    <span>/</span>
                    <span className="font-semibold text-slate-900">
                        Full-Stack Developer
                    </span>
                </div>

                <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>

                    Back to Dashboard
                </button>
            </div>
        </div>


        {/* Hero Section */}
        <div className="border-b border-slate-200 bg-white py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="max-w-4xl">

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                        Career Path Deep Dive • Web Development
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        Full-Stack Developer
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
                        A comprehensive guide to understanding full-stack development,
                        including front-end interfaces, back-end systems, databases,
                        APIs, deployment, essential technical skills, and practical
                        steps for becoming a full-stack developer.
                    </p>

                </div>


                {/* Quick Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Role Type
                        </p>

                        <p className="mt-1 text-base font-bold text-slate-900">
                            Web Development
                        </p>
                    </div>


                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Primary Focus
                        </p>

                        <p className="mt-1 text-base font-bold text-slate-900">
                            End-to-End Development
                        </p>
                    </div>


                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Main Areas
                        </p>

                        <p className="mt-1 text-base font-bold text-emerald-600">
                            Front-End & Back-End
                        </p>
                    </div>


                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Typical Pathways
                        </p>

                        <p className="mt-1 text-base font-bold text-slate-900">
                            Degree or Self-Directed
                        </p>
                    </div>

                </div>

            </div>
        </div>


        {/* Main Layout */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

            <div className="grid gap-8 lg:grid-cols-[250px_1fr]">


                {/* Sidebar */}
                <aside className="hidden lg:block">

                    <div className="sticky top-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">

                        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                            On This Page
                        </p>

                        <nav className="space-y-1">

                            <a
                                href="#overview"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Overview
                            </a>

                            <a
                                href="#responsibilities"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Responsibilities
                            </a>

                            <a
                                href="#technologies"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Technologies
                            </a>

                            <a
                                href="#skills"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Skills
                            </a>

                            <a
                                href="#education"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Education
                            </a>

                            <a
                                href="#roadmap"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Learning Roadmap
                            </a>

                            <a
                                href="#career-levels"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Career Levels
                            </a>

                            <a
                                href="#work"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                            >
                                Where They Work
                            </a>
                            <a
                                href="quiz"
                                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/quiz/fullstack-developer-quiz")
                                }}
                            >
                                take a quiz?
                            </a>

                        </nav>

                    </div>

                </aside>


                {/* Main Content */}
                <main className="space-y-10">


                    {/* SECTION 1 */}
                    <section
                        id="overview"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Fundamentals
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                What Is a Full-Stack Developer?
                            </h2>

                        </div>


                        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">

                            <p>
                                A <strong>full-stack developer</strong> is a web developer
                                who works with both the front-end and back-end parts of
                                an application. They can build the interface that users
                                interact with while also working with servers, APIs,
                                databases, authentication, and application logic.
                            </p>

                            <div className="rounded-lg border-l-4 border-slate-900 bg-slate-50 p-4 text-slate-800">

                                <p className="font-semibold text-slate-950">
                                    More Than Just Front-End and Back-End
                                </p>

                                <p className="mt-1 text-sm leading-6">
                                    Full-stack development involves understanding how
                                    different parts of an application work together.
                                    A developer may create a user interface, send data
                                    to a server through an API, process that data on
                                    the backend, store information in a database, and
                                    return the result to the user.
                                </p>

                            </div>

                            <p>
                                Full-stack developers can work on many types of web
                                applications, including business platforms, online
                                stores, social applications, dashboards, educational
                                platforms, and other web-based systems.
                            </p>

                        </div>

                    </section>


                    {/* SECTION 2 */}
                    <section
                        id="responsibilities"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Development Workflow
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                What Does a Full-Stack Developer Do?
                            </h2>

                            <p className="mt-2 text-sm text-slate-600">
                                Full-stack developers can contribute to many parts of
                                building and maintaining a web application.
                            </p>

                        </div>


                        <div className="mt-6 grid gap-4 sm:grid-cols-2">


                            {/* 1 */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        1
                                    </span>

                                    <h3 className="font-bold text-slate-950">
                                        Build User Interfaces
                                    </h3>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Create responsive web pages, forms, navigation,
                                    dashboards, and interactive components that users
                                    interact with.
                                </p>

                            </div>


                            {/* 2 */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        2
                                    </span>

                                    <h3 className="font-bold text-slate-950">
                                        Develop Backend Systems
                                    </h3>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Create server-side application logic that processes
                                    requests, handles business rules, manages users,
                                    and communicates with databases.
                                </p>

                            </div>


                            {/* 3 */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        3
                                    </span>

                                    <h3 className="font-bold text-slate-950">
                                        Work With Databases
                                    </h3>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Store, retrieve, update, and organize application
                                    data using relational or NoSQL databases.
                                </p>

                            </div>


                            {/* 4 */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        4
                                    </span>

                                    <h3 className="font-bold text-slate-950">
                                        Create APIs
                                    </h3>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Build APIs that allow the front-end, backend,
                                    databases, and other applications to communicate
                                    with one another.
                                </p>

                            </div>


                            {/* 5 */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        5
                                    </span>

                                    <h3 className="font-bold text-slate-950">
                                        Implement Authentication
                                    </h3>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Build features for registration, login, sessions,
                                    authorization, and protecting application data.
                                </p>

                            </div>


                            {/* 6 */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        6
                                    </span>

                                    <h3 className="font-bold text-slate-950">
                                        Deploy Applications
                                    </h3>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Prepare applications for production by configuring
                                    servers, environments, databases, domains, and
                                    deployment processes.
                                </p>

                            </div>

                        </div>


                        <div className="mt-4 rounded-lg border border-slate-200 bg-gray-50 p-5">

                            <div className="flex items-center gap-3">

                                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                    7
                                </span>

                                <h3 className="font-bold text-slate-950">
                                    Maintain the Application
                                </h3>

                            </div>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Developers fix bugs, improve performance, update
                                dependencies, add features, monitor applications,
                                and maintain existing systems over time.
                            </p>

                        </div>

                    </section>


                    {/* SECTION 3 */}
                    <section
                        id="technologies"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Technology Stack
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Full-Stack Technologies
                            </h2>

                            <p className="mt-2 text-sm text-slate-600">
                                Full-stack development involves multiple layers of
                                technologies that work together.
                            </p>

                        </div>


                        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">


                            {/* Frontend */}
                            <div className="rounded-lg border border-slate-200 p-5">

                                <div className="inline-block rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                                    Front-End
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-slate-950">
                                    User Interface Development
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Technologies used to create the part of a website
                                    that users see and interact with.
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3">

                                    <p className="text-xs font-semibold uppercase text-slate-500">
                                        Technologies
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-slate-700">
                                        HTML, CSS, JavaScript, React, TypeScript
                                    </p>

                                </div>

                            </div>


                            {/* Backend */}
                            <div className="rounded-lg border border-slate-200 p-5">

                                <div className="inline-block rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                    Back-End
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-slate-950">
                                    Server Development
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Technologies used to create server logic, APIs,
                                    authentication, and application services.
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3">

                                    <p className="text-xs font-semibold uppercase text-slate-500">
                                        Technologies
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-slate-700">
                                        Node.js, Express, Python, Java, PHP
                                    </p>

                                </div>

                            </div>


                            {/* Database */}
                            <div className="rounded-lg border border-slate-200 p-5">

                                <div className="inline-block rounded bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700">
                                    Database
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-slate-950">
                                    Data Management
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Technologies used to store and manage application
                                    information.
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3">

                                    <p className="text-xs font-semibold uppercase text-slate-500">
                                        Technologies
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-slate-700">
                                        PostgreSQL, MySQL, SQLite, MongoDB
                                    </p>

                                </div>

                            </div>


                            {/* APIs */}
                            <div className="rounded-lg border border-slate-200 p-5">

                                <div className="inline-block rounded bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                                    APIs
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-slate-950">
                                    Application Communication
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    APIs allow different parts of an application to
                                    communicate and exchange information.
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3">

                                    <p className="text-xs font-semibold uppercase text-slate-500">
                                        Technologies
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-slate-700">
                                        REST, HTTP, JSON, GraphQL
                                    </p>

                                </div>

                            </div>


                            {/* DevOps */}
                            <div className="rounded-lg border border-slate-200 p-5">

                                <div className="inline-block rounded bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                                    Deployment
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-slate-950">
                                    Hosting & DevOps
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Tools used to deploy applications and manage
                                    development environments.
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3">

                                    <p className="text-xs font-semibold uppercase text-slate-500">
                                        Technologies
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-slate-700">
                                        Git, GitHub, Docker, Linux, Cloud Platforms
                                    </p>

                                </div>

                            </div>


                            {/* Testing */}
                            <div className="rounded-lg border border-slate-200 p-5">

                                <div className="inline-block rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">
                                    Testing
                                </div>

                                <h3 className="mt-3 text-lg font-bold text-slate-950">
                                    Application Quality
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Testing tools help developers verify that
                                    applications work correctly.
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3">

                                    <p className="text-xs font-semibold uppercase text-slate-500">
                                        Technologies
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-slate-700">
                                        Unit Testing, Integration Testing, API Testing
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* SECTION 4 */}
                    <section
                        id="skills"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Core Competencies
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Skills Needed for Full-Stack Development
                            </h2>

                        </div>


                        <div className="mt-6 grid gap-6 md:grid-cols-2">


                            {/* Technical */}
                            <div className="space-y-4">

                                <h3 className="border-b border-slate-100 pb-2 text-base font-bold uppercase tracking-wide text-slate-900">
                                    Technical Skills
                                </h3>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        1. HTML & CSS
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Understanding how to structure web pages and
                                        create responsive layouts.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        2. JavaScript
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Learning programming fundamentals and using
                                        JavaScript to create interactive applications.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        3. Front-End Frameworks
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Building reusable interfaces using tools such
                                        as React and other front-end frameworks.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        4. Backend Development
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Understanding servers, routes, APIs,
                                        authentication, and backend application logic.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        5. Database Management
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Learning how to design tables, query data,
                                        relationships, and database operations.
                                    </p>
                                </div>

                            </div>


                            {/* Soft Skills */}
                            <div className="space-y-4">

                                <h3 className="border-b border-slate-100 pb-2 text-base font-bold uppercase tracking-wide text-slate-900">
                                    Problem Solving & Soft Skills
                                </h3>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        1. Problem Solving
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Breaking large problems into smaller pieces
                                        that can be solved step by step.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        2. Debugging
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Finding the cause of errors and testing possible
                                        solutions.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        3. Communication
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Explaining technical ideas clearly and working
                                        effectively with other developers and teams.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        4. Continuous Learning
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Keeping up with new technologies, frameworks,
                                        tools, and development practices.
                                    </p>
                                </div>


                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                    <h4 className="font-semibold text-slate-900">
                                        5. Teamwork
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                        Working with developers, designers, testers,
                                        managers, and other team members.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* SECTION 5 */}
                    <section
                        id="education"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Pathways
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Education & Learning Paths
                            </h2>

                            <p className="mt-2 text-sm text-slate-600">
                                There are different ways to learn full-stack development.
                            </p>

                        </div>


                        <div className="mt-6 grid gap-6 md:grid-cols-2">


                            {/* Degree */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        University Degree
                                    </h3>

                                    <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-800">
                                        Formal
                                    </span>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    A degree in Computer Science, Information Technology,
                                    Software Engineering, or a related field can provide
                                    a structured foundation.
                                </p>

                                <ul className="mt-4 space-y-2 text-xs text-slate-700">

                                    <li>• Programming fundamentals</li>
                                    <li>• Data structures and algorithms</li>
                                    <li>• Databases and networking</li>
                                    <li>• Software development concepts</li>

                                </ul>

                            </div>


                            {/* Self Directed */}
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Self-Directed Learning
                                    </h3>

                                    <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-800">
                                        Alternative
                                    </span>

                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Developers can also learn through documentation,
                                    online courses, tutorials, coding exercises, and
                                    practical projects.
                                </p>

                                <ul className="mt-4 space-y-2 text-xs text-slate-700">

                                    <li>• Learn one technology at a time</li>
                                    <li>• Build practical projects</li>
                                    <li>• Practice solving programming problems</li>
                                    <li>• Build a project portfolio</li>

                                </ul>

                            </div>

                        </div>

                    </section>


                    {/* SECTION 6 */}
                    <section
                        id="roadmap"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Practical Guide
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Full-Stack Developer Learning Roadmap
                            </h2>

                            <p className="mt-2 text-sm text-slate-600">
                                Learn full-stack development gradually instead of trying
                                to learn everything at once.
                            </p>

                        </div>


                        <div className="mt-8 space-y-6">


                            {/* Step 1 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                                        1
                                    </div>

                                    <div className="h-full w-0.5 bg-slate-200"></div>

                                </div>

                                <div className="pb-6">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 1 — Learn HTML & CSS
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Learn how websites are structured and how to
                                        create responsive layouts and user interfaces.
                                    </p>

                                </div>

                            </div>


                            {/* Step 2 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                                        2
                                    </div>

                                    <div className="h-full w-0.5 bg-slate-200"></div>

                                </div>

                                <div className="pb-6">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 2 — Learn JavaScript
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Learn variables, conditions, loops, functions,
                                        arrays, objects, modules, and asynchronous
                                        programming.
                                    </p>

                                </div>

                            </div>


                            {/* Step 3 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                                        3
                                    </div>

                                    <div className="h-full w-0.5 bg-slate-200"></div>

                                </div>

                                <div className="pb-6">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 3 — Learn Front-End Development
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Learn how to build reusable components,
                                        manage application interfaces, handle user
                                        interactions, and work with front-end frameworks.
                                    </p>

                                </div>

                            </div>


                            {/* Step 4 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                                        4
                                    </div>

                                    <div className="h-full w-0.5 bg-slate-200"></div>

                                </div>

                                <div className="pb-6">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 4 — Learn Backend Development
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Learn servers, routes, APIs, middleware,
                                        authentication, error handling, and backend
                                        application logic.
                                    </p>

                                </div>

                            </div>


                            {/* Step 5 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                                        5
                                    </div>

                                    <div className="h-full w-0.5 bg-slate-200"></div>

                                </div>

                                <div className="pb-6">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 5 — Learn Databases
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Learn how to create tables, store information,
                                        write queries, connect applications to databases,
                                        and manage application data.
                                    </p>

                                </div>

                            </div>


                            {/* Step 6 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                                        6
                                    </div>

                                    <div className="h-full w-0.5 bg-slate-200"></div>

                                </div>

                                <div className="pb-6">

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 6 — Build Full-Stack Projects
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Combine front-end, backend, APIs, databases,
                                        and authentication into complete applications.
                                    </p>

                                </div>

                            </div>


                            {/* Step 7 */}
                            <div className="flex gap-4 sm:gap-6">

                                <div className="flex flex-col items-center">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                                        7
                                    </div>

                                </div>

                                <div>

                                    <h3 className="text-lg font-bold text-slate-950">
                                        Step 7 — Learn Deployment & Professional Tools
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        Learn Git, GitHub, deployment, environment
                                        variables, hosting, testing, and other tools
                                        commonly used in software development.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* SECTION 7 */}
                    <section
                        id="career-levels"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Progression
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Full-Stack Developer Career Levels
                            </h2>

                        </div>


                        <div className="mt-6 space-y-4">


                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                                    <h3 className="text-base font-bold text-slate-950">
                                        Junior Full-Stack Developer
                                    </h3>

                                    <span className="mt-1 text-xs font-semibold text-slate-500 sm:mt-0">
                                        Entry Level
                                    </span>

                                </div>

                                <p className="mt-2 text-sm text-slate-600">
                                    Works on smaller features, fixes bugs, builds
                                    components, writes basic APIs, and learns from
                                    more experienced developers.
                                </p>

                            </div>


                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                                    <h3 className="text-base font-bold text-slate-950">
                                        Mid-Level Full-Stack Developer
                                    </h3>

                                    <span className="mt-1 text-xs font-semibold text-slate-500 sm:mt-0">
                                        Mid Level
                                    </span>

                                </div>

                                <p className="mt-2 text-sm text-slate-600">
                                    Works independently on larger features and can
                                    handle front-end, backend, databases, APIs, and
                                    application architecture.
                                </p>

                            </div>


                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                                    <h3 className="text-base font-bold text-slate-950">
                                        Senior Full-Stack Developer
                                    </h3>

                                    <span className="mt-1 text-xs font-semibold text-slate-500 sm:mt-0">
                                        Senior Level
                                    </span>

                                </div>

                                <p className="mt-2 text-sm text-slate-600">
                                    Handles complex technical problems, makes design
                                    decisions, reviews code, mentors developers, and
                                    helps guide application architecture.
                                </p>

                            </div>


                            <div className="rounded-lg border border-slate-900 bg-slate-900 p-5 text-white">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                                    <h3 className="text-base font-bold text-white">
                                        Technical Leadership
                                    </h3>

                                    <span className="mt-1 text-xs font-semibold text-slate-300 sm:mt-0">
                                        Advanced
                                    </span>

                                </div>

                                <p className="mt-2 text-sm text-slate-300">
                                    Experienced developers may move toward roles such
                                    as Staff Engineer, Software Architect, Technical
                                    Lead, Engineering Manager, or other technical
                                    leadership positions.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* SECTION 8 */}
                    <section
                        id="work"
                        className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Industry Scope
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Where Do Full-Stack Developers Work?
                            </h2>

                        </div>


                        <div className="mt-6 space-y-6">

                            <p className="text-sm leading-relaxed text-slate-600">
                                Full-stack developers can work in many industries
                                because web applications are used by businesses,
                                organizations, and institutions across different fields.
                            </p>


                            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Technology
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Financial Services
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Healthcare
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Education
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    E-Commerce
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Entertainment
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Government
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Retail
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Transportation
                                </span>

                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">
                                    Business Services
                                </span>

                            </div>


                            <div className="rounded-lg border border-slate-200 bg-emerald-50/60 p-5">

                                <div className="flex items-center gap-2">

                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                                        ✓
                                    </span>

                                    <h3 className="font-bold text-emerald-950">
                                        Full-Stack Development in Practice
                                    </h3>

                                </div>

                                <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                                    A full-stack developer may work on an application
                                    from its user interface all the way to its server,
                                    database, and deployment environment.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* SECTION 9 */}
                    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <div className="border-b border-slate-100 pb-4">

                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Evaluation
                            </span>

                            <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
                                Is Full-Stack Development for You?
                            </h2>

                        </div>


                        <div className="mt-6 grid gap-6 md:grid-cols-2">


                            <div>

                                <h3 className="font-bold text-slate-900">
                                    What You May Enjoy
                                </h3>

                                <ul className="mt-3 space-y-2 text-sm text-slate-700">

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-slate-900">
                                            •
                                        </span>
                                        <span>
                                            Building complete applications.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-slate-900">
                                            •
                                        </span>
                                        <span>
                                            Solving programming problems.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-slate-900">
                                            •
                                        </span>
                                        <span>
                                            Understanding how different systems connect.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-slate-900">
                                            •
                                        </span>
                                        <span>
                                            Working with both interfaces and servers.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-slate-900">
                                            •
                                        </span>
                                        <span>
                                            Learning new technologies.
                                        </span>
                                    </li>

                                </ul>

                            </div>


                            <div>

                                <h3 className="font-bold text-slate-900">
                                    Important Areas to Develop
                                </h3>

                                <ul className="mt-3 space-y-2 text-sm text-slate-700">

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-emerald-600">
                                            ✓
                                        </span>
                                        <span>
                                            Programming fundamentals.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-emerald-600">
                                            ✓
                                        </span>
                                        <span>
                                            Front-end development.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-emerald-600">
                                            ✓
                                        </span>
                                        <span>
                                            Backend development.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-emerald-600">
                                            ✓
                                        </span>
                                        <span>
                                            Databases and APIs.
                                        </span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-emerald-600">
                                            ✓
                                        </span>
                                        <span>
                                            Debugging and problem solving.
                                        </span>
                                    </li>

                                </ul>

                            </div>

                        </div>


                        {/* Key Takeaway */}
                        <div className="mt-8 rounded-lg border border-slate-900 bg-slate-900 p-6 text-white">

                            <h3 className="text-lg font-bold">
                                Key Takeaway
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                Full-stack development combines the different parts
                                required to build a complete web application. A
                                full-stack developer can work with the user interface,
                                server-side logic, APIs, databases, authentication,
                                testing, and deployment.
                            </p>

                            <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                You do not need to learn every technology at the same
                                time. Start with programming fundamentals, build small
                                projects, gradually learn front-end and backend
                                development, and then combine those skills into
                                complete full-stack applications.
                            </p>


                            <div className="mt-6 flex flex-wrap gap-3">

                                <button className="rounded-md bg-white px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-100">
                                    Back to Dashboard
                                </button>

                                <button className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700">
                                    Go to Learning Roadmap
                                </button>

                            </div>

                        </div>

                    </section>


                    {/* QUIZ */}
                    <section
                        id="full-stack-quiz"
                        className="rounded-lg border-2 border-emerald-500 bg-emerald-50/40 p-6 shadow-sm transition hover:shadow-md sm:p-8"
                    >

                        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

                            <div className="space-y-2">

                                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">

                                    <span className="h-2 w-2 rounded-full bg-emerald-600"></span>

                                    Knowledge Check

                                </div>


                                <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                                    Do you want to take a quiz?
                                </h2>


                                <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                                    Test your understanding of full-stack development,
                                    including front-end development, backend systems,
                                    databases, APIs, and development workflows.
                                </p>

                            </div>


                            <div className="shrink-0">

                                <button
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-600 bg-emerald-600 px-7 py-3.5 text-base font-bold text-white shadow-md transition hover:border-emerald-700 hover:bg-emerald-700 active:scale-95"
                                    onClick={() => navigate("/quiz/fullstack-developer-quiz")}
                                >

                                    Take Quiz

                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>

                                </button>

                            </div>

                        </div>

                    </section>

                </main>

            </div>

        </div>

    </div>
    );
}

export default FullStackDeveloper