# BM Grades Calculator

Application for calculating and tracking grades for the Berufsmaturität (BM).

## 📁 Project Structure

```
bm-grades/
├── public/                 # Public static files
│   └── assets/            # Images and resources
│       └── react.svg
│
├── src/
│   ├── constants/         # Constants and configurations
│   │   ├── index.js      # Centralized exports
│   │   └── subjects.js   # BM subjects, exams, lektionentafel
│   │
│   ├── features/          # Features by domain
│   │   └── calculator/   # Grades calculator
│   │       ├── components/
│   │       └── hooks/
│   │
│   ├── styles/           # Global CSS styles
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── utils/            # Utility functions
│   │   ├── index.js
│   │   ├── storage.js    # localStorage management
│   │   └── grades.js     # Grade calculations
│   │
│   ├── App.jsx           # Main component
│   └── main.jsx          # Entry point
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Production preview
npm run preview
```

## 📚 Folder Organization

### `/src/constants`
Contains all configuration constants: BM subjects, exams, lektionentafel.

### `/src/features`
Organization by feature with components, hooks, and business logic.

### `/src/utils`
Reusable utility functions (calculations, storage, formatting).

### `/src/styles`
Global CSS styles and Tailwind configuration.

## 🛠️ Technologies

- React 19
- Vite 7
- Tailwind CSS
- Recharts (charts)
- Lucide React (icons)
