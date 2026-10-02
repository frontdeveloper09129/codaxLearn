export const softwareDeveloperQuizData = [
    {
        id: "SE001",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "What is the main purpose of a function in programming?",
        correctAnswer: "To group reusable code",
        explanation: "A function groups instructions together so they can be reused whenever needed.",
        choices: [
            { id: "A", text: "To store files", isCorrect: false },
            { id: "B", text: "To group reusable code", isCorrect: true },
            { id: "C", text: "To create hardware", isCorrect: false },
            { id: "D", text: "To connect to Wi-Fi", isCorrect: false }
        ]
    },

    {
        id: "SE002",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "Which language is commonly used to add interactivity to web pages?",
        correctAnswer: "JavaScript",
        explanation: "JavaScript is commonly used to make web pages interactive and dynamic.",
        choices: [
            { id: "A", text: "SQL", isCorrect: false },
            { id: "B", text: "JavaScript", isCorrect: true },
            { id: "C", text: "HTML", isCorrect: false },
            { id: "D", text: "CSS", isCorrect: false }
        ]
    },

    {
        id: "SE003",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "What does HTML primarily define?",
        correctAnswer: "The structure of a web page",
        explanation: "HTML defines the structure and content of a web page.",
        choices: [
            { id: "A", text: "The structure of a web page", isCorrect: true },
            { id: "B", text: "The database", isCorrect: false },
            { id: "C", text: "The server hardware", isCorrect: false },
            { id: "D", text: "The operating system", isCorrect: false }
        ]
    },

    {
        id: "SE004",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "What is CSS mainly used for?",
        correctAnswer: "Styling web pages",
        explanation: "CSS controls the appearance and layout of HTML elements.",
        choices: [
            { id: "A", text: "Styling web pages", isCorrect: true },
            { id: "B", text: "Managing databases", isCorrect: false },
            { id: "C", text: "Creating APIs", isCorrect: false },
            { id: "D", text: "Managing servers", isCorrect: false }
        ]
    },

    {
        id: "SE005",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "Which JavaScript keyword declares a variable that cannot be reassigned?",
        correctAnswer: "const",
        explanation: "A variable declared with const cannot be reassigned after initialization.",
        choices: [
            { id: "A", text: "var", isCorrect: false },
            { id: "B", text: "let", isCorrect: false },
            { id: "C", text: "const", isCorrect: true },
            { id: "D", text: "static", isCorrect: false }
        ]
    },

    {
        id: "SE006",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "What does JSON stand for?",
        correctAnswer: "JavaScript Object Notation",
        explanation: "JSON is a text-based format commonly used to exchange structured data.",
        choices: [
            { id: "A", text: "JavaScript Object Notation", isCorrect: true },
            { id: "B", text: "Java Standard Object Network", isCorrect: false },
            { id: "C", text: "JavaScript Online Network", isCorrect: false },
            { id: "D", text: "Java Object Naming", isCorrect: false }
        ]
    },

    {
        id: "SE007",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "Which HTTP method is commonly used to retrieve data?",
        correctAnswer: "GET",
        explanation: "GET requests are commonly used by clients to retrieve resources from a server.",
        choices: [
            { id: "A", text: "POST", isCorrect: false },
            { id: "B", text: "DELETE", isCorrect: false },
            { id: "C", text: "GET", isCorrect: true },
            { id: "D", text: "PATCH", isCorrect: false }
        ]
    },

    {
        id: "SE008",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "easy",
        question: "What does HTTP status code 404 usually mean?",
        correctAnswer: "The requested resource was not found",
        explanation: "A 404 response means the server could not find the requested resource.",
        choices: [
            { id: "A", text: "Request succeeded", isCorrect: false },
            { id: "B", text: "Resource was not found", isCorrect: true },
            { id: "C", text: "Server is starting", isCorrect: false },
            { id: "D", text: "User is authenticated", isCorrect: false }
        ]
    },

    {
        id: "SE009",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What is an API?",
        correctAnswer: "A way for software systems to communicate",
        explanation: "An API defines how different software components can communicate with each other.",
        choices: [
            { id: "A", text: "A database table", isCorrect: false },
            { id: "B", text: "A way for software systems to communicate", isCorrect: true },
            { id: "C", text: "A programming language", isCorrect: false },
            { id: "D", text: "A computer processor", isCorrect: false }
        ]
    },

    {
        id: "SE010",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What is a primary key in a relational database?",
        correctAnswer: "A value that uniquely identifies a row",
        explanation: "A primary key uniquely identifies each record in a database table.",
        choices: [
            { id: "A", text: "A value that uniquely identifies a row", isCorrect: true },
            { id: "B", text: "A password for the database", isCorrect: false },
            { id: "C", text: "A table name", isCorrect: false },
            { id: "D", text: "A database server", isCorrect: false }
        ]
    },

    {
        id: "SE011",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What is a foreign key used for?",
        correctAnswer: "To create a relationship between tables",
        explanation: "A foreign key references a key in another table and allows related records to be connected.",
        choices: [
            { id: "A", text: "To encrypt passwords", isCorrect: false },
            { id: "B", text: "To create a relationship between tables", isCorrect: true },
            { id: "C", text: "To delete a database", isCorrect: false },
            { id: "D", text: "To create CSS styles", isCorrect: false }
        ]
    },

    {
        id: "SE012",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What is middleware commonly used for in Express.js?",
        correctAnswer: "Processing requests before the route handler",
        explanation: "Express middleware can perform tasks such as authentication, logging, validation, and request processing.",
        choices: [
            { id: "A", text: "Processing requests before the route handler", isCorrect: true },
            { id: "B", text: "Creating HTML automatically", isCorrect: false },
            { id: "C", text: "Replacing JavaScript", isCorrect: false },
            { id: "D", text: "Building computer hardware", isCorrect: false }
        ]
    },

    {
        id: "SE013",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What is the purpose of a database JOIN?",
        correctAnswer: "To combine related data from multiple tables",
        explanation: "A JOIN allows related rows from different tables to be retrieved together.",
        choices: [
            { id: "A", text: "To delete tables", isCorrect: false },
            { id: "B", text: "To combine related data from multiple tables", isCorrect: true },
            { id: "C", text: "To create passwords", isCorrect: false },
            { id: "D", text: "To start a server", isCorrect: false }
        ]
    },

    {
        id: "SE014",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What does CRUD stand for?",
        correctAnswer: "Create, Read, Update, Delete",
        explanation: "CRUD describes the four basic operations commonly performed on stored data.",
        choices: [
            { id: "A", text: "Create, Read, Update, Delete", isCorrect: true },
            { id: "B", text: "Connect, Run, Upload, Download", isCorrect: false },
            { id: "C", text: "Create, Run, Use, Deploy", isCorrect: false },
            { id: "D", text: "Copy, Read, Use, Delete", isCorrect: false }
        ]
    },

    {
        id: "SE015",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "What is version control used for?",
        correctAnswer: "Tracking changes to code",
        explanation: "Version control systems allow developers to track, review, and manage changes to source code.",
        choices: [
            { id: "A", text: "Tracking changes to code", isCorrect: true },
            { id: "B", text: "Designing computer processors", isCorrect: false },
            { id: "C", text: "Creating databases automatically", isCorrect: false },
            { id: "D", text: "Styling HTML", isCorrect: false }
        ]
    },

    {
        id: "SE016",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "medium",
        question: "Which tool is commonly used for version control?",
        correctAnswer: "Git",
        explanation: "Git is a distributed version control system commonly used to manage source code.",
        choices: [
            { id: "A", text: "Git", isCorrect: true },
            { id: "B", text: "SQLite", isCorrect: false },
            { id: "C", text: "React", isCorrect: false },
            { id: "D", text: "Express", isCorrect: false }
        ]
    },

    {
        id: "SE017",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "hard",
        question: "What is database normalization mainly intended to reduce?",
        correctAnswer: "Data redundancy",
        explanation: "Normalization organizes database data to reduce unnecessary duplication and improve consistency.",
        choices: [
            { id: "A", text: "Data redundancy", isCorrect: true },
            { id: "B", text: "Internet speed", isCorrect: false },
            { id: "C", text: "CPU temperature", isCorrect: false },
            { id: "D", text: "Screen resolution", isCorrect: false }
        ]
    },

    {
        id: "SE018",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "hard",
        question: "What is authentication?",
        correctAnswer: "Verifying the identity of a user",
        explanation: "Authentication determines whether a user is who they claim to be, often using credentials or sessions.",
        choices: [
            { id: "A", text: "Verifying the identity of a user", isCorrect: true },
            { id: "B", text: "Giving a user database permissions", isCorrect: false },
            { id: "C", text: "Deleting a user", isCorrect: false },
            { id: "D", text: "Creating a web page", isCorrect: false }
        ]
    },

    {
        id: "SE019",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "hard",
        question: "What is authorization?",
        correctAnswer: "Determining what an authenticated user is allowed to access",
        explanation: "Authorization determines which resources or actions a user has permission to access.",
        choices: [
            { id: "A", text: "Creating a password", isCorrect: false },
            { id: "B", text: "Determining what an authenticated user is allowed to access", isCorrect: true },
            { id: "C", text: "Verifying a user's identity", isCorrect: false },
            { id: "D", text: "Connecting to a database", isCorrect: false }
        ]
    },

    {
        id: "SE020",
        quiz_name: "software developer",
        category: "Software Development",
        difficulty: "hard",
        question: "Why should passwords generally be hashed before being stored in a database?",
        correctAnswer: "To avoid storing the original passwords directly",
        explanation: "Password hashing stores a one-way representation of a password instead of the original password.",
        choices: [
            { id: "A", text: "To make passwords shorter", isCorrect: false },
            { id: "B", text: "To avoid storing the original passwords directly", isCorrect: true },
            { id: "C", text: "To make users log in faster", isCorrect: false },
            { id: "D", text: "To remove the need for authentication", isCorrect: false }
        ]
    }
];