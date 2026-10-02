const categoryJobInfo = [
    {
        id: "software-application-development",
        label: "First Career Category",
        title: "Software & Application Development",
        subtitle: "Learn how software and apps are built",
        overview: [
            "Software and application development is the career area for people who want to create websites, mobile apps, desktop programs, APIs, games, and real software products. This path is a good first dashboard focus because many technology jobs start with understanding how to write code, organize projects, solve problems, and build useful tools for users.",
            "A learner can start with web basics like HTML and CSS, then move into programming with JavaScript, Python, Java, C#, C++, PHP, Ruby, or TypeScript. After learning the basics, the learner can choose a more specific job path such as frontend, backend, full-stack, mobile, API, systems, firmware, or game development."
        ],
        beginnerRoadmap: [
            { step: "HTML", description: "Learn page structure and semantic content." },
            { step: "CSS", description: "Learn layouts, colors, spacing, and responsive design." },
            { step: "JavaScript", description: "Learn programming logic and browser behavior." },
            { step: "Projects", description: "Build portfolio projects that show real practice." }
        ],
        jobs: [
            { name: "Software Engineer", description: "Designs, builds, tests, and improves software systems." },
            { name: "Software Developer", description: "Creates applications and features using programming languages." },
            { name: "Full-Stack Developer", description: "Works on both frontend interfaces and backend server logic." },
            { name: "Front-End Developer", description: "Builds the user interface that people see and use." },
            { name: "Back-End Developer", description: "Builds APIs, authentication, server logic, and database connections." },
            { name: "Web Developer", description: "Creates websites and web applications for users and businesses." },
            { name: "Mobile App Developer", description: "Builds apps for phones and tablets." },
            { name: "API Developer", description: "Creates interfaces that let apps and services communicate." },
            { name: "Game Developer", description: "Builds interactive games, gameplay systems, and game features." }
        ],
        importantSkills: [
            "Problem Solving",
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "APIs",
            "Databases",
            "Testing"
        ],
        learningNote: "codaxLearn can guide beginners through researched learning paths. The goal is to help learners start their career journey, practice skills, and understand what each technology job can require."
    },
    {
        id: "cloud-infrastructure",
        label: "Career Category",
        title: "Cloud & Infrastructure",
        subtitle: "Learn how apps run on servers, networks, and cloud platforms",
        overview: [
            "Cloud and infrastructure work focuses on the systems that keep websites, apps, and company services running. This includes cloud servers, deployment pipelines, storage, networking, monitoring, and reliability.",
            "A learner can begin with computer basics, Linux, networking, and cloud fundamentals, then move into AWS, Azure, Google Cloud, Docker, Kubernetes, DevOps, or site reliability engineering."
        ],
        beginnerRoadmap: [
            { step: "Linux", description: "Learn commands, files, permissions, and server basics." },
            { step: "Networking", description: "Understand IP addresses, DNS, HTTP, firewalls, and ports." },
            { step: "Cloud Basics", description: "Learn compute, storage, databases, and cloud regions." },
            { step: "Deployment", description: "Practice hosting an app and monitoring it online." }
        ],
        jobs: [
            { name: "Cloud Engineer", description: "Builds and manages cloud systems for applications." },
            { name: "Cloud Architect", description: "Designs cloud infrastructure for reliability and scale." },
            { name: "DevOps Engineer", description: "Improves build, release, deployment, and automation workflows." },
            { name: "Site Reliability Engineer", description: "Keeps services stable, fast, and available." },
            { name: "Platform Engineer", description: "Creates internal tools and platforms for developers." }
        ],
        importantSkills: ["Linux", "Networking", "AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring", "Security"],
        learningNote: "This path is good for learners who enjoy systems, automation, problem solving, and keeping real applications online."
    },
    {
        id: "cybersecurity",
        label: "Career Category",
        title: "Cybersecurity",
        subtitle: "Learn how to protect systems, data, and users",
        overview: [
            "Cybersecurity is the career area focused on protecting applications, networks, devices, and company data from attacks. It includes defensive security, ethical hacking, incident response, risk management, and security engineering.",
            "A beginner can start with networking, operating systems, web basics, and security fundamentals before moving into threat analysis, penetration testing, cloud security, or security operations."
        ],
        beginnerRoadmap: [
            { step: "Computer Basics", description: "Understand operating systems, files, users, and permissions." },
            { step: "Networking", description: "Learn how devices communicate and how attacks can happen." },
            { step: "Security Basics", description: "Study passwords, encryption, vulnerabilities, and safe design." },
            { step: "Labs", description: "Practice with legal security labs and beginner CTF challenges." }
        ],
        jobs: [
            { name: "Cybersecurity Analyst", description: "Monitors systems and investigates possible security threats." },
            { name: "Security Engineer", description: "Builds security tools, controls, and protections." },
            { name: "Penetration Tester", description: "Tests systems for weaknesses with permission." },
            { name: "SOC Analyst", description: "Responds to alerts inside a security operations center." },
            { name: "Incident Response Analyst", description: "Helps contain and investigate security incidents." }
        ],
        importantSkills: ["Networking", "Linux", "Security Basics", "Risk Analysis", "Logs", "Python", "Web Security", "Ethics"],
        learningNote: "This path is best learned with patience, legal practice environments, and a strong understanding of responsible behavior."
    },
    {
        id: "ai-machine-learning",
        label: "Career Category",
        title: "AI & Machine Learning",
        subtitle: "Learn how systems can find patterns and make predictions",
        overview: [
            "AI and machine learning focus on building systems that can learn from data, classify information, generate content, recognize images, understand language, or make predictions.",
            "A learner can start with Python, math basics, data handling, and simple models, then move into deep learning, computer vision, NLP, generative AI, or MLOps."
        ],
        beginnerRoadmap: [
            { step: "Python", description: "Learn programming basics and common data libraries." },
            { step: "Math Basics", description: "Study statistics, probability, and linear algebra basics." },
            { step: "Data Practice", description: "Clean, explore, and visualize datasets." },
            { step: "Models", description: "Train simple machine learning models and evaluate results." }
        ],
        jobs: [
            { name: "AI Engineer", description: "Builds AI-powered features and applications." },
            { name: "Machine Learning Engineer", description: "Trains, deploys, and improves machine learning models." },
            { name: "Data Scientist", description: "Uses data and models to answer business or product questions." },
            { name: "NLP Engineer", description: "Builds systems that work with text and language." },
            { name: "MLOps Engineer", description: "Manages model deployment, monitoring, and production workflows." }
        ],
        importantSkills: ["Python", "Statistics", "Data Cleaning", "Machine Learning", "Pandas", "Model Evaluation", "APIs", "Experimentation"],
        learningNote: "This path is powerful, but beginners should build strong programming and data foundations before jumping into advanced models."
    },
    {
        id: "data",
        label: "Career Category",
        title: "Data",
        subtitle: "Learn how to collect, clean, analyze, and explain data",
        overview: [
            "Data careers focus on turning raw information into useful insights, reports, dashboards, models, and data systems. This area is useful for businesses that need better decisions based on evidence.",
            "A learner can begin with spreadsheets and SQL, then move into Python, visualization, analytics, data engineering, business intelligence, or data science."
        ],
        beginnerRoadmap: [
            { step: "Spreadsheets", description: "Practice organizing, filtering, and summarizing data." },
            { step: "SQL", description: "Learn how to query and join database tables." },
            { step: "Visualization", description: "Create charts and dashboards that explain patterns." },
            { step: "Projects", description: "Analyze real datasets and present findings clearly." }
        ],
        jobs: [
            { name: "Data Analyst", description: "Finds insights and creates reports from data." },
            { name: "Data Engineer", description: "Builds pipelines that move and prepare data." },
            { name: "Data Scientist", description: "Uses analysis and models to solve data problems." },
            { name: "BI Analyst", description: "Creates business dashboards and performance reports." },
            { name: "Analytics Engineer", description: "Prepares reliable data models for analysis teams." }
        ],
        importantSkills: ["SQL", "Spreadsheets", "Python", "Data Cleaning", "Dashboards", "Statistics", "Communication", "Visualization"],
        learningNote: "This path is great for learners who like patterns, clear explanations, and using data to answer practical questions."
    },
    {
        id: "databases",
        label: "Career Category",
        title: "Databases",
        subtitle: "Learn how information is stored, organized, and protected",
        overview: [
            "Database careers focus on designing, maintaining, securing, and improving systems that store important data. Almost every serious application depends on databases.",
            "A beginner can start with SQL, table design, relationships, indexes, and backups, then move into database administration, performance tuning, NoSQL, or data architecture."
        ],
        beginnerRoadmap: [
            { step: "SQL", description: "Learn select, insert, update, delete, joins, and grouping." },
            { step: "Design", description: "Understand tables, relationships, keys, and normalization." },
            { step: "Performance", description: "Learn indexes, query plans, and basic optimization." },
            { step: "Operations", description: "Practice backups, permissions, and database safety." }
        ],
        jobs: [
            { name: "Database Administrator", description: "Maintains database performance, security, and reliability." },
            { name: "Database Engineer", description: "Builds and improves database systems." },
            { name: "SQL Developer", description: "Writes queries, procedures, and database logic." },
            { name: "Database Architect", description: "Designs database structures for large systems." },
            { name: "NoSQL Developer", description: "Works with document, key-value, or distributed databases." }
        ],
        importantSkills: ["SQL", "Data Modeling", "Indexes", "Backups", "Security", "Performance", "PostgreSQL", "NoSQL"],
        learningNote: "This path fits learners who like structure, accuracy, and understanding how data survives behind the application."
    },
    {
        id: "it-technical-support",
        label: "Career Category",
        title: "IT & Technical Support",
        subtitle: "Learn how to support users, devices, and business technology",
        overview: [
            "IT and technical support careers help people and organizations keep their computers, accounts, software, and internal systems working. It is one of the most beginner-friendly paths into technology.",
            "A learner can begin with hardware, operating systems, troubleshooting, networking basics, documentation, and customer support skills."
        ],
        beginnerRoadmap: [
            { step: "Computer Basics", description: "Learn hardware, software, files, accounts, and settings." },
            { step: "Troubleshooting", description: "Practice diagnosing problems step by step." },
            { step: "Networking Basics", description: "Understand Wi-Fi, IP addresses, DNS, and common issues." },
            { step: "Support Practice", description: "Learn how to document fixes and communicate clearly." }
        ],
        jobs: [
            { name: "IT Support Specialist", description: "Helps users fix technology problems." },
            { name: "Help Desk Technician", description: "Responds to support tickets and common issues." },
            { name: "Desktop Support Technician", description: "Supports computers, software, printers, and devices." },
            { name: "Systems Administrator", description: "Maintains servers, accounts, and internal systems." },
            { name: "IT Consultant", description: "Advises organizations on technology setup and support." }
        ],
        importantSkills: ["Troubleshooting", "Windows", "Linux Basics", "Networking", "Customer Support", "Documentation", "Security Basics", "Ticketing"],
        learningNote: "This path is a strong starting point for learners who want practical tech experience before specializing."
    },
    {
        id: "networking-telecommunications",
        label: "Career Category",
        title: "Networking & Telecommunications",
        subtitle: "Learn how computers, servers, and communication systems connect",
        overview: [
            "Networking and telecommunications careers focus on the connections that allow devices, apps, offices, and cloud systems to communicate. This includes routers, switches, wireless networks, firewalls, and voice systems.",
            "A beginner can start with IP addressing, DNS, routing, switching, Wi-Fi, and network troubleshooting."
        ],
        beginnerRoadmap: [
            { step: "Network Basics", description: "Learn IP addresses, ports, protocols, and packets." },
            { step: "Devices", description: "Understand routers, switches, modems, and access points." },
            { step: "Troubleshooting", description: "Practice diagnosing connection and speed problems." },
            { step: "Security", description: "Learn firewalls, VPNs, and safe network design." }
        ],
        jobs: [
            { name: "Network Engineer", description: "Builds and maintains computer networks." },
            { name: "Network Administrator", description: "Manages day-to-day network operations." },
            { name: "Network Architect", description: "Designs network systems for organizations." },
            { name: "Wireless Network Engineer", description: "Plans and supports Wi-Fi systems." },
            { name: "NOC Engineer", description: "Monitors network health and responds to outages." }
        ],
        importantSkills: ["TCP/IP", "DNS", "Routing", "Switching", "Wi-Fi", "Firewalls", "VPNs", "Troubleshooting"],
        learningNote: "This path is useful for learners who want to understand the hidden communication layer behind every online system."
    },
    {
        id: "quality-assurance-testing",
        label: "Career Category",
        title: "Quality Assurance & Testing",
        subtitle: "Learn how to find bugs and improve software quality",
        overview: [
            "Quality assurance and testing careers focus on checking software before and after release. Testers help teams find bugs, verify features, protect user experience, and improve product reliability.",
            "A learner can begin with manual testing, test cases, bug reports, web basics, and then move into automation, performance testing, security testing, or SDET work."
        ],
        beginnerRoadmap: [
            { step: "Testing Basics", description: "Learn test cases, expected results, and bug reporting." },
            { step: "Web Basics", description: "Understand how websites and apps behave for users." },
            { step: "Automation Basics", description: "Practice simple automated tests with a testing tool." },
            { step: "Projects", description: "Test real sample apps and write professional bug reports." }
        ],
        jobs: [
            { name: "QA Engineer", description: "Tests software and helps improve release quality." },
            { name: "QA Analyst", description: "Analyzes features, writes test cases, and reports issues." },
            { name: "Automation Test Engineer", description: "Creates automated tests for repeated checks." },
            { name: "SDET", description: "Builds testing tools and test code for software teams." },
            { name: "Performance Test Engineer", description: "Tests speed, load, and system behavior under pressure." }
        ],
        importantSkills: ["Test Cases", "Bug Reports", "Manual Testing", "Automation", "JavaScript", "APIs", "Attention to Detail", "Communication"],
        learningNote: "This path is excellent for learners who are careful, curious, and good at noticing what users might experience."
    },
    {
        id: "architecture-technical-leadership",
        label: "Career Category",
        title: "Architecture & Technical Leadership",
        subtitle: "Learn how large systems and engineering teams are guided",
        overview: [
            "Architecture and technical leadership careers focus on designing large systems, setting technical direction, mentoring engineers, and making decisions that affect long-term product quality.",
            "This is usually not the first beginner role, but learners can understand it early by studying system design, communication, tradeoffs, documentation, and software fundamentals."
        ],
        beginnerRoadmap: [
            { step: "Strong Fundamentals", description: "Build experience with coding, databases, APIs, and deployment." },
            { step: "System Design", description: "Learn how services, data, and users fit together." },
            { step: "Tradeoffs", description: "Practice comparing performance, cost, security, and maintainability." },
            { step: "Leadership", description: "Learn communication, mentoring, planning, and decision writing." }
        ],
        jobs: [
            { name: "Software Architect", description: "Designs the structure of software systems." },
            { name: "Solutions Architect", description: "Designs technical solutions for business needs." },
            { name: "Enterprise Architect", description: "Plans technology direction across an organization." },
            { name: "Staff Engineer", description: "Solves high-impact technical problems and mentors teams." },
            { name: "Engineering Manager", description: "Leads engineers, delivery, planning, and team growth." }
        ],
        importantSkills: ["System Design", "Communication", "Architecture", "Documentation", "Mentoring", "APIs", "Cloud", "Decision Making"],
        learningNote: "This path becomes more realistic after hands-on experience, but learning the concepts early can make beginners better builders."
    },
    {
        id: "mobile-development",
        label: "Career Category",
        title: "Mobile Development",
        subtitle: "Learn how apps are built for phones and tablets",
        overview: [
            "Mobile development focuses on creating applications for iOS and Android devices. Mobile apps often need clean interfaces, smooth performance, offline behavior, notifications, and device features.",
            "A learner can start with programming basics and UI fundamentals, then choose native development with Swift or Kotlin, or cross-platform development with React Native or Flutter."
        ],
        beginnerRoadmap: [
            { step: "Programming", description: "Learn JavaScript, Swift, Kotlin, or Dart basics." },
            { step: "Mobile UI", description: "Understand screens, navigation, forms, and responsive layouts." },
            { step: "APIs", description: "Connect mobile apps to backend data and services." },
            { step: "Publishing", description: "Learn testing, builds, app stores, and release basics." }
        ],
        jobs: [
            { name: "Mobile Developer", description: "Builds mobile apps for users and businesses." },
            { name: "iOS Developer", description: "Creates apps for Apple devices." },
            { name: "Android Developer", description: "Creates apps for Android devices." },
            { name: "React Native Developer", description: "Builds cross-platform apps using React Native." },
            { name: "Flutter Developer", description: "Builds cross-platform apps using Flutter and Dart." }
        ],
        importantSkills: ["Mobile UI", "APIs", "State Management", "Testing", "Performance", "Swift", "Kotlin", "React Native"],
        learningNote: "This path is great for learners who like building useful products that people can carry and use every day."
    },
    {
        id: "game-development",
        label: "Career Category",
        title: "Game Development",
        subtitle: "Learn how interactive games and gameplay systems are created",
        overview: [
            "Game development focuses on building interactive experiences, gameplay mechanics, game systems, tools, graphics, and player-facing features. It combines programming, design thinking, art pipelines, audio, physics, and performance.",
            "A learner can start with programming basics, game loops, simple 2D games, and a game engine like Unity, Unreal, Godot, or browser-based game tools."
        ],
        beginnerRoadmap: [
            { step: "Programming", description: "Learn logic, variables, loops, functions, and events." },
            { step: "Game Basics", description: "Study movement, collision, scoring, levels, and game loops." },
            { step: "Game Engine", description: "Practice with Unity, Godot, Unreal, or web game tools." },
            { step: "Small Games", description: "Build simple playable projects and improve them." }
        ],
        jobs: [
            { name: "Game Developer", description: "Builds game features and interactive systems." },
            { name: "Gameplay Programmer", description: "Creates player controls, mechanics, and game rules." },
            { name: "Game Engine Programmer", description: "Works on rendering, performance, and engine systems." },
            { name: "Technical Game Designer", description: "Connects design ideas with working game logic." },
            { name: "Game QA Tester", description: "Tests games for bugs, balance issues, and user problems." }
        ],
        importantSkills: ["Programming", "Game Engines", "Math Basics", "Physics", "Debugging", "Performance", "Creativity", "Testing"],
        learningNote: "This path is exciting, but small finished games teach more than huge unfinished ideas."
    },
    {
        id: "robotics-hardware",
        label: "Career Category",
        title: "Robotics & Hardware",
        subtitle: "Learn how software connects with machines and physical devices",
        overview: [
            "Robotics and hardware careers focus on systems where code interacts with real-world devices. This includes robots, sensors, circuits, embedded systems, firmware, IoT devices, automation, and control systems.",
            "A learner can begin with electronics basics, programming, microcontrollers, sensors, and simple robotics projects before moving into embedded systems or automation."
        ],
        beginnerRoadmap: [
            { step: "Electronics Basics", description: "Learn voltage, current, circuits, sensors, and components." },
            { step: "Programming", description: "Practice C, C++, Python, or Arduino-style programming." },
            { step: "Microcontrollers", description: "Build simple projects with boards and sensors." },
            { step: "Robotics Projects", description: "Create small systems that sense, decide, and move." }
        ],
        jobs: [
            { name: "Robotics Engineer", description: "Builds robotic systems and automation solutions." },
            { name: "Embedded Systems Engineer", description: "Creates software for hardware devices." },
            { name: "Firmware Engineer", description: "Writes low-level software that controls devices." },
            { name: "IoT Engineer", description: "Builds connected devices and sensor systems." },
            { name: "Automation Engineer", description: "Designs systems that automate physical processes." }
        ],
        importantSkills: ["C/C++", "Python", "Electronics", "Sensors", "Microcontrollers", "Control Systems", "Debugging", "Hardware Safety"],
        learningNote: "This path is strong for learners who like building things they can test in the physical world."
    },
    {
        id: "ui-ux-design",
        label: "Career Category",
        title: "UI/UX & Design",
        subtitle: "Learn how digital products become useful, clear, and pleasant to use",
        overview: [
            "UI/UX and design careers focus on how users experience websites, apps, dashboards, and digital products. Designers study user needs, create layouts, test flows, and improve clarity.",
            "A learner can start with design principles, typography, spacing, color, wireframes, user research, and tools like Figma before moving into product design or UX research."
        ],
        beginnerRoadmap: [
            { step: "Design Basics", description: "Learn spacing, alignment, contrast, hierarchy, and typography." },
            { step: "Wireframes", description: "Sketch simple screens and user flows." },
            { step: "Tools", description: "Practice with Figma or another interface design tool." },
            { step: "Case Studies", description: "Document design decisions and user problems solved." }
        ],
        jobs: [
            { name: "UI Designer", description: "Designs the visual interface of digital products." },
            { name: "UX Designer", description: "Improves the full user experience and product flow." },
            { name: "Product Designer", description: "Combines user needs, business goals, and interface design." },
            { name: "UX Researcher", description: "Studies users to understand problems and behavior." },
            { name: "Design Systems Designer", description: "Creates reusable design rules and components." }
        ],
        importantSkills: ["Figma", "Typography", "Layout", "User Research", "Wireframing", "Prototyping", "Accessibility", "Communication"],
        learningNote: "This path is great for learners who care about how people think, move, read, and make decisions inside products."
    },
    {
        id: "product-project",
        label: "Career Category",
        title: "Product & Project",
        subtitle: "Learn how technology work is planned, prioritized, and delivered",
        overview: [
            "Product and project careers focus on deciding what should be built, why it matters, how teams will deliver it, and how success will be measured. These roles connect users, business goals, design, and engineering.",
            "A learner can start with product thinking, requirements, planning, communication, agile basics, user stories, prioritization, and team coordination."
        ],
        beginnerRoadmap: [
            { step: "Product Basics", description: "Learn users, problems, goals, features, and outcomes." },
            { step: "Planning", description: "Practice breaking big ideas into smaller tasks." },
            { step: "Agile Basics", description: "Understand sprints, backlogs, standups, and reviews." },
            { step: "Communication", description: "Write clear requirements, updates, and decisions." }
        ],
        jobs: [
            { name: "Product Manager", description: "Guides what product teams build and why." },
            { name: "Product Owner", description: "Manages backlog priorities and feature details." },
            { name: "Project Manager", description: "Plans timelines, resources, risks, and delivery." },
            { name: "Scrum Master", description: "Supports agile team process and removes blockers." },
            { name: "Program Manager", description: "Coordinates multiple related projects or teams." }
        ],
        importantSkills: ["Planning", "Prioritization", "User Stories", "Communication", "Agile", "Roadmaps", "Metrics", "Stakeholder Management"],
        learningNote: "This path fits learners who enjoy organization, communication, problem framing, and helping teams move clearly."
    },
    {
        id: "business-technology",
        label: "Career Category",
        title: "Business + Technology",
        subtitle: "Learn how technology solves business problems",
        overview: [
            "Business and technology careers connect technical solutions with real business needs. These roles help companies choose systems, improve processes, analyze requirements, and explain technical ideas to non-technical people.",
            "A beginner can start with business analysis, systems thinking, communication, data basics, documentation, and understanding how software supports operations."
        ],
        beginnerRoadmap: [
            { step: "Business Basics", description: "Understand processes, goals, costs, users, and outcomes." },
            { step: "Requirements", description: "Learn how to gather and document what people need." },
            { step: "Data Basics", description: "Practice reading reports, metrics, and simple dashboards." },
            { step: "Solutions", description: "Map problems to practical technology options." }
        ],
        jobs: [
            { name: "Business Analyst", description: "Studies business needs and turns them into clear requirements." },
            { name: "Systems Analyst", description: "Analyzes how systems support business processes." },
            { name: "Technology Consultant", description: "Advises organizations on technical solutions." },
            { name: "Solutions Engineer", description: "Explains and demonstrates technical solutions to customers." },
            { name: "Implementation Consultant", description: "Helps customers set up and adopt software systems." }
        ],
        importantSkills: ["Requirements", "Communication", "Documentation", "Process Mapping", "SQL Basics", "Problem Solving", "Presentations", "Systems Thinking"],
        learningNote: "This path is good for learners who enjoy both people and technology, especially translating between business and technical teams."
    },
    {
        id: "technical-writing-documentation",
        label: "Career Category",
        title: "Technical Writing & Documentation",
        subtitle: "Learn how to explain complex technology clearly",
        overview: [
            "Technical writing and documentation careers focus on making technology easier to understand. Writers create guides, API docs, tutorials, release notes, help centers, and developer education content.",
            "A learner can start with clear writing, Markdown, basic web concepts, documentation structure, screenshots, examples, and API fundamentals."
        ],
        beginnerRoadmap: [
            { step: "Writing Basics", description: "Practice clear, direct, helpful explanations." },
            { step: "Markdown", description: "Learn headings, lists, links, code blocks, and docs formatting." },
            { step: "Technical Basics", description: "Understand APIs, web apps, terminals, and developer tools." },
            { step: "Docs Projects", description: "Write tutorials, README files, and how-to guides." }
        ],
        jobs: [
            { name: "Technical Writer", description: "Creates documentation for technical products and users." },
            { name: "Documentation Engineer", description: "Builds and maintains documentation systems." },
            { name: "API Documentation Writer", description: "Explains APIs, endpoints, examples, and developer workflows." },
            { name: "Developer Advocate", description: "Creates learning content and supports developer communities." },
            { name: "Technical Content Developer", description: "Produces tutorials, guides, and educational material." }
        ],
        importantSkills: ["Writing", "Markdown", "APIs", "Editing", "Examples", "Information Architecture", "Git", "User Empathy"],
        learningNote: "This path is great for learners who enjoy explaining, organizing knowledge, and making difficult topics easier."
    },
    {
        id: "research",
        label: "Career Category",
        title: "Research",
        subtitle: "Learn how new computing ideas are explored and tested",
        overview: [
            "Research careers focus on discovering new knowledge, improving algorithms, testing ideas, and advancing fields like AI, robotics, cryptography, human-computer interaction, and computing systems.",
            "A learner can start by building strong fundamentals in programming, math, reading papers, experimentation, and writing clear explanations of findings."
        ],
        beginnerRoadmap: [
            { step: "Foundations", description: "Build strong programming, math, and computer science basics." },
            { step: "Reading", description: "Practice reading articles, papers, and technical explanations." },
            { step: "Experiments", description: "Test ideas with small projects and record results." },
            { step: "Writing", description: "Summarize what was tried, what worked, and what changed." }
        ],
        jobs: [
            { name: "Research Scientist", description: "Studies technical problems and develops new ideas." },
            { name: "Computer Scientist", description: "Works on computing theory, systems, or applied research." },
            { name: "AI Research Scientist", description: "Researches new AI methods and model behavior." },
            { name: "HCI Researcher", description: "Studies how people interact with technology." },
            { name: "Robotics Researcher", description: "Explores new robotics systems and methods." }
        ],
        importantSkills: ["Programming", "Math", "Reading Papers", "Experimentation", "Writing", "Statistics", "Algorithms", "Critical Thinking"],
        learningNote: "This path often requires deeper study, but beginners can start by asking good questions and building small experiments."
    },
    {
        id: "blockchain-web3",
        label: "Career Category",
        title: "Blockchain & Web3",
        subtitle: "Learn how decentralized applications and smart contracts work",
        overview: [
            "Blockchain and Web3 careers focus on decentralized systems, smart contracts, crypto protocols, digital wallets, and applications that run on blockchain networks.",
            "A learner can start with web development, cryptography basics, blockchain concepts, smart contract security, and simple decentralized application projects."
        ],
        beginnerRoadmap: [
            { step: "Web Basics", description: "Learn JavaScript, frontend development, and APIs." },
            { step: "Blockchain Concepts", description: "Understand wallets, transactions, blocks, and networks." },
            { step: "Smart Contracts", description: "Practice simple contract logic in a safe test environment." },
            { step: "Security", description: "Study common risks before building real blockchain features." }
        ],
        jobs: [
            { name: "Blockchain Developer", description: "Builds blockchain applications and integrations." },
            { name: "Smart Contract Developer", description: "Creates contract logic for decentralized systems." },
            { name: "Web3 Developer", description: "Builds frontend apps connected to wallets and chains." },
            { name: "Protocol Engineer", description: "Works on blockchain network and protocol code." },
            { name: "Blockchain Security Engineer", description: "Reviews and protects smart contracts and blockchain systems." }
        ],
        importantSkills: ["JavaScript", "Solidity", "Smart Contracts", "Security", "Cryptography Basics", "APIs", "Testing", "Web Development"],
        learningNote: "This path needs extra care because mistakes can be expensive; practice with test networks and learn security early."
    },
    {
        id: "technology-management",
        label: "Career Category",
        title: "Technology Management",
        subtitle: "Learn how technology teams, strategy, and operations are led",
        overview: [
            "Technology management careers focus on leading teams, planning technical strategy, managing operations, hiring, budgeting, risk, and aligning technology with business goals.",
            "This is usually a later-career path, but learners can prepare by understanding software delivery, communication, leadership, project planning, security, data, and business strategy."
        ],
        beginnerRoadmap: [
            { step: "Tech Fundamentals", description: "Understand software, infrastructure, security, and data basics." },
            { step: "Teamwork", description: "Learn collaboration, feedback, planning, and documentation." },
            { step: "Delivery", description: "Study how projects move from idea to release." },
            { step: "Leadership", description: "Practice communication, decision making, and responsibility." }
        ],
        jobs: [
            { name: "IT Manager", description: "Leads IT operations, support, and internal technology services." },
            { name: "Engineering Manager", description: "Supports engineers, delivery, hiring, and team health." },
            { name: "Director of Technology", description: "Guides technology direction across teams or departments." },
            { name: "CTO", description: "Leads high-level technology strategy for an organization." },
            { name: "CIO", description: "Oversees information systems and technology operations." }
        ],
        importantSkills: ["Leadership", "Planning", "Communication", "Budgeting", "Risk Management", "Hiring", "Strategy", "Technical Judgment"],
        learningNote: "This path grows from experience, but beginners can start by learning how teams build, maintain, and improve technology over time."
    }
];

export { categoryJobInfo };