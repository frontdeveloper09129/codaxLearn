import db from "../database/database.js";
import { softwareDeveloperQuizData } from "../data/softwareDeveloper_quiz_data.js";

// Prepare your SQLite Statements
const insertCategory_name = db.prepare("INSERT OR IGNORE INTO categories (name) VALUES (?)");
const getCategoryId = db.prepare("SELECT id FROM categories WHERE name = ?");
const insertQuiz = db.prepare(`
    INSERT OR IGNORE INTO quizAttemps (name, quiz_id, category_id, question, category_name, choices, correct_answer, explanation)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

// High-speed SQLite transaction block
const seedData = db.transaction(() => {
    for (const quizData of softwareDeveloperQuizData) {
        insertCategory_name.run(quizData.quiz_name);
        const category = getCategoryId.get(quizData.quiz_name);

        insertQuiz.run(
            quizData.quiz_name,
            quizData.id,
            category ? category.id : null,
            quizData.question,
            quizData.category,
            JSON.stringify(quizData.choices),
            quizData.correctAnswer,
            quizData.explanation
        );
    }
});


seedData();
