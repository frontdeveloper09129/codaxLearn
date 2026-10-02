import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../src/components/header.jsx";
import navSections from "../src/data_job_category/softwereEngineersideBar_list.js";
import SideBarSoftWareEngineer from "../src/components/softwareEngineer_sideBar.jsx";

function SoftwereEngineer() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
            {/* Main Shared Header */}
            <Header />

            {/* Breadcrumb & Navigation Sub-bar */}
            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <button
                            onClick={() => navigate("/")}
                            className="transition hover:text-slate-950 font-medium cursor-pointer"
                        >
                            Home
                        </button>
                        <span>/</span>
                        <button
                            onClick={() => navigate("/dash_board")}
                            className="transition hover:text-slate-950 font-medium cursor-pointer"
                        >
                            Dashboard
                        </button>
                        <span>/</span>
                        <span className="font-semibold text-slate-900">Software Engineer</span>
                    </div>

                    <button
                        onClick={() => navigate("/dash_board")}
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-950 cursor-pointer"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Dashboard
                    </button>
                </div>
            </div>

            {/* Hero Header Section */}
            <div className="border-b border-slate-200 bg-white py-10 sm:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Career Path Deep Dive • Software &amp; Application Development
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Software Engineer
                        </h1>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
                            A comprehensive guide to understanding what software engineering entails, the core disciplines, essential technical competencies, career milestones, and practical steps to master the craft.
                        </p>
                    </div>

                    {/* Quick Metric Cards */}
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Role Type</p>
                            <p className="mt-1 text-base font-bold text-slate-900">Engineering &amp; Systems</p>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Primary Focus</p>
                            <p className="mt-1 text-base font-bold text-slate-900">Design, Code &amp; Scale</p>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">BLS Growth (2024–34)</p>
                            <p className="mt-1 text-base font-bold text-emerald-600">+15% (Much Faster)</p>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Typical Pathways</p>
                            <p className="mt-1 text-base font-bold text-slate-900">Degree or Self-Directed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Layout Grid */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[250px_1fr]">

                    {/* Sticky Sidebar Navigation */}
                    <SideBarSoftWareEngineer />

                    {/* Main Content Area */}
                    <main className="space-y-10">

                        {/* SECTION 1: WHAT IS A SOFTWARE ENGINEER? */}
                        <section id="overview" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Fundamentals</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">What Is a Software Engineer?</h2>
                            </div>

                            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                                <p>
                                    A <strong>software engineer</strong> is a technology professional who applies programming and engineering principles to create, improve, and maintain software systems. Their work can range from building websites and mobile applications to developing large-scale business platforms, cloud services, operating systems, and other computer-based products.
                                </p>
                                <div className="rounded-lg border-l-4 border-slate-900 bg-slate-50 p-4 text-slate-800">
                                    <p className="font-semibold text-slate-950">Engineering vs. Just Writing Code</p>
                                    <p className="mt-1 text-sm leading-6">
                                        Software engineering involves much more than writing code. Engineers first need to understand the problem a piece of software is supposed to solve. They may then plan the system, design its components, implement the solution, test it, investigate problems, and continue improving the software after it has been released.
                                    </p>
                                </div>
                                <p>
                                    Because software is used throughout modern businesses and organizations, software engineers can work in many industries, including technology, finance, healthcare, manufacturing, education, entertainment, and government.
                                </p>
                            </div>
                        </section>

                        {/* SECTION 2: WHAT DOES A SOFTWARE ENGINEER DO? */}
                        <section id="responsibilities" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Workflow &amp; Lifecycle</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">What Does a Software Engineer Do?</h2>
                                <p className="mt-2 text-sm text-slate-600">
                                    The exact responsibilities depend on position and specialization, but engineers generally contribute across seven core stages of software development:
                                </p>
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {/* 1 */}
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">1</span>
                                        <h3 className="font-bold text-slate-950">Understand the Problem</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Before writing code, engineers understand what the software is expected to accomplish by discussing requirements with users, product managers, designers, and team members to clarify scope and technical limitations.
                                    </p>
                                </div>

                                {/* 2 */}
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">2</span>
                                        <h3 className="font-bold text-slate-950">Design the Solution</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Planning how services communicate, how information is stored, user interactions, database architecture, API contracts, error handling, security protocols, and system scalability.
                                    </p>
                                </div>

                                {/* 3 */}
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">3</span>
                                        <h3 className="font-bold text-slate-950">Write Code</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Translating planned solutions into computer instructions using languages like JavaScript, Python, Java, C#, C++, or Go. Professional engineers often work across multiple technologies.
                                    </p>
                                </div>

                                {/* 4 */}
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">4</span>
                                        <h3 className="font-bold text-slate-950">Test Software</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Verifying that applications behave as intended through automated testing, integration testing, and manual testing to eliminate defects, edge-case bugs, and security risks.
                                    </p>
                                </div>

                                {/* 5 */}
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">5</span>
                                        <h3 className="font-bold text-slate-950">Debug &amp; Fix Problems</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Investigating why errors occur by reproducing bugs, inspecting behavior, examining logs, isolating root causes, and modifying code safely to correct anomalies.
                                    </p>
                                </div>

                                {/* 6 */}
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">6</span>
                                        <h3 className="font-bold text-slate-950">Maintain Existing Software</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Updating software after launch: improving runtime performance, patching vulnerabilities, updating dependencies, adding new functionality, and refactoring older codebases.
                                    </p>
                                </div>
                            </div>

                            {/* Teamwork Full Width */}
                            <div className="mt-4 rounded-lg border border-slate-200 bg-gray-50 p-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">7</span>
                                    <h3 className="font-bold text-slate-950">Work With Other People</h3>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Software development is a team activity. Engineers collaborate with fellow developers, product managers, UI/UX designers, QA testers, database admins, and stakeholders. Clear communication is just as vital as technical acumen.
                                </p>
                            </div>
                        </section>

                        {/* SECTION 3: SPECIALIZATIONS */}
                        <section id="specializations" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Career Directions</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">Software Engineering Specializations</h2>
                                <p className="mt-2 text-sm text-slate-600">
                                    Engineers specialize in specific domains depending on their interests and career goals:
                                </p>
                            </div>

                            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {/* Front-End */}
                                <div className="flex flex-col justify-between rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition">
                                    <div>
                                        <div className="inline-block rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">Client-Side</div>
                                        <h3 className="mt-3 text-lg font-bold text-slate-950">Front-End Engineer</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Builds user interfaces, animations, responsive layouts, and interactive experiences that run inside web browsers.
                                        </p>
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Technologies</p>
                                        <p className="mt-1 text-xs font-medium text-slate-700">HTML, CSS, JavaScript, React, Vue, Angular, TypeScript</p>
                                    </div>
                                </div>

                                {/* Back-End */}
                                <div className="flex flex-col justify-between rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition">
                                    <div>
                                        <div className="inline-block rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Server-Side</div>
                                        <h3 className="mt-3 text-lg font-bold text-slate-950">Back-End Engineer</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Constructs server logic, REST/GraphQL APIs, database queries, authentication flows, data pipelines, and microservices.
                                        </p>
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Technologies</p>
                                        <p className="mt-1 text-xs font-medium text-slate-700">Node.js, Python, Java, C#, Go, SQL, PostgreSQL, Redis</p>
                                    </div>
                                </div>

                                {/* Full-Stack */}
                                <div className="flex flex-col justify-between rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition">
                                    <div>
                                        <div className="inline-block rounded bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700">End-to-End</div>
                                        <h3 className="mt-3 text-lg font-bold text-slate-950">Full-Stack Engineer</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Works across both client interfaces and backend server architecture, connecting systems seamlessly end-to-end.
                                        </p>
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Technologies</p>
                                        <p className="mt-1 text-xs font-medium text-slate-700">React, Node.js, Express, Next.js, SQL, REST APIs</p>
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="flex flex-col justify-between rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition">
                                    <div>
                                        <div className="inline-block rounded bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">Mobile Apps</div>
                                        <h3 className="mt-3 text-lg font-bold text-slate-950">Mobile Engineer</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Creates applications tailored for mobile platforms, optimizing battery, offline caching, device APIs, and app stores.
                                        </p>
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Technologies</p>
                                        <p className="mt-1 text-xs font-medium text-slate-700">Swift (iOS), Kotlin (Android), React Native, Flutter</p>
                                    </div>
                                </div>

                                {/* Cloud & DevOps */}
                                <div className="flex flex-col justify-between rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition">
                                    <div>
                                        <div className="inline-block rounded bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">Infrastructure</div>
                                        <h3 className="mt-3 text-lg font-bold text-slate-950">Cloud &amp; DevOps Engineer</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Specializes in cloud infrastructure, containers, CI/CD automated deployments, system reliability, and monitoring.
                                        </p>
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Technologies</p>
                                        <p className="mt-1 text-xs font-medium text-slate-700">AWS, Docker, Kubernetes, CI/CD, Terraform, Linux</p>
                                    </div>
                                </div>

                                {/* Embedded */}
                                <div className="flex flex-col justify-between rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition">
                                    <div>
                                        <div className="inline-block rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">Hardware &amp; IoT</div>
                                        <h3 className="mt-3 text-lg font-bold text-slate-950">Embedded Software Engineer</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Develops software that runs inside physical hardware like automobiles, medical devices, robotics, and consumer electronics.
                                        </p>
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Technologies</p>
                                        <p className="mt-1 text-xs font-medium text-slate-700">C, C++, Rust, RTOS, Microcontrollers, Assembly</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 4: SKILLS NEEDED */}
                        <section id="skills" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Competencies</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">Skills Needed for Software Engineering</h2>
                                <p className="mt-2 text-sm text-slate-600">
                                    A successful software engineer needs a combination of technical foundation and professional problem-solving abilities:
                                </p>
                            </div>

                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                {/* Technical Skills */}
                                <div className="space-y-4">
                                    <h3 className="text-base font-bold uppercase tracking-wide text-slate-900 border-b border-slate-100 pb-2">
                                        Technical Skills
                                    </h3>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">1. Programming Fundamentals</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Understanding how to write code, organize programs, handle conditions, loops, reusable modules, and language-specific paradigms.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">2. Data Structures &amp; Algorithms</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Organizing data (arrays, hash tables, trees) and implementing efficient algorithms to solve computational problems effectively.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">3. Database Knowledge</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Structuring, querying, updating, and indexing data using relational databases (PostgreSQL, MySQL, SQLite) and NoSQL stores.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">4. APIs &amp; Networking</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Creating and consuming REST APIs, understanding HTTP requests/responses, authorization headers, serialization, and error handling.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">5. Version Control (Git)</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Collaborating via Git: branching workflows, pull requests, resolving merge conflicts, and maintaining reliable release histories.</p>
                                    </div>
                                </div>

                                {/* Professional & Soft Skills */}
                                <div className="space-y-4">
                                    <h3 className="text-base font-bold uppercase tracking-wide text-slate-900 border-b border-slate-100 pb-2">
                                        Problem Solving &amp; Soft Skills
                                    </h3>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">1. Systematic Debugging</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Reproducing issues, gathering evidence from logs, examining runtime behavior, and validating that fixes address root causes.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">2. Problem Solving &amp; Decomposition</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Breaking complicated, open-ended business problems into smaller manageable pieces and evaluating engineering trade-offs.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">3. Clear Communication</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Explaining technical concepts to teammates and non-technical stakeholders, writing clear specifications, and giving helpful feedback.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 p-4">
                                        <h4 className="font-semibold text-slate-900">4. Continuous Learning</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Proactively staying adaptable and learning new frameworks, development tools, cloud services, and security practices over time.</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                        <h4 className="font-semibold text-slate-900">5. Attention to Quality &amp; Testing</h4>
                                        <p className="mt-1 text-xs leading-5 text-slate-600">Writing unit tests, integration tests, and maintaining clean, readable, well-documented code for long-term project health.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 5: EDUCATION & QUALIFICATIONS */}
                        <section id="education" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Pathways</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">Education &amp; Qualifications</h2>
                                <p className="mt-2 text-sm text-slate-600">
                                    Software engineering is accessible through multiple valid paths depending on your background and goals:
                                </p>
                            </div>

                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-slate-950">University Degree</h3>
                                        <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-800">Formal</span>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        A Bachelor&apos;s degree in Computer Science, Software Engineering, Computer Engineering, or IT provides a structured foundation in theoretical concepts.
                                    </p>
                                    <ul className="mt-4 space-y-2 text-xs text-slate-700">
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                                            Deep study of algorithms, computer architecture, and OS
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                                            Structured multi-year curriculum and peer network
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                                            Listed as typical entry-level education by U.S. BLS
                                        </li>
                                    </ul>
                                </div>

                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-slate-950">Self-Directed &amp; Practical</h3>
                                        <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-800">Alternative</span>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        Many successful engineers develop skills through self-directed study, online courses, coding bootcamps, certifications, and portfolio projects.
                                    </p>
                                    <ul className="mt-4 space-y-2 text-xs text-slate-700">
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                                            Heavy focus on modern web stacks and real software delivery
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                                            Proof of capability via deployed GitHub applications
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                                            Accelerated, cost-effective self-paced pathway
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 6: 7-STEP LEARNING ROADMAP */}
                        <section id="roadmap" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Practical Guide</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">How to Start Learning Software Engineering</h2>
                                <p className="mt-2 text-sm text-slate-600">
                                    You do not need to learn every technology at once. Follow this recommended 7-step progression:
                                </p>
                            </div>

                            <div className="mt-8 space-y-6">
                                {/* Step 1 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow">
                                            1
                                        </div>
                                        <div className="h-full w-0.5 bg-slate-200"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-950">Step 1 — Learn Programming Fundamentals</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Start with one programming language and learn its fundamentals: variables, data types, conditions, loops, functions, objects, arrays, error handling, and modules.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow">
                                            2
                                        </div>
                                        <div className="h-full w-0.5 bg-slate-200"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-950">Step 2 — Build Small Programs</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Instead of only watching tutorials, create small projects. Projects provide opportunities to practice programming and learn how to solve problems independently.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow">
                                            3
                                        </div>
                                        <div className="h-full w-0.5 bg-slate-200"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-950">Step 3 — Learn Computer Science Fundamentals</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            As programming skills develop, learn concepts such as data structures, algorithms, databases, operating systems, networking, object-oriented programming, and software design.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow">
                                            4
                                        </div>
                                        <div className="h-full w-0.5 bg-slate-200"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-950">Step 4 — Choose an Area of Specialization</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Explore different areas of development: <strong>Web development</strong> (Front-end, back-end, full-stack), <strong>Mobile development</strong> (Android/iOS), <strong>Systems</strong> (OS, embedded), or <strong>Cloud</strong> (Infrastructure, DevOps).
                                        </p>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow">
                                            5
                                        </div>
                                        <div className="h-full w-0.5 bg-slate-200"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-950">Step 5 — Build Real Projects</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Create projects that demonstrate what you have learned: a task-management app, a personal portfolio, a weather application, a blog platform, an e-commerce store, a REST API, or a database-backed application.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 6 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white shadow">
                                            6
                                        </div>
                                        <div className="h-full w-0.5 bg-slate-200"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="text-lg font-bold text-slate-950">Step 6 — Learn Professional Tools</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Master tools used in professional teams: Git, GitHub, modern code editors, package managers, testing frameworks, databases, API tools, and development environments.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 7 */}
                                <div className="relative flex gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white shadow">
                                            7
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-950">Step 7 — Gain Practical Experience</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                            Internships, open-source contributions, personal projects, freelance work, and entry-level positions can provide opportunities to apply technical knowledge to real-world problems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 7: CAREER LEVELS */}
                        <section id="career-levels" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Progression</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">Software Engineer Career Levels</h2>
                                <p className="mt-2 text-sm text-slate-600">
                                    Software engineers progress through different levels of responsibility:
                                </p>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <h3 className="text-base font-bold text-slate-950">Junior Software Engineer</h3>
                                        <span className="mt-1 text-xs font-semibold text-slate-500 sm:mt-0">Entry Level</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-600">
                                        Junior engineers develop professional experience, work on smaller features, fix bugs, write tests, and receive guidance from experienced engineers.
                                    </p>
                                </div>

                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <h3 className="text-base font-bold text-slate-950">Mid-Level Software Engineer</h3>
                                        <span className="mt-1 text-xs font-semibold text-slate-500 sm:mt-0">Mid Level</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-600">
                                        Mid-level engineers work independently, take responsibility for larger features or system parts, participate in technical decisions, and help junior developers.
                                    </p>
                                </div>

                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <h3 className="text-base font-bold text-slate-950">Senior Software Engineer</h3>
                                        <span className="mt-1 text-xs font-semibold text-slate-500 sm:mt-0">Senior Level</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-600">
                                        Senior engineers handle complex technical challenges, make architectural decisions, lead technical projects, review code, mentor other engineers, and establish engineering practices.
                                    </p>
                                </div>

                                <div className="rounded-lg border border-slate-200 bg-slate-900 p-4 text-white sm:p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <h3 className="text-base font-bold text-white">Technical Leadership</h3>
                                        <span className="mt-1 text-xs font-semibold text-slate-300 sm:mt-0">Staff / Principal / Management</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-300">
                                        Experienced engineers may move into roles such as Staff Engineer, Principal Engineer, Software Architect, Engineering Manager, Director of Engineering, VP of Engineering, or CTO.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 8: WHERE DO ENGINEERS WORK & OUTLOOK */}
                        <section id="outlook" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Industry Scope</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">Where Do Software Engineers Work?</h2>
                            </div>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <p className="text-sm leading-relaxed text-slate-600">
                                        Software engineers are not limited to technology companies. They work in organizations across many industries:
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Software Publishing</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Financial Services</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Healthcare</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Manufacturing</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Education</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Government</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Entertainment</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Retail</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Telecommunications</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Transportation</span>
                                        <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5">Computer Systems Design</span>
                                    </div>
                                </div>

                                <div className="rounded-lg border border-slate-200 bg-emerald-50/60 p-5">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">✓</span>
                                        <h3 className="font-bold text-emerald-950">Career Outlook (U.S. Bureau of Labor Statistics)</h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                                        According to the U.S. Bureau of Labor Statistics, employment of software developers, quality assurance analysts, and testers is projected to grow <strong>15% from 2024 to 2034</strong>, which is considerably faster than the average for occupations overall. The BLS also projects about <strong>129,200 openings per year</strong> across those occupations during that period.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 9: ADVANTAGES & SELF EVALUATION */}
                        <section id="evaluation" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Evaluation</span>
                                <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">Advantages &amp; Is It Right for You?</h2>
                            </div>

                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="font-bold text-slate-900">Advantages of a Software Engineering Career</h3>
                                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-slate-900">•</span>
                                            <span>Opportunities to work in different industries.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-slate-900">•</span>
                                            <span>Many areas of specialization.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-slate-900">•</span>
                                            <span>Opportunities to work on different types of technology.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-slate-900">•</span>
                                            <span>Potential for remote or hybrid work depending on employer.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-slate-900">•</span>
                                            <span>Multiple career progression paths.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-slate-900">•</span>
                                            <span>Ability to create software that solves practical problems.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">Is Software Engineering Right for You?</h3>
                                    <p className="mt-1 text-xs text-slate-500">This may be a good career direction if you enjoy:</p>
                                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-emerald-600">✓</span>
                                            <span>Solving problems &amp; analytical thinking.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-emerald-600">✓</span>
                                            <span>Understanding how technology works.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-emerald-600">✓</span>
                                            <span>Building things with computers.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-emerald-600">✓</span>
                                            <span>Learning continuously as tools evolve.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-emerald-600">✓</span>
                                            <span>Working on technical challenges and collaborating with teams.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Summary Callout */}
                            <div className="mt-8 rounded-lg border border-slate-900 bg-slate-900 p-6 text-white">
                                <h3 className="text-lg font-bold">Key Takeaway</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                    Software engineering is the process of applying programming, computer science, and engineering practices to create and maintain software systems. A software engineer may design an application, write its code, test its behavior, investigate bugs, work with databases and APIs, improve performance, collaborate with a team, and maintain the system after it has been released.
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                    You do not need to know everything before beginning. Building strong programming fundamentals, learning how software systems work, creating practical projects, and developing problem-solving and communication skills can provide a solid foundation for entering the field.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <button
                                        onClick={() => navigate("/dash_board")}
                                        className="rounded-md bg-white px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-100 cursor-pointer"
                                    >
                                        Back to Dashboard
                                    </button>
                                    <button
                                        onClick={() => scrollTo("roadmap")}
                                        className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 cursor-pointer"
                                    >
                                        Go to 7-Step Learning Guide
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* SECTION: QUIZ CONTAINER */}
                        <section id="software-engineer-quiz" className="rounded-lg border-2 border-emerald-500 bg-emerald-50/40 p-6 sm:p-8 shadow-sm transition hover:shadow-md">
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
                                        Challenge yourself and reinforce what you&apos;ve learned about Software Engineering fundamentals, development stages, and career specializations.
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <button
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-600 bg-emerald-600 px-7 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-emerald-700 hover:border-emerald-700 active:scale-95 cursor-pointer"
                                        onClick={() => navigate("/software-engineer-quiz-page")}
                                    >
                                        Click it
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export default SoftwereEngineer;