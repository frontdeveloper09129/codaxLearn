import { useEffect, useState } from "react";
import { Header } from "../src/components/header";
import { fetchQuestionFull_stack } from "../src/services/api.services";



function FullStackDeveloperQuiz() {
    const [datas, setdata] = useState([])

    useEffect(() => {
        async function Load(data) {
            try {
                const result = await data()
                setdata(result.questions)
            } catch (error) {
                console.log(error)
            }
        }


        Load(fetchQuestionFull_stack)
    }, [])

    // console.log(datas)
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const handleChoiceClick = async (item, selectedAnswerId) => {
        const response = await fetch("http://localhost:5000/api/v3/quiz/data/submit_answer", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ item, selectedAnswerId })
        })

        const data = await response.json();

        if (response.ok) {
            setSelectedAnswer((prev) => ({
                ...prev,
                [item.id]: {
                    choiceId: selectedAnswerId.id,
                    isCorrect: data.isCorrect
                }
            }))
        } else {
            console.log(data)
        }
    }


    // console.log(selectedAnswer)

    const [data_full_stack_score, setData_full_stack_score] = useState([]);
    const [submit, setSubmit] = useState(false)
    const handleSubmit = async () => {
        console.log(ScoreFeedBack());

        const response = await fetch("http://localhost:5000/api/v3/quiz/data/fullStack_dev_Score", {
            method: "get",
            credentials: "include",
        })

        const data = await response.json();

        if (response.ok) {
            setData_full_stack_score(data);
            setSubmit(true)
            console.log(data)
        } else {
            console.log(data)
            setSubmit(false)
        }
    }

    const [feedBackMessage, setFeedBackMessage] = useState("")
    const ScoreFeedBack = () => {
        const score = data_full_stack_score.totalScore
        if (score > 15) {
            setFeedBackMessage("Exellent!")

        } else if (data_full_stack_score.totalScore > 10) {
            setFeedBackMessage("Good job")

        } else {
            setFeedBackMessage("nice job")
        }
    }

    const [resetSuccesfully, setResetSuccessfully] = useState(null)
    const [resetScoreMessage, setResetScoreMessage] = useState("")
    const handleResetScore = async () => {
        const response = await fetch("http://localhost:5000/api/v3/quiz/data/user/reset_score", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ category: "full stack developer" })
        })

        try {
            const data = await response.json();

            if (response.ok) {
                console.log(data)
                setResetSuccessfully(true);
                setResetScoreMessage(data.message);
                console.log(resetScoreMessage)
            } else {
                console.log(data)
                setResetScoreMessage(data.message);
                console.log(resetScoreMessage)
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="relative w-full mx-auto flex flex-col justify-center align-center items-center ">
            <Header />
            {submit && (
                data_full_stack_score.completed ? (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-md">
                        <div className="flex h-[400px] w-full max-w-[800px] flex-col rounded-lg border border-white/30 bg-white/10 p-4 text-white shadow-xl">
                            <div className="flex h-[60px] w-full items-center justify-between p-2">
                                <p>Quiz complete</p>

                                <button
                                    onClick={() => setSubmit(false)}
                                    className="rounded px-3 py-1 text-xl hover:bg-white/20"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="flex h-full w-full flex-col items-center justify-center">
                                <h1 className="text-xl text-blue-300">Your Score</h1>
                                <span className="text-3xl font-bold">
                                    {data_full_stack_score.totalScore}
                                </span>
                                <p>{feedBackMessage}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-md">
                        <div className="w-full max-w-md rounded-lg border border-white/30 bg-white/10 p-6 text-center text-white shadow-xl">
                            <p className="text-lg font-medium">Quiz not completed yet.</p>

                            <button
                                type="button"
                                onClick={() => setSubmit(false)}
                                className="mt-5 rounded-md bg-blue-600/70 px-5 py-2 font-medium text-white hover:bg-blue-600"
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                )
            )}

            {resetSuccesfully && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-md">
                    <div className="relative flex h-[300px] w-full max-w-md items-center justify-center rounded-xl border border-blue-300/50 bg-white/10 p-6 text-center text-white shadow-xl">
                        <button
                            type="button"
                            onClick={() => {setResetSuccessfully(false), window.location.reload()}}
                            className="absolute right-3 top-2 rounded p-1 text-2xl leading-none text-white/80 hover:bg-white/20 hover:text-white"
                            aria-label="Close message"
                        >
                            ×
                        </button>

                        <p className="pr-6 text-lg font-medium">
                            {resetScoreMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className="w-full max-w-[700px] px-4 mx-auto flex flex-col items-center justify-center">
                {datas.map((item, index) => {
                    const selected = selectedAnswer[item.id]
                    return (
                        <div className=" w-full border  m-3 p-4 p-5" key={index}>
                            <span className="">{index + 1}</span>
                            <div className="">{item.question}</div>
                            {item.choices.map((choice, id) => (
                                <div className="choices" key={id}>
                                    <button
                                        disabled={!!selected}
                                        className={`flex w-full m-2 items-start gap-3 rounded-lg border p-3 text-left text-sm transition ${selected?.choiceId === choice.id
                                            ? selected.isCorrect
                                                ? "border-green-500 bg-green-50 text-green-700"
                                                : "border-red-500 bg-red-50 text-red-700"
                                            : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                                            }`}
                                        onClick={() => handleChoiceClick(item, choice)}
                                    >
                                        <span className="mr-2 border border-black block w-5 text-center"
                                        >{choice.id}
                                        </span>
                                        {choice.text}
                                    </button>
                                </div>
                            ))}
                        </div>
                    );
                })}
                <div className="w-full h-[60px] self-start px-20 flex flex-row justify-between items-center align-center ">
                    <button
                        className="w-full max-w-[100px] border rounded-sm border-green-black-500 bg-green-400"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="w-full max-w-[100px] border rounded-sm border-green-black-500 bg-red-400"
                        onClick={handleResetScore}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FullStackDeveloperQuiz;
