import db from "../database/database.js";
import { softwareEngineerQuizData } from "../data/softwatreEngineer_quiz_data.js";

const insertCategory = db.prepare(
    "INSERT OR IGNORE INTO categories (name) VALUES (?)"
);

const insertQuizAttempts = db.prepare(
    "INSERT OR IGNORE INTO quizAttemps (name, quiz_id, category_id, question, category_name, choices, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);

const seedData = db.transaction(() => {
    for (const quiz of softwareEngineerQuizData) {
        // 1. Insert the actual category name (e.g., "API Design")
        insertCategory.run(quiz.quiz_name);

        // 2. Query categories using quiz.category
        const categoryRow = db.prepare("SELECT id FROM categories WHERE name = ?").get(quiz.quiz_name);

        if (!categoryRow) {
            throw new Error(`Category not found: ${quiz.category}`);
        }

        // 3. Pass categoryRow.id (the number) instead of the whole object
        insertQuizAttempts.run(
            quiz.quiz_name, 
            quiz.id, 
            categoryRow.id, 
            quiz.question, 
            quiz.category, 
            JSON.stringify(quiz.choices), 
            quiz.correctAnswer, 
            quiz.explanation
        );
    }
});

seedData();

console.log("Successfully inserted data into the database!");

const getQuizAttempts = db.prepare("SELECT * FROM quizAttemps").all();
const getName = db.prepare("SELECT * FROM categories").all()
// console.log(getName)
// console.log(`Total questions inserted: ${getQuizAttempts.length}`);
// console.log(getQuizAttempts)