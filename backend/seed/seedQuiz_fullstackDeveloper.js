import db from "../database/database.js";
import fullStackQuestions from "../data/fullstack_developer_data.js";


const category = db.prepare("INSERT INTO categories (name) VALUES (?)")
const quizAttemps = db.prepare(
    "INSERT INTO  quizAttemps (name, quiz_id, category_id, question, category_name, choices, correct_answer, explanation ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
)



// CREATE TABLE IF NOT EXISTS quizAttemps (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     quiz_id TEXT NOT NULL,
//     category_id INTEGER NOT NULL,
//     question TEXT NOT NULL,
//     category_name TEXT NOT NULL,
//     choices TEXT NOT NULL,
//     correct_answer TEXT NOT NULL,
//     explanation TEXT NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (category_id) REFERENCES categories(id)
// );


const seedData = db.transaction(() => {

    for (const question of fullStackQuestions) {
        const categoryLength = db.prepare("SELECT * FROM categories WHERE name = ?").all(question.quiz_name);
        const checkQuestionLength = db.prepare("SELECT * FROM quizAttemps WHERE name = ?").all(question.quiz_name);
        category.run(question.quiz_name)

        const categoryId = db.prepare("SELECT * FROM categories WHERE name = ?").get(question.quiz_name)
        quizAttemps.run(question.quiz_name, question.id, categoryId.id, question.question, question.category, JSON.stringify(question.choices), question.correctAnswer, question.explanation);
    }
});
seedData()



// const data = db.prepare("SELECT * FROM quizAttemps WHERE name = ?").all("full stack developer")
const data = db.prepare("SELECT *  FROM quizAttemps WHERE name = ?").all("full stack developer")
console.log(data)



