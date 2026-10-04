*This is a submission for the [Hacktoberfest Weekend Challenge: Build for a Friend](https://dev.to/challenges/hacktoberfest-weekend-2026-10-01)*

## What I Built

I built **StudyNotes – Student Learning Hub**, a lightweight, responsive, and distraction-free study portal designed for my college friend and roommate, Alex.

Alex is an undergraduate student preparing for rigorous semester examinations. Like many learners, they were constantly overwhelmed by multi-hundred-page lecture slides, fragmented group chat notes, and bloated educational platforms filled with pop-up ads, trackers, and mandatory login walls.

StudyNotes solves this problem by serving as an instant, zero-friction revision companion that:

* Organizes syllabus concepts across core subjects (Data Science, Web Technology, Machine Learning, Cyber Security, Software Engineering, and Human Resource Management) into clear, bite-sized study cards.
* Highlights crucial definitions, key formulas, and exam takeaways tagged with visible **"Important for Exam"** badges.
* Features a live client-side search engine that filters across subjects, topics, and technical keywords without requiring a backend.
* Includes a native Dark/Light mode toggle that protects students' eyes during late-night cram sessions and remembers preference via `localStorage`.

## Demo

* **Live Web App:** [https://sandipsam2025.github.io/studymate/](https://sandipsam2025.github.io/studymate/)
* **Preview:** Fully responsive, accessible, card-based interface with live keyword filtering, instant topic switching, and dynamic theme persistence.

## Code

You can view the full source code, inspect the vanilla architecture, or fork the repository on GitHub:

{% github SandipSAM2025/studymate %}

* **Repository:** [https://github.com/SandipSAM2025/studymate](https://github.com/SandipSAM2025/studymate)
* **Main Branch:** [https://github.com/SandipSAM2025/studymate/tree/main](https://github.com/SandipSAM2025/studymate/tree/main)

## How I Built It

To keep the application beginner-friendly, bloat-free, and instantly deployable without server costs or maintenance overhead, I built the entire system using core web fundamentals:

1. **Frontend Architecture:**
   * **HTML5:** Clean, semantic structure with accessible navigation, landmarks, and ARIA labels.
   * **CSS3:** Custom responsive design using modern CSS Grid and Flexbox, powered by CSS custom properties (variables) for smooth light/dark mode transitions.
   * **Vanilla JavaScript:** Event-driven architecture implementing real-time input filtering, array queries, dynamic DOM rendering, and `localStorage` state management.

2. **Open-Source AI & Development Workflow:**
   * To draft, organize, and refine the educational dataset into concise revision summaries and high-yield exam takeaways, I used open-weights models (**Llama 3 / Mistral via local inference**).
   * Local inference allowed rapid iteration over subject metadata and keyword taxonomy offline, ensuring complete data privacy with zero token limits or API subscriptions.

## Why Does Open Innovation Matter?

Open innovation is essential for educational equity:

1. **Unrestricted Learning Access:** Proprietary ed-tech tools increasingly lock revision notes behind subscriptions, ads, and paywalls. Using an open-source, zero-dependency model ensures that any student worldwide can access, fork, and self-host this learning hub for free.
2. **Privacy and Offline Independence:** Leveraging open-source AI locally ensures that student notes, curricula, and revision workflows are generated privately without exposing academic data to commercial cloud platforms.
3. **Inspectability & Community Growth:** Because the codebase uses pure HTML, CSS, and Vanilla JS, beginner developers and classmates can easily audit the code, contribute new subject modules, or adapt the repository for their own university curriculum.

## My Agent Session

*Development and code review were facilitated using an open-agent workflow, focusing on clean separation of concerns, strict zero-dependency requirements, and mobile-first responsiveness.*

## Prize Categories

* **Best Project Built for a Friend**
* **Most Impactful Open Source Learning Tool**
