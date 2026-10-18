<div align="center">

# Quiz Buddy

### Practice programming. Track your progress. Build confidence.

An interactive, browser-based coding quiz app for practising programming concepts with timed quizzes, explanations, and a personal progress dashboard.

[Explore the project](https://github.com/shalini355/Quiz-Buddy)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

## About

Quiz Buddy is a front-end learning project that makes programming practice more engaging. Choose a quiz, answer questions against the timer, review your result, and use the dashboard to revisit your quiz history.

The app is built with HTML, CSS, and JavaScript. It runs in the browser and does not require a backend or a build step.

## Features

- **Customisable quizzes** — choose from the available programming topics and difficulty levels.
- **Timed quiz sessions** — answer questions in a focused, five-minute session.
- **Instant results** — see your score and review answers with explanations where available.
- **Progress dashboard** — revisit quiz activity saved in your browser.
- **Responsive interface** — pages use Bootstrap components and responsive layouts.
- **Additional pages** — includes account, feedback, contact, about, and organiser/admin interfaces.

## Get started

### Requirements

- Git
- Python 3, or the VS Code **Live Server** extension
- A modern web browser

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/shalini355/Quiz-Buddy.git
   cd Quiz-Buddy
   ```

2. Start a local web server from the repository root:

   **Windows**

   ```powershell
   py -m http.server 8000
   ```

   **macOS / Linux**

   ```bash
   python3 -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser. The root page redirects to the app.

Alternatively, open `Quiz buddy frontend/index.html` with VS Code Live Server.

> Use a local web server rather than opening the HTML file directly: the quiz loads its question banks with `fetch()`.

## Project structure

```text
Quiz-Buddy/
├── index.html                  # Redirects to the app
├── README.md
└── Quiz buddy frontend/
    ├── index.html              # App home page
    ├── Quizselection.html      # Quiz setup
    ├── quiz-page.html          # Timed quiz
    ├── Resultpage.html         # Results
    ├── dashboard3.html         # Progress dashboard
    ├── questions.json          # Main question bank
    ├── beginner-questions.json # Beginner question bank
    └── ...                     # Other app pages and scripts
```

## Built with

- **HTML5** for page structure
- **CSS3** for styling and responsive layouts
- **JavaScript (ES6)** for quiz interactions and browser-side state
- **Bootstrap 4** and **Font Awesome 5** for interface components and icons
- **JSON** files for quiz questions

## Data and project scope

Quiz history and related demo data are stored in the browser's `localStorage`. They stay in that browser and are not synced to a server. This repository contains a front-end project; it does not include a production authentication service or backend.

## Contributing

Suggestions and improvements are welcome. Open an issue to discuss a change, or submit a pull request with a clear description of what you changed.

## Author

**Shalini Yadav** · [GitHub](https://github.com/shalini355)
