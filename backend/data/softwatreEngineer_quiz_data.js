export const softwareEngineerQuizData = [
    {
        id: "se-001",
        quiz_name: "software engineer",
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
    },
    {
        id: "se-002",
        quiz_name: "software engineer",
        category: "Requirements Engineering",
        difficulty: "intermediate",
        question:
            "A product owner gives two requirements that contradict each other. What should the engineering team do first?",
        choices: [
            {
                id: "a",
                text: "Implement whichever requirement is easier.",
                isCorrect: false
            },
            {
                id: "b",
                text: "Ask the relevant stakeholders to clarify and resolve the conflict.",
                isCorrect: true
            },
            {
                id: "c",
                text: "Implement both requirements simultaneously.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Ignore the newer requirement.",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "Conflicting requirements should be identified and resolved with the appropriate stakeholders before implementation. Engineers should not silently choose an interpretation."
    },
    {
        id: "se-003",
        quiz_name: "software engineer",
        category: "API Design",
        difficulty: "beginner",
        question:
            "A REST API needs to retrieve a user's profile without modifying the resource. Which HTTP method is most appropriate?",
        choices: [
            {
                id: "a",
                text: "POST",
                isCorrect: false
            },
            {
                id: "b",
                text: "PATCH",
                isCorrect: false
            },
            {
                id: "c",
                text: "GET",
                isCorrect: true
            },
            {
                id: "d",
                text: "DELETE",
                isCorrect: false
            }
        ],
        correctAnswer: "c",
        explanation:
            "GET is designed for retrieving a representation of a resource without requesting a modification to that resource."
    },
    {
        id: "se-004",
        quiz_name: "software engineer",
        category: "API Design",
        difficulty: "intermediate",
        question:
            "An API successfully creates a new user account. Which HTTP status code most accurately communicates that a new resource was created?",
        choices: [
            {
                id: "a",
                text: "200 OK",
                isCorrect: false
            },
            {
                id: "b",
                text: "201 Created",
                isCorrect: true
            },
            {
                id: "c",
                text: "204 No Content",
                isCorrect: false
            },
            {
                id: "d",
                text: "304 Not Modified",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "HTTP 201 Created indicates that the request succeeded and resulted in the creation of a new resource."
    },
    {
        id: "se-005",
        quiz_name: "software engineer",
        category: "Database Engineering",
        difficulty: "intermediate",
        question:
            "A database contains millions of users, and queries frequently search for users by email address. What database feature would generally improve the efficiency of these lookups?",
        choices: [
            {
                id: "a",
                text: "An index on the email column",
                isCorrect: true
            },
            {
                id: "b",
                text: "A second application server",
                isCorrect: false
            },
            {
                id: "c",
                text: "A larger HTML document",
                isCorrect: false
            },
            {
                id: "d",
                text: "A CSS stylesheet",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "A suitable database index can allow the database engine to locate matching records more efficiently than scanning the entire table."
    },
    {
        id: "se-006",
        quiz_name: "software engineer",
        category: "Database Security",
        difficulty: "intermediate",
        question:
            "An application creates SQL statements by directly concatenating user-provided input into the query string. What is the primary security concern?",
        choices: [
            {
                id: "a",
                text: "SQL injection",
                isCorrect: true
            },
            {
                id: "b",
                text: "Memory fragmentation",
                isCorrect: false
            },
            {
                id: "c",
                text: "Race condition",
                isCorrect: false
            },
            {
                id: "d",
                text: "CSS inheritance",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "Directly combining untrusted input with SQL syntax can allow the input to alter the intended query. Parameterized queries or prepared statements are commonly used to prevent this class of vulnerability."
    },
    {
        id: "se-007",
        quiz_name: "software engineer",
        category: "Security",
        difficulty: "intermediate",
        question:
            "An application checks whether a user is an administrator only on the frontend. The backend accepts the administrator request without performing its own authorization check. What is the primary problem?",
        choices: [
            {
                id: "a",
                text: "The backend trusts client-controlled information for authorization.",
                isCorrect: true
            },
            {
                id: "b",
                text: "The database contains too many records.",
                isCorrect: false
            },
            {
                id: "c",
                text: "The frontend uses too many components.",
                isCorrect: false
            },
            {
                id: "d",
                text: "The API uses JSON.",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "Authorization must be enforced by the trusted server-side system. Client-side checks can improve the user interface but cannot be relied upon as the security boundary."
    },
    {
        id: "se-008",
        quiz_name: "software engineer",
        category: "Authentication",
        difficulty: "intermediate",
        question:
            "Why should an application avoid storing users' passwords as plaintext in its database?",
        choices: [
            {
                id: "a",
                text: "A database administrator would otherwise need to know JavaScript.",
                isCorrect: false
            },
            {
                id: "b",
                text: "A database compromise could directly expose users' passwords.",
                isCorrect: true
            },
            {
                id: "c",
                text: "Plaintext passwords prevent HTTP requests.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Plaintext passwords cannot be stored in SQLite.",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "If plaintext passwords are exposed through a database compromise, attackers immediately obtain the original credentials. Passwords should instead be protected using an appropriate password-hashing algorithm."
    },
    {
        id: "se-009",
        quiz_name: "software engineer",
        category: "Software Design",
        difficulty: "intermediate",
        question:
            "A single class handles authentication, database queries, email delivery, file storage, and HTML rendering. Which design principle is most directly violated?",
        choices: [
            {
                id: "a",
                text: "Single Responsibility Principle",
                isCorrect: true
            },
            {
                id: "b",
                text: "Liskov Substitution Principle",
                isCorrect: false
            },
            {
                id: "c",
                text: "Interface Segregation Principle",
                isCorrect: false
            },
            {
                id: "d",
                text: "Dependency Inversion Principle",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "The Single Responsibility Principle encourages a component to have a focused responsibility rather than accumulating several unrelated responsibilities."
    },
    {
        id: "se-010",
        quiz_name: "software engineer",
        category: "Testing",
        difficulty: "beginner",
        question:
            "A function should return a different result when it receives an empty array. Which test case is most important to include?",
        choices: [
            {
                id: "a",
                text: "Only a large array",
                isCorrect: false
            },
            {
                id: "b",
                text: "Only a randomly generated array",
                isCorrect: false
            },
            {
                id: "c",
                text: "An empty array",
                isCorrect: true
            },
            {
                id: "d",
                text: "Only an array containing strings",
                isCorrect: false
            }
        ],
        correctAnswer: "c",
        explanation:
            "The empty array is a boundary or edge case specifically identified by the requirement, so it should be directly tested."
    },
    {
        id: "se-011",
        quiz_name: "software engineer",
        category: "Testing",
        difficulty: "advanced",
        question:
            "A service depends on a payment provider that is unavailable during unit tests. What is generally appropriate when testing the service's own business logic?",
        choices: [
            {
                id: "a",
                text: "Delete the payment functionality.",
                isCorrect: false
            },
            {
                id: "b",
                text: "Use a controlled test double for the external dependency.",
                isCorrect: true
            },
            {
                id: "c",
                text: "Disable all automated tests.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Connect every test directly to the production payment system.",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "A controlled test double can isolate the service's business logic from an external dependency, making unit tests deterministic and safer."
    },
    {
        id: "se-012",
        quiz_name: "software engineer",
        category: "Git",
        difficulty: "beginner",
        question:
            "A developer has modified several files to implement one feature. What is generally a good practice before merging the work?",
        choices: [
            {
                id: "a",
                text: "Create a focused commit representing the logical change.",
                isCorrect: true
            },
            {
                id: "b",
                text: "Delete the entire Git history.",
                isCorrect: false
            },
            {
                id: "c",
                text: "Commit every character change separately.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Never commit until the project is completely finished.",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "Focused commits make changes easier to review, understand, revert, and trace."
    },
    {
        id: "se-013",
        quiz_name: "software engineer",
        category: "Algorithms",
        difficulty: "intermediate",
        question:
            "What is the average-case time complexity for looking up a value by key in a well-designed hash table?",
        choices: [
            {
                id: "a",
                text: "O(1)",
                isCorrect: true
            },
            {
                id: "b",
                text: "O(log n)",
                isCorrect: false
            },
            {
                id: "c",
                text: "O(n)",
                isCorrect: false
            },
            {
                id: "d",
                text: "O(n²)",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "A well-designed hash table provides average constant-time key lookup, although worst-case behavior can be different depending on collisions and implementation."
    },
    {
        id: "se-014",
        quiz_name: "software engineer",
        category: "System Design",
        difficulty: "advanced",
        question:
            "A web application has one server handling all requests. Traffic has increased significantly, and the team wants to distribute requests across multiple application servers. Which component is commonly used for this purpose?",
        choices: [
            {
                id: "a",
                text: "Load balancer",
                isCorrect: true
            },
            {
                id: "b",
                text: "Password hasher",
                isCorrect: false
            },
            {
                id: "c",
                text: "Source-code formatter",
                isCorrect: false
            },
            {
                id: "d",
                text: "Unit test runner",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "A load balancer can distribute incoming traffic among multiple backend servers, helping a system handle increased traffic and improve availability."
    },
    {
        id: "se-015",
        quiz_name: "software engineer",
        category: "Performance Engineering",
        difficulty: "advanced",
        question:
            "A dashboard has become slow after its dataset grew from thousands to millions of records. What should an engineer generally do before making a major architectural change?",
        choices: [
            {
                id: "a",
                text: "Measure the system and identify the actual bottleneck.",
                isCorrect: true
            },
            {
                id: "b",
                text: "Rewrite the entire application immediately.",
                isCorrect: false
            },
            {
                id: "c",
                text: "Change the programming language.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Remove the database.",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "Performance engineering should be evidence-driven. Profiling and measurement help identify whether the bottleneck is in database queries, network operations, CPU work, memory usage, rendering, or another component."
    },
    {
        id: "se-016",
        quiz_name: "software engineer",
        category: "Debugging",
        difficulty: "intermediate",
        question:
            "A bug appears only when a specific edge case occurs. What is the most professional first step when investigating the issue?",
        choices: [
            {
                id: "a",
                text: "Guess which line is responsible and rewrite it.",
                isCorrect: false
            },
            {
                id: "b",
                text: "Reproduce the problem and gather evidence about the failing conditions.",
                isCorrect: true
            },
            {
                id: "c",
                text: "Delete the feature.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Ignore the problem until it becomes more frequent.",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "Reproducing the issue and gathering evidence helps establish the actual conditions and behavior before changing the implementation."
    },
    {
        id: "se-017",
        quiz_name: "software engineer",
        category: "Architecture",
        difficulty: "advanced",
        question:
            "A team wants to replace the database implementation later without forcing the rest of the application to change significantly. Which approach best supports this goal?",
        choices: [
            {
                id: "a",
                text: "Expose database-specific operations throughout every component.",
                isCorrect: false
            },
            {
                id: "b",
                text: "Separate application logic from database-specific implementation details.",
                isCorrect: true
            },
            {
                id: "c",
                text: "Allow every frontend component to execute SQL directly.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Store database queries inside CSS files.",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "Separating business logic from infrastructure details reduces coupling and makes it easier to replace or modify the underlying database implementation."
    },
    {
        id: "se-018",
        quiz_name: "software engineer",
        category: "API Design",
        difficulty: "advanced",
        question:
            "An API returns 10,000 records even though the client displays only 20 at a time. Which improvement is most appropriate?",
        choices: [
            {
                id: "a",
                text: "Implement server-side pagination.",
                isCorrect: true
            },
            {
                id: "b",
                text: "Return even more records.",
                isCorrect: false
            },
            {
                id: "c",
                text: "Duplicate every record.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Remove all API validation.",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "Server-side pagination allows the API to return only the portion of the dataset needed for the current request, reducing unnecessary network and processing costs."
    },
    {
        id: "se-019",
        quiz_name: "software engineer",
        category: "Software Architecture",
        difficulty: "advanced",
        question:
            "A service fails whenever one external dependency becomes unavailable, causing several other parts of the application to fail as well. Which engineering concern should the team investigate?",
        choices: [
            {
                id: "a",
                text: "Resilience and failure isolation",
                isCorrect: true
            },
            {
                id: "b",
                text: "Variable naming",
                isCorrect: false
            },
            {
                id: "c",
                text: "HTML indentation",
                isCorrect: false
            },
            {
                id: "d",
                text: "CSS specificity",
                isCorrect: false
            }
        ],
        correctAnswer: "a",
        explanation:
            "Resilience and failure isolation involve designing systems so that failures in one component do not unnecessarily propagate throughout the system."
    },
    {
        id: "se-020",
        quiz_name: "software engineer",
        category: "Engineering Decision Making",
        difficulty: "advanced",
        question:
            "Two architectural approaches can satisfy the current requirements, but one will make future changes substantially more difficult. What should the engineering team do?",
        choices: [
            {
                id: "a",
                text: "Choose randomly to avoid discussion.",
                isCorrect: false
            },
            {
                id: "b",
                text: "Evaluate the trade-offs against current requirements and expected future changes.",
                isCorrect: true
            },
            {
                id: "c",
                text: "Always choose the approach with more source code.",
                isCorrect: false
            },
            {
                id: "d",
                text: "Always choose the approach implemented first.",
                isCorrect: false
            }
        ],
        correctAnswer: "b",
        explanation:
            "Professional engineering decisions consider requirements, constraints, maintainability, risks, and expected future changes rather than choosing based on arbitrary characteristics."
    }
];