import sectionList from "../data_job_category/softwereEngineersideBar_list.js";
import { useState } from "react";
function SideBarSoftWareEngineer() {
    const [activeSection, setActiveSection] = useState("overview");

    const scrollTo = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <aside className="hidden lg:block">
            <div className="sticky top-20 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h2 className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Page Contents
                </h2>
                <nav className="space-y-1">
                    {sectionList.map((sec) => (
                        <button
                            key={sec.id}
                            onClick={() => scrollTo(sec.id)}
                            className={`w-full text-left rounded-md px-3 py-2 text-sm font-medium transition cursor-pointer ${activeSection === sec.id
                                ? "bg-slate-900 text-white"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                }`}
                        >
                            {sec.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-6 border-t border-slate-200 pt-4">
                    <div className="rounded-md bg-slate-50 p-3 text-xs text-slate-600">
                        <p className="font-semibold text-slate-900">Ready to practice?</p>
                        <p className="mt-1">Follow the step-by-step roadmap below to build your first portfolio project.</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideBarSoftWareEngineer;