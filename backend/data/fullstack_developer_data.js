const fullStackQuestions = [
    {
        id: "FS001",
        quiz_name: "full stack developer",
        category: "Frontend Development",
        difficulty: "medium",
        question: "What is the primary purpose of the Virtual DOM in modern frontend frameworks such as React?",
        correctAnswer: "To efficiently update the actual DOM",
        explanation: "The Virtual DOM provides a lightweight representation of the UI. The framework compares changes and updates only the necessary parts of the actual DOM.",
        choices: [
            { id: "A", text: "To store data permanently in the browser", isCorrect: false },
            { id: "B", text: "To efficiently update the actual DOM", isCorrect: true },
            { id: "C", text: "To replace JavaScript entirely", isCorrect: false },
            { id: "D", text: "To encrypt frontend source code", isCorrect: false }
        ]
    },
    {
        id: "FS002",
        quiz_name: "full stack developer",
        category: "JavaScript",
        difficulty: "hard",
        question: "What is the main purpose of using async/await in JavaScript?",
        correctAnswer: "To write asynchronous code in a more readable, synchronous-like style",
        explanation: "async/await provides syntax for working with Promises, making asynchronous operations easier to read and maintain while still being non-blocking.",
        choices: [
            { id: "A", text: "To make all JavaScript operations synchronous", isCorrect: false },
            { id: "B", text: "To write asynchronous code in a more readable, synchronous-like style", isCorrect: true },
            { id: "C", text: "To eliminate the need for functions", isCorrect: false },
            { id: "D", text: "To automatically optimize database queries", isCorrect: false }
        ]
    },
    {
        id: "FS003",
        quiz_name: "full stack developer",
        category: "Web Development",
        difficulty: "medium",
        question: "Which HTTP status code indicates that a request was successfully processed and the server returned a response?",
        correctAnswer: "200 OK",
        explanation: "HTTP 200 OK indicates that the request was successfully processed by the server.",
        choices: [
            { id: "A", text: "201 Created", isCorrect: false },
            { id: "B", text: "200 OK", isCorrect: true },
            { id: "C", text: "404 Not Found", isCorrect: false },
            { id: "D", text: "500 Internal Server Error", isCorrect: false }
        ]
    },
    {
        id: "FS004",
        quiz_name: "full stack developer",
        category: "REST API",
        difficulty: "medium",
        question: "Which HTTP method is generally used to create a new resource through a REST API?",
        correctAnswer: "POST",
        explanation: "The POST method is commonly used to submit data to a server and create a new resource.",
        choices: [
            { id: "A", text: "GET", isCorrect: false },
            { id: "B", text: "POST", isCorrect: true },
            { id: "C", text: "DELETE", isCorrect: false },
            { id: "D", text: "HEAD", isCorrect: false }
        ]
    },
    {
        id: "FS005",
        quiz_name: "full stack developer",
        category: "Databases",
        difficulty: "hard",
        question: "Which database feature ensures that a group of related operations either all succeed or all fail?",
        correctAnswer: "Transaction",
        explanation: "A database transaction groups multiple operations into a single unit of work. Atomicity ensures that either all operations are committed or none are.",
        choices: [
            { id: "A", text: "Index", isCorrect: false },
            { id: "B", text: "Transaction", isCorrect: true },
            { id: "C", text: "View", isCorrect: false },
            { id: "D", text: "Trigger", isCorrect: false }
        ]
    },
    {
        id: "FS006",
        quiz_name: "full stack developer",
        category: "Database Optimization",
        difficulty: "hard",
        question: "What is the primary purpose of an index in a relational database?",
        correctAnswer: "To improve the speed of data retrieval",
        explanation: "Indexes create data structures that allow the database engine to locate records more efficiently, although they can increase storage usage and write overhead.",
        choices: [
            { id: "A", text: "To encrypt database records", isCorrect: false },
            { id: "B", text: "To improve the speed of data retrieval", isCorrect: true },
            { id: "C", text: "To automatically back up the database", isCorrect: false },
            { id: "D", text: "To prevent all database errors", isCorrect: false }
        ]
    },
    {
        id: "FS007",
        quiz_name: "full stack developer",
        category: "SQL",
        difficulty: "hard",
        question: "What is the main purpose of database normalization?",
        correctAnswer: "To reduce data redundancy and improve data integrity",
        explanation: "Normalization organizes data into related tables to reduce unnecessary duplication and help maintain consistent data.",
        choices: [
            { id: "A", text: "To increase duplicate data", isCorrect: false },
            { id: "B", text: "To reduce data redundancy and improve data integrity", isCorrect: true },
            { id: "C", text: "To eliminate the need for primary keys", isCorrect: false },
            { id: "D", text: "To convert SQL into JavaScript", isCorrect: false }
        ]
    },
    {
        id: "FS008",
        quiz_name: "full stack developer",
        category: "Authentication",
        difficulty: "hard",
        question: "Why should passwords generally be hashed before being stored in a database?",
        correctAnswer: "To avoid storing the original passwords directly",
        explanation: "Password hashing stores a one-way representation of a password instead of the original password. Secure password-hashing algorithms are designed to make recovering the original password computationally difficult.",
        choices: [
            { id: "A", text: "To make passwords shorter", isCorrect: false },
            { id: "B", text: "To avoid storing the original passwords directly", isCorrect: true },
            { id: "C", text: "To make users log in faster", isCorrect: false },
            { id: "D", text: "To remove the need for authentication", isCorrect: false }
        ]
    },
    {
        id: "FS009",
        quiz_name: "full stack developer",
        category: "Web Security",
        difficulty: "hard",
        question: "Which technique is commonly used to prevent SQL injection attacks?",
        correctAnswer: "Using parameterized queries",
        explanation: "Parameterized queries separate SQL commands from user-supplied values, preventing malicious input from being interpreted as part of the SQL statement.",
        choices: [
            { id: "A", text: "Using parameterized queries", isCorrect: true },
            { id: "B", text: "Concatenating user input into SQL strings", isCorrect: false },
            { id: "C", text: "Disabling database indexes", isCorrect: false },
            { id: "D", text: "Storing SQL queries in browser cookies", isCorrect: false }
        ]
    },
    {
        id: "FS010",
        quiz_name: "full stack developer",
        category: "Web Security",
        difficulty: "hard",
        question: "What is the primary purpose of HTTPS?",
        correctAnswer: "To protect data exchanged between the client and server using encryption",
        explanation: "HTTPS uses TLS to protect data in transit, helping prevent attackers from reading or modifying communication between the client and server.",
        choices: [
            { id: "A", text: "To increase database storage capacity", isCorrect: false },
            { id: "B", text: "To protect data exchanged between the client and server using encryption", isCorrect: true },
            { id: "C", text: "To eliminate server-side validation", isCorrect: false },
            { id: "D", text: "To make JavaScript execute faster", isCorrect: false }
        ]
    },
    {
        id: "FS011",
        quiz_name: "full stack developer",
        category: "Authentication",
        difficulty: "hard",
        question: "What is a common purpose of a JSON Web Token (JWT) in web applications?",
        correctAnswer: "To securely represent claims that can be used for authentication or authorization",
        explanation: "JWTs can carry signed claims between parties. In web applications, they are commonly used to represent authenticated sessions or authorization information.",
        choices: [
            { id: "A", text: "To permanently store passwords", isCorrect: false },
            { id: "B", text: "To securely represent claims that can be used for authentication or authorization", isCorrect: true },
            { id: "C", text: "To replace all database tables", isCorrect: false },
            { id: "D", text: "To compile CSS into JavaScript", isCorrect: false }
        ]
    },
    {
        id: "FS012",
        quiz_name: "full stack developer",
        category: "Backend Development",
        difficulty: "medium",
        question: "What is middleware commonly used for in a backend web application?",
        correctAnswer: "Processing requests before they reach the final route handler",
        explanation: "Middleware can perform tasks such as authentication, logging, validation, request parsing, and error handling before or after route handlers.",
        choices: [
            { id: "A", text: "Processing requests before they reach the final route handler", isCorrect: true },
            { id: "B", text: "Replacing the database entirely", isCorrect: false },
            { id: "C", text: "Designing physical server hardware", isCorrect: false },
            { id: "D", text: "Automatically writing frontend CSS", isCorrect: false }
        ]
    },
    {
        id: "FS013",
        quiz_name: "full stack developer",
        category: "API Design",
        difficulty: "hard",
        question: "What does idempotency mean when discussing HTTP operations?",
        correctAnswer: "Repeating the same request produces the same intended server state",
        explanation: "An idempotent operation can be performed multiple times without changing the result beyond the effect of the initial operation. PUT and DELETE are generally considered idempotent by HTTP semantics.",
        choices: [
            { id: "A", text: "The request must always return HTTP 200", isCorrect: false },
            { id: "B", text: "Repeating the same request produces the same intended server state", isCorrect: true },
            { id: "C", text: "The request must contain JSON", isCorrect: false },
            { id: "D", text: "The server must never return an error", isCorrect: false }
        ]
    },
    {
        id: "FS014",
        quiz_name: "full stack developer",
        category: "Caching",
        difficulty: "hard",
        question: "What is the primary purpose of caching in a full stack application?",
        correctAnswer: "To reduce repeated computation or data retrieval",
        explanation: "Caching stores frequently accessed data closer to where it is needed, reducing database queries, computation, network traffic, or response time.",
        choices: [
            { id: "A", text: "To reduce repeated computation or data retrieval", isCorrect: true },
            { id: "B", text: "To eliminate authentication", isCorrect: false },
            { id: "C", text: "To permanently replace the database", isCorrect: false },
            { id: "D", text: "To guarantee that data is never outdated", isCorrect: false }
        ]
    },
    {
        id: "FS015",
        quiz_name: "full stack developer",
        category: "Frontend Security",
        difficulty: "hard",
        question: "Which security vulnerability occurs when untrusted user input is inserted into a webpage and interpreted as executable script?",
        correctAnswer: "Cross-Site Scripting (XSS)",
        explanation: "XSS occurs when an application allows attacker-controlled content to execute as script in another user's browser.",
        choices: [
            { id: "A", text: "Cross-Site Scripting (XSS)", isCorrect: true },
            { id: "B", text: "SQL normalization", isCorrect: false },
            { id: "C", text: "Database indexing", isCorrect: false },
            { id: "D", text: "Load balancing", isCorrect: false }
        ]
    },
    {
        id: "FS016",
        quiz_name: "full stack developer",
        category: "System Design",
        difficulty: "hard",
        question: "What is the primary purpose of a load balancer in a web application architecture?",
        correctAnswer: "To distribute incoming traffic across multiple servers",
        explanation: "A load balancer distributes requests across multiple backend instances, which can improve scalability, availability, and resource utilization.",
        choices: [
            { id: "A", text: "To store passwords securely", isCorrect: false },
            { id: "B", text: "To distribute incoming traffic across multiple servers", isCorrect: true },
            { id: "C", text: "To replace frontend frameworks", isCorrect: false },
            { id: "D", text: "To normalize database tables", isCorrect: false }
        ]
    },
    {
        id: "FS017",
        quiz_name: "full stack developer",
        category: "Database Relationships",
        difficulty: "hard",
        question: "In a relational database, what is a foreign key primarily used for?",
        correctAnswer: "To establish a relationship between records in different tables",
        explanation: "A foreign key references a key in another table and helps maintain referential integrity between related records.",
        choices: [
            { id: "A", text: "To encrypt an entire database", isCorrect: false },
            { id: "B", text: "To establish a relationship between records in different tables", isCorrect: true },
            { id: "C", text: "To increase the size of a database column", isCorrect: false },
            { id: "D", text: "To automatically generate frontend components", isCorrect: false }
        ]
    },
    {
        id: "FS018",
        quiz_name: "full stack developer",
        category: "API Security",
        difficulty: "hard",
        question: "Why is server-side validation necessary even when client-side validation is implemented?",
        correctAnswer: "Because client-side validation can be bypassed by users or attackers",
        explanation: "Client-side validation improves user experience but cannot be trusted as a security boundary. Server-side validation ensures that untrusted data is checked before processing or storing it.",
        choices: [
            { id: "A", text: "Because client-side validation can be bypassed by users or attackers", isCorrect: true },
            { id: "B", text: "Because browsers cannot execute JavaScript", isCorrect: false },
            { id: "C", text: "Because databases cannot store validated data", isCorrect: false },
            { id: "D", text: "Because frontend validation automatically disables APIs", isCorrect: false }
        ]
    },
    {
        id: "FS019",
        quiz_name: "full stack developer",
        category: "Concurrency",
        difficulty: "hard",
        question: "What problem can a database transaction help prevent when multiple users modify related data at the same time?",
        correctAnswer: "Inconsistent intermediate or partial updates",
        explanation: "Transactions provide guarantees such as atomicity and isolation that help keep related database operations consistent when concurrent operations occur.",
        choices: [
            { id: "A", text: "Inconsistent intermediate or partial updates", isCorrect: true },
            { id: "B", text: "All network latency", isCorrect: false },
            { id: "C", text: "All frontend rendering issues", isCorrect: false },
            { id: "D", text: "The need for database backups", isCorrect: false }
        ]
    },
    {
        id: "FS020",
        quiz_name: "full stack developer",
        category: "System Design",
        difficulty: "hard",
        question: "Which architectural approach is commonly used to allow an application to scale by running multiple independent backend instances?",
        correctAnswer: "Stateless application servers behind a load balancer",
        explanation: "Stateless backend instances can process requests independently, allowing traffic to be distributed across multiple servers. Shared state can be stored in external systems such as databases or caches when necessary.",
        choices: [
            { id: "A", text: "A single server storing all application state in memory", isCorrect: false },
            { id: "B", text: "Stateless application servers behind a load balancer", isCorrect: true },
            { id: "C", text: "A frontend-only application with no backend", isCorrect: false },
            { id: "D", text: "Multiple databases with no synchronization strategy", isCorrect: false }
        ]
    }
];

export default fullStackQuestions