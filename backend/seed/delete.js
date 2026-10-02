import db from "../database/database.js";

db.prepare("DELETE FROM quizAttemps", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("succesfully deleted")
    }
}).run()






console.log("sussecgully dleete"

)

// console.log()
// const data = db.prepare("SELECT * FROM quizAttemps").all()
// console.log(data)
