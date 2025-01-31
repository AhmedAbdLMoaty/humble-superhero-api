# Humble Superhero Project 🦸‍♀️🦸‍♂️

**A playful NestJS + React (TypeScript) application celebrating everyday heroes with a dash of humility.**

---

## 🚀 Overview
- **Backend**: [NestJS](https://nestjs.com/) for a robust, modular API.
- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) for a fast, interactive UI.
- **Database**: In-memory (an array) for simplicity.
- **Tests**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/) for unit & integration tests.
- **Goal**: Add superheroes (with name, superpower, humility score) & list them by humility.

---

## 🎯 Features
1. **Add Hero**: Name, superpower, and a humility score (1-10).
2. **View Heroes**: Listed in descending order of humility.
3. **Validation**: Ensures valid scores and non-empty fields (via custom checks).
4. **Testing**: Full coverage for essential logic (both backend & frontend).
5. **Documentation**: Clear, concise, and developer-friendly.

---

## ⚙️ Tech Stack
- **TypeScript** for type safety and clarity.
- **NestJS** for the backend structure & controllers.
- **React + Vite** for a snappy, modern frontend.
- **Framer Motion** for smooth UI animations (optional).
- **Vitest** for tests, with `vi` mocks & spies.

---

## 📂 Project Structure
```bash
humble-superhero-project/
├── backend/            # NestJS (modules, controllers, services)
│   └── src/
│       └── superheroes/
│           ├── dto/
│           ├── interfaces/
│           ├── *.ts
├── frontend/           # React + Vite (components, tests)
│   └── src/
│       ├── components/
│       ├── types/
│       ├── *.tsx
└── README.md
```

---

## ⚡ Quick Start
1. **Clone Repo**  
   ```bash
   git clone https://github.com/AhmedAbdLMoaty/humble-superhero-api.git
   ```
2. **Install Backend**  
   ```bash
   cd backend
   npm install
   npm run start
   ```
3. **Install Frontend**  
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
4. **Open**: [http://localhost:5173](http://localhost:5173) (frontend) and [http://localhost:3000](http://localhost:3000) (backend).

---

## ✅ Testing
- **Backend**  
  ```bash
  cd backend
  npm run test
  ```
- **Frontend**  
  ```bash
  cd frontend
  npm run test
  ```

(Uses [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).)

---

## 🤝 Collaboration & Team Spirit
- **Code Reviews**: Open to constructive feedback; highlight any improvement points.
- **Pair Programming**: Share knowledge in real-time and tackle tricky parts together.
- **Documentation**: Keep READMEs and inline comments helpful for quick onboarding.
- **Continuous Learning**: Experiment with features (like Docker, real DB) as time allows.

---

## ⏱ If I Had More Time
- **Persistent Storage** (MongoDB/Postgres).
- **Advanced Auth** (JWT or OAuth).
- **CI/CD** pipeline (GitHub Actions, Docker).
- **Polished UI** with more animations or a UI library (e.g., Material-UI).

---

## 📜 License
**MIT** – Feel free to fork, modify, and have fun.  

**Stay humble, keep coding, and celebrate everyday heroes!** ✨  
