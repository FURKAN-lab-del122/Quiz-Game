# KidzQuiz - Interactive Mini Quiz Game

An engaging, lightweight, and responsive web-based quiz application specially designed for children. Built using vanilla client-side web technologies, it features colorful feedback, dynamic state management, and an automated countdown timer.

---

## Key Features

* **Child-Friendly Questionnaire:** Contains 10 interactive, fun questions tailored for kids (covering animals, nature, and colors) with instant dynamic feedback.
* **10-Second Smart Timer:** Each question features an automated 10-second countdown mechanism. If the time runs out, the options are locked dynamically, a "Süre doldu!" (Time's up!) message is triggered, and it triggers an automatic skip to the next step.
* **Instant Visual Grading:** Implements high-priority CSS classes (`.correct` and `.wrong`) to instantly color-code the buttons in green or red upon user selection, ensuring intuitive UI feedback.
* **Score Retention:** Saves the player's final performance score in the browser's `localStorage` (`lastScore`), establishing a lightweight foundation for tracking personal high scores.

---

## Technology Stack

* **Structure (HTML5):** Clean container architecture tracking the question layout, dynamic message bars, and timer blocks.
* **Styling (CSS3):** A two-column Grid layout for choice buttons (`grid-template-columns: 1fr 1fr`), custom responsive layouts (`height: 100vh`), and smooth color transitions (`transition: background-color 0.5s`).
* **Interactivity (Vanilla JavaScript):** State management tracking dynamic arrays, DOM manipulation, asynchronous timer intervals (`setInterval`), and Local Storage setters.

---

## Project Structure

```text
├── assets/                     # Media directory housing visual resources
│   └── cartoon-characters.webp # Optimized theme background asset
├── index.html                  # Core application structural file
├── style.css                   # Layout mechanics, alignment definitions, and states
└── script.js                   # Logic engine executing array handling and timers
