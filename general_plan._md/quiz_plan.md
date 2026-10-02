create a routes for all the question so i can fetch it.
but to dothat first we need to insert all the question from the databse 
so we need a table for categories or for all of the object here:
                                                                id: "se-001",
                                                                category: "Software Engineering Fundamentals",
                                                                difficulty: "beginner",
                                                                question:
                                                                    "A software engineer receives a requirement stating, 'The application should be fast.' What is the main problem with this requirement?",
                                                                choices: [
                                                                    {
                                                                        id: "a",
                                                                        text: "It is not measurable enough to verify objectively.",
                                                                        isCorrect: true
                                                                    },
                                                                    {
                                                                        id: "b",
                                                                        text: "It contains too much technical detail.",
                                                                        isCorrect: false
                                                                    },
                                                                    {
                                                                        id: "c",
                                                                        text: "It describes a database implementation.",
                                                                        isCorrect: false
                                                                    },
                                                                    {
                                                                        id: "d",
                                                                        text: "It can only be implemented using JavaScript.",
                                                                        isCorrect: false
                                                                    }
                                                                ],
                                                                correctAnswer: "a",
                                                                explanation:
                                                                    "A professional requirement should be specific and measurable. 'Fast' is subjective, while a requirement such as '95% of requests must complete within 300 ms' can be tested objectively."
so now since our databse has holding a lot of question we can fetch it from our frontend to displau all the question.
now we can use onclick to know which answer they select from our choices and send it to the backend.
then compare using choices.find((choice) => choice.id === selectedAnswerId) the true or false





step 1:
-   create first the coloumn in a data base
    -   create data base column that holding a value for every category
        - so we need to insert first the all category from the column database column
        - then we need to find the category name from the database colulmn since we inserting the column of quiz attempt after the user click the selected choicess
            - so meaning after the user clcik the choices or selected answer the category name that equal by the user selected question will be having a
            user_id : category_id : score : totalQuestion






software dev quiz plan:
    backend
        data
            data.quiz_softwareenginer.js: => put all the data of question or data for quiz
        database
            database.js
                 create a database column for:
                    -   category
                        -   id
                        -   name
                    -   quizAttemps:
                        -   id
                        -   user_id -- > this will be the user id that will login on our website or app

                        -   quizId --> this will be the quiz data id like = id = "see-001"
                        -   categoryId --> this will be the categoryId that connect to our database
                        -   category_name --> this will be a categor = name like = software Engineering Fundamentals
                        -   question --> cantain all the question
                        -   choices
                        -   correct_answerr
                        -   explantion
        seed
            seed.quiz_data_software_developer.js
                -  insert all quiz data in the database:
                    -   quizId -> insert all the id of all quiz data like id = "see-001"
                    -   categoryname = category.name
                    -   
        