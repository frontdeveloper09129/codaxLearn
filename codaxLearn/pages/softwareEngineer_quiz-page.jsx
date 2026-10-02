import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../src/components/header.jsx";

function SoftwareDeveloperQuiz() {
    const navigate = useNavigate();

    const [softwareEngineer, setSoftwareEngineer] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [totalScore, setTotalScore] = useState(0);
    const [alreadyAnswer, setAlreadyAnswer] = useState(null);
    const [isClick, setIsClick] = useState(false);

    useEffect(() => {
        fetchSoftwareEngineer();


        // fetch("")
    }, []);

    const fetchSoftwareEngineer = async () => {
        const response = await fetch(
            "http://localhost:5000/api/v3/quiz/data/getQuiz_question_data",
            {
                method: "GET",
                credentials: "include"
            }
        );

        const data = await response.json();

        if (response.ok) {
            setSoftwareEngineer(data.questions || data.question || []);
        } else {
            setSoftwareEngineer([]);
            console.log(data);
        }
    };
    const handleClickChoicesBtn = async (item, selectedAnswerId) => {
        const response = await fetch("http://localhost:5000/api/v3/quiz/data/submit_answer", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ item, selectedAnswerId })
        });

        const data = await response.json();

        if (response.ok) {
            setSelectedAnswer((prev) => ({
                ...prev,
                [item.id]: selectedAnswerId.id
            }));
            console.log("Success data:", data);
        } else {
            console.log("Error data:", data);
        }
    };

    const handleClickReset = async () => {
        setSelectedAnswer({});

        const response = await fetch("http://localhost:5000/api/v3/quiz/data/user/reset_score", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ category: "software engineer" })
        });

        const data = await response.json();

        if (response.ok) {
            setTotalScore(0);
            setAlreadyAnswer(false);
        } else {
            console.log(data);
        }
    };

    const FetchScore = async () => {
        const response = await fetch("http://localhost:5000/api/v3/quiz/data/softwareEngineer", {
            method: "GET",
            credentials: "include"
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data);
            if (Number(data.total_question) !== 20) {
                setAlreadyAnswer(false);
            } else {
                setAlreadyAnswer(true);
            }

            setTotalScore(data.score !== undefined ? data.score : (data.total_score !== undefined ? data.total_score : data.total_Score));
            setIsClick(true); // Open the centered modal
        } else {
            console.log(data);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased relative">

            <Header />

            {/* CENTRED POPUP MODAL OVERLAY */}
            {isClick && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Quiz Score Result
                            </p>
                            <button
                                onClick={() => setIsClick(false)}
                                className="rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                            >
                                ✕
                            </button>
                        </div>

                        {alreadyAnswer ? (
                            <div className="px-6 py-10 text-center">
                                <p className="text-sm font-medium text-slate-500">
                                    Your Final Score
                                </p>

                                <div className="mt-3">
                                    <span className="text-6xl font-extrabold text-blue-600">
                                        {totalScore}
                                    </span>
                                    <span className="ml-2 text-2xl font-semibold text-slate-400">
                                        / {softwareEngineer.length || 20}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm text-slate-500">
                                    Great job completing the Software Developer assessment!
                                </p>
                            </div>
                        ) : (
                            <div className="px-6 py-10 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                                    <span className="text-2xl font-bold text-amber-600">!</span>
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-slate-800">
                                    Quiz Not Completed Yet
                                </h3>

                                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                    Please answer all the questions before viewing your final score.
                                </p>
                            </div>
                        )}

                        <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 text-right">
                            <button
                                onClick={() => setIsClick(false)}
                                className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Breadcrumb Navigation */}
            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <button onClick={() => navigate("/")} className="font-medium transition hover:text-slate-950">Home</button>
                        <span>/</span>
                        <button onClick={() => navigate("/dash_board")} className="font-medium transition hover:text-slate-950">Dashboard</button>
                        <span>/</span>
                        <button onClick={() => navigate("/category/software-developer")} className="font-medium transition hover:text-slate-950">Software Developer</button>
                        <span>/</span>
                        <span className="font-semibold text-slate-900">Quiz</span>
                    </div>

                    <button
                        onClick={() => navigate("/category/software-developer")}
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-950"
                    >
                        ← Back to Career Guide
                    </button>
                </div>
            </div>

            {/* Hero */}
            <div className="border-b border-slate-200 bg-white py-8 sm:py-10">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        <p>Knowledge Assessment • {softwareEngineer.length} Questions</p>
                    </div>

                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                        Software Developer Quiz
                    </h1>

                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                        Test your understanding of coding standards, web development frameworks,
                        APIs, databases, testing, and software development practices.
                    </p>
                </div>
            </div>

            {/* Questions */}
            <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    {softwareEngineer.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
                        >
                            {/* Question Header */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                                <div className="flex items-center gap-2">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-xs font-bold text-white">
                                        {index + 1}
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        {item.category}
                                    </span>
                                </div>
                                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold capitalize text-slate-700">
                                    {item.difficulty}
                                </span>
                            </div>

                            {/* Question */}
                            <h2 className="mt-4 text-base font-bold leading-relaxed text-slate-900 sm:text-lg">
                                {item.question}
                            </h2>

                            {/* Choices */}
                            <div className="mt-4 space-y-2.5">
                                {item.choices.map((choice) => (
                                    <button
                                        key={choice.id}
                                        type="button"
                                        disabled={selectedAnswer[item.id] !== undefined}
                                        className={`flex w-full items-start gap-3 rounded-lg border p-3 text-left text-sm transition ${selectedAnswer[item.id] === choice.id
                                            ? choice.isCorrect
                                                ? "border-green-500 bg-green-50 text-green-700"
                                                : "border-red-500 bg-red-50 text-red-700"
                                            : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                                            }`}
                                        onClick={() => handleClickChoicesBtn(item, choice)}
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs font-bold uppercase text-slate-700">
                                            {choice.id}
                                        </span>
                                        <span className="pt-0.5 leading-5">
                                            {choice.text}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                        onClick={FetchScore}
                    >
                        Submit
                    </button>

                    <button
                        type="button"
                        className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 active:scale-95"
                        onClick={handleClickReset}
                    >
                        Reset
                    </button>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-10 rounded-lg border-2 border-blue-500 bg-blue-50/40 p-6 text-center shadow-sm sm:p-8">
                    <h3 className="text-xl font-bold text-slate-950">
                        Completed the Quiz?
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                        Review any topics you want to practice further in the
                        Software Developer Career Guide.
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => navigate("/category/software-developer")}
                            className="rounded-md bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Return to Career Guide
                        </button>
                        <button
                            onClick={() => navigate("/dash_board")}
                            className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SoftwareDeveloperQuiz;