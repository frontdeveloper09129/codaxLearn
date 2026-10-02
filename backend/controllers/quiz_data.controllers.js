import { softwareEngineerQuizData } from "../data/softwatreEngineer_quiz_data.js";
import db from "../database/database.js"

// Correct answers are private server data. Never include `isCorrect` in a
// question response because a browser user can inspect any API response.
const toPublicQuestion = (quiz) => ({
    id: quiz.id,
    name: quiz.name,
    quiz_id: quiz.quiz_id,
    category_id: quiz.category_id,
    question: quiz.question,
    category_name: quiz.category_name,
    choices: JSON.parse(quiz.choices).map(({ id, text }) => ({ id, text }))
});

export const GetQuiz_Question_data = (req, res) => {
    const getQuizAttempts = db.prepare("SELECT * FROM quizAttemps WHERE name = ?").all("software engineer")


    const userId = req.userId;


    const question = []

    for (const quiz of getQuizAttempts) {
        question.push(toPublicQuestion(quiz))
    }

    return res.status(200).json({ message: "quiz_data", question })


}

export const GetQuizData_softwareDeveloper = (req, res) => {
    const data = db.prepare("SELECT * FROM quizAttemps WHERE name = ?").all("software developer")
    // const choices = data.map((item) => ({
    //     ...item,
    //     choices: JSON.parse(item.choices)
    // }))
    const question = []
    for (const item of data) {
        question.push(toPublicQuestion(item))
    }

    return res.status(200).json({ questions: question })
}


export const GetQuizData_fullstackDeveloper = (req, res) => {
    const userId = req.userId;


    const _quiz_data_ = db.prepare("SELECT * FROM quizAttemps WHERE name = ?").all("full stack developer");
    const question = []

    for (const item of _quiz_data_) {
        question.push(toPublicQuestion(item));
    }

    return res.status(200).json({
        message: "full stack quiz",
        questions: question
    });
}

export const SubmitAnswer = (req, res) => {
    const userId = req.userId;

    // Support the existing client payload while deriving every important value
    // from the database rather than trusting the browser.
    const questionId = Number(req.body.questionId ?? req.body.item?.id);
    const selectedChoiceId = req.body.selectedChoiceId ?? req.body.selectedAnswerId?.id;

    if (!Number.isInteger(questionId) || typeof selectedChoiceId !== "string") {
        return res.status(400).json({ message: "questionId and selectedChoiceId are required" })
    }

    const quizId = db.prepare("SELECT * FROM quizAttemps WHERE id = ?").get(questionId);
    if (!quizId) {
        return res.status(404).json({ message: "quiz not found" })
    }

    // console.log(quizId.name)

    const selectedChoices = db.prepare("SELECT id, choices FROM  quizAttemps WHERE id = ?").get(quizId.id)
    if (!selectedChoices) return res.status(404).json({ message: "selected choices not found" })

    const choices = JSON.parse(selectedChoices.choices);
    // console.log(choices)


    const choicesId = choices.find((choice) => choice.id === selectedChoiceId)


    if (!choicesId) return res.status(400).json({ message: "selected answer does not belong to this question" })

    let answer = false
    let score;
    if (choicesId.isCorrect === true) {
        answer = true
        score = 1
    } else {
        answer = false
        score = 0
    }


    const checkDuplicate = db
        .prepare(`
            SELECT id
            FROM userScores
            WHERE user_id = ?
            AND category_id = ?
            AND question = ?
        `)
        .get(
            userId,
            quizId.category_id,
            quizId.question
        );

    if (checkDuplicate) {
        return res.status(409).json({
            message: "Question already answered"
        });
    }



    db.prepare(`
        INSERT INTO userScores
        (name, user_id, category_id, question, isCorrect)
        VALUES (?, ?, ?, ?, ?)
    `).run(
        quizId.name,
        userId,
        quizId.category_id,
        quizId.question,
        score
    );



    return res.status(201).json({ message: "Answer recorded", questionId: quizId.id, selectedChoiceId, isCorrect: answer })
}

export const CalculateScoreByname = (req, res, quizName) => {
    const userId = req.userId;

    // save score in the database
    // calculate how many isCorrect has 1
    // fetch the data in the frontend 
    // every time that the user click the submit button the user fetching their data from the database and get thier total score
    // calculate the total score

    const userScores = db.prepare("SELECT * FROM userScores WHERE user_id = ? AND name = ?").all(userId, quizName);
    let total_score = 0
    for (const score of userScores) {
        // console.log(score)
        total_score += score.isCorrect
    }


    const totalQuestion = db.prepare("SELECT COUNT(*) AS count FROM quizAttemps WHERE name = ?").get(quizName).count;
    return res.status(200).json({
        user: userScores,
        totalScore: total_score,
        totalAnswered: userScores.length,
        totalQuestion,
        completed: totalQuestion > 0 && userScores.length === totalQuestion
    })
}

// const userScores = db.prepare("SELECT * FROM userScores WHERE user_id = ? AND name = ?").all(3, 'full stack developer');
// console.log(userScores.length)




export const getScoreSoftwareEng = (req, res) => {
    return CalculateScoreByname(req, res, "software engineer");
};

export const getScoreSoftWareDev = (req, res) => {
    return CalculateScoreByname(req, res, "software developer");
};

export const getScoreFullDev = (req, res) => {
    return CalculateScoreByname(req, res, "full stack developer");
};

export const ResetUSerDataFrom_quiz = (req, res) => {
    // 1. Get session ID from cookie
    const sessionId = req.cookies.sessionId;

    if (!sessionId) {
        return res.status(401).json({
            message: "session is not found or valid"
        });
    }

    // 2. Find the user from the session
    const session = db.prepare(`
            SELECT user_id
            FROM sessions
            WHERE session_id = ?
        `).get(sessionId);

    if (!session) {
        return res.status(401).json({
            message: "session is not valid or expire"
        });
    }

    const userId = session.user_id;



}

export const GetuserScoreByid = (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "user id is required found" })


    const scores = db.prepare("SELECT * FROM  userScores WHERE user_id = ?").all(userId);
    let total_Score = 0
    for (const score of scores) {
        total_Score += score.isCorrect
        // selected_question.push(score.question)

    }

    return res.status(200).json({ user: userId, selected_question: scores, score: total_Score, total_answer: scores.length })

}


export const resetUserScore = (req, res) => {
    const userId = req.userId;
    const { category: quizName } = req.body;

    if (!quizName) return res.status(400).json({ message: "category is required" })

    if (!userId) return res.status(401).json({ message: "user id is required found" })


    const userData = db.prepare("SELECT * FROM userScores WHERE user_id = ? AND name = ?").all(userId, quizName);
    const asnwerQuestionLength = userData.length;
    let isReset = false
    if (asnwerQuestionLength !== 20) {
        isReset = false
        return res.status(200).json({ message: "you cant reset score unless you already finished the quiz", asnwerQuestionLength, isReset: isReset })
    }else {
        isReset = true
    }

    const userScoredData = db.prepare("DELETE FROM userScores WHERE user_id = ? AND name = ?").run(userId, quizName)

    return res.status(200).json({ message: "Quiz score reset", deleted: userScoredData.changes, isReset: isReset })

}


