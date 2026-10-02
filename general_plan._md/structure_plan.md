FaunaFinder/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── AnimalCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AnimalDetailsPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── animalService.js
│   │   │   └── authService.js
│   │   │
│   │   ├── hooks/  --> : logic for fetching data
│   │   │   └── useAuth.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx --> Context is for sharing values/data between components without having to pass them through props.
│   │   │
│   │   ├── config/ --> store data url
│   │   │   └── api.js
│   │   │
│   │   ├── utils/
│   │   │   └── formatData.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── env.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── animalController.js
│   │   │   └── authController.js
│   │   │
│   │   ├── routes/
│   │   │   ├── animalRoutes.js
│   │   │   └── authRoutes.js
│   │   │
│   │   ├── services/
│   │   │   ├── animalService.js
│   │   │   └── authService.js
│   │   │
│   │   ├── repositories/
│   │   │   ├── animalRepository.js
│   │   │   └── userRepository.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorMiddleware.js
│   │   │   └── validationMiddleware.js
│   │   │
│   │   ├── validators/
│   │   │   ├── authValidator.js
│   │   │   └── animalValidator.js
│   │   │
│   │   ├── utils/
│   │   │   ├── jwt.js
│   │   │   └── password.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── database/
│   │   ├── migrations/
│   │   ├── seed/
│   │   └── database.db
│   │
│   ├── tests/
│   │   ├── auth.test.js
│   │   └── animal.test.js
│   │
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   └── development.md
│
├── .gitignore
├── README.md
└── package.json