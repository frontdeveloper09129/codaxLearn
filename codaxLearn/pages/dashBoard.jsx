import { useEffect, useState } from "react"
import { categoryJobInfo } from "../src/data_job_category/category_job_info.js"
import {
    SoftwareApplicationDev,
    CloudInfrastructure,
    Cybersecurity,
    AIandMachineLearning,
    Data,
    Databases,
    ITTechnicalSupport,
    NetworkingTelecommunications,
    QualityAssuranceTesting,
    ArchitectureTechnicalLeadership,
    MobileDevelopment,
    GameDevelopment,
    RoboticsHardware,
    UIUXDesign,
    ProductProject,
    BusinessTechnology,
    TechnicalWritingDocumentation,
    Research,
    BlockchainWeb3,
    TechnologyManagement
} from '../src/data_job_category/category_job_data.js'
import { Header } from "../src/components/header.jsx"
import { useNavigate } from "react-router-dom";


function DashBoard() {
    const [selectedDataCategory, setSelectedDataCategory] = useState("software-application-development");
    const selectedData = categoryJobInfo.find((category) => category.id === selectedDataCategory);
    // navigate
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">

            {/* header */}
            <Header />

            <main id="learn" className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[330px_1fr] lg:px-8">
                <aside id="careers" className="h-fit rounded-md border border-slate-200 bg-white lg:sticky lg:top-24">
                    <div className="border-b border-slate-200 bg-gray-100 px-4 py-3">
                        <h1 className="text-lg font-bold">Career Learning List</h1>
                        <p className="mt-1 text-sm text-slate-600">Choose the job path you want to learn.</p>
                    </div>

                    <div className="max-h-[calc(100vh-160px)] overflow-y-auto p-3">
                        <details className="group mb-2 rounded-md border border-slate-200" open>
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("software-application-development")}
                            >
                                Software &amp; Application Development
                            </summary>

                            {SoftwareApplicationDev.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    {category.production ? (
                                        <li
                                            className="list"
                                            aria-disabled={!category.production}
                                            onClick={() => {
                                                if (!category.production) return
                                                navigate(`/category/${category.id}`)
                                            }
                                            }>
                                            {category.id}
                                        </li>
                                    ) : (
                                        <li
                                            className="list"
                                            aria-disabled={!category.production}
                                            onClick={() => {
                                                if (!category.production) return
                                                navigate(`/category/${category.id}`)
                                            }}>
                                            {category.id}: <span className="text-red-500">coming soon</span>
                                        </li>
                                    )}
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("cloud-infrastructure")}
                            >
                                Cloud &amp; Infrastructure : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {CloudInfrastructure.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("cybersecurity")}
                            >
                                Cybersecurity  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {Cybersecurity.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("ai-machine-learning")}
                            >
                                AI &amp; Machine Learning  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {AIandMachineLearning.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("data")}
                            >
                                Data  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {Data.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("databases")}
                            >
                                Databases  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {Databases.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("it-technical-support")}
                            >
                                IT &amp; Technical Support : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {ITTechnicalSupport.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("networking-telecommunications")}
                            >
                                Networking &amp; Telecommunications : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {NetworkingTelecommunications.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("quality-assurance-testing")}
                            >
                                Quality Assurance &amp; Testing  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {QualityAssuranceTesting.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("architecture-technical-leadership")}
                            >
                                Architecture &amp; Technical Leadership  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {ArchitectureTechnicalLeadership.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("mobile-development")}
                            >
                                Mobile Development  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {MobileDevelopment.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("game-development")}
                            >
                                Game Development  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {GameDevelopment.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("robotics-hardware")}
                            >
                                Robotics &amp; Hardware  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {RoboticsHardware.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("ui-ux-design")}
                            >
                                UI/UX &amp; Design  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {UIUXDesign.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("product-project")}
                            >
                                Product &amp; Project  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {ProductProject.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("business-technology")}
                            >
                                Business + Technology  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {BusinessTechnology.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("technical-writing-documentation")}
                            >
                                Technical Writing &amp; Documentation  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {TechnicalWritingDocumentation.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("research")}
                            >
                                Research  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {Research.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="mb-2 rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("blockchain-web3")}
                            >
                                Blockchain &amp; Web3  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {BlockchainWeb3.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>

                        <details className="rounded-md border border-slate-200">
                            <summary
                                className="cursor-pointer list-none bg-gray-100 px-3 py-2 text-sm font-semibold"
                                onClick={() => setSelectedDataCategory("technology-management")}
                            >
                                Technology Management  : <span className="text-red-500">coming soon..</span>
                            </summary>

                            {TechnologyManagement.map((category) => (
                                <ul
                                    className="space-y-1 px-3 py-2 text-sm text-slate-700"
                                    key={category.id}
                                >
                                    <li onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.value}
                                    </li>
                                </ul>
                            ))}
                        </details>
                    </div>
                </aside>
                <section id="career-context" className="space-y-6">
                    <section className="rounded-md border border-slate-200 bg-white">
                        <div className="border-b border-slate-200 bg-gray-100 px-5 py-4">
                            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">{selectedData.label}</p>
                            <h2 className="mt-1 text-2xl font-bold">{selectedData.title}</h2>
                        </div>

                        <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                                <h3 className="text-xl font-bold">{selectedData.subtitle}</h3>
                                {selectedData.overview.map((value, index) => (
                                    <div key={index}>
                                        <p className="mt-3 leading-7 text-slate-700" key={value.id}>
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-md border border-slate-200 p-4">
                                <h3 className="font-bold">Suggested Beginner Roadmaps</h3>
                                {selectedData.beginnerRoadmap.map((value, index) => (
                                    <ol className="mt-4 space-y-3 text-sm text-slate-700" key={index}>
                                        <li className="rounded-md bg-slate-50 p-3"><span className="font-semibold text-slate-950">{value.step} </span>{value.description}</li>
                                    </ol>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="rounded-md border border-slate-200 bg-white">
                        <div className="border-b border-slate-200 bg-gray-100 px-5 py-4">
                            <h2 className="text-2xl font-bold">Jobs Inside This Category</h2>
                        </div>

                        <div className="grid gap-3 p-5 sm:grid-cols-2 xl:grid-cols-3">
                            {selectedData.jobs.map((value, index) => (
                                <div className="rounded-md border border-slate-200 p-4" key={index}>
                                    <h3 className="font-bold">{value.name}</h3>
                                    <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-md border border-slate-200 bg-white">
                            <div className="border-b border-slate-200 bg-gray-100 px-5 py-4">
                                <h2 className="text-xl font-bold">Important Skills</h2>
                            </div>
                            <div className="flex flex-wrap gap-2 p-5 text-sm font-medium">
                                {selectedData.importantSkills.map((value, index) => (
                                    <div className="m-2" key={index}>
                                        <span className="rounded-md bg-slate-100 px-3 py-2">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="contact" className="rounded-md border border-slate-200 bg-white">
                            <div className="border-b border-slate-200 bg-gray-100 px-5 py-4">
                                <h2 className="text-xl font-bold">Learning Note</h2>
                            </div>
                            <div className="p-5">
                                <p className="leading-7 text-slate-700">
                                    codaxLearn can guide beginners through researched learning paths. The goal is to help learners start
                                    their career journey, practice skills, and understand what each technology job can require.
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div >
    )
}

export default DashBoard
