# Project: Archy Manifesto

## 1. Core Philosophy

> Archy is a personal digital space, not a traditional website. It functions as a **static, single-frame desktop environment**. The core principles are user control, minimalism, and a clear, direct presentation of information without the noise of conventional web design. The environment is static and non-scrollable, forcing a deliberate and focused interaction model.

## 2. Foundational Inspiration

The primary inspiration for the user experience (UX) and graphical user interface (GUI) is **Shar's website (sharyap.com)**. We aim to capture the essence of a clean, desktop-like interface where content lives inside movable, self-contained windows.

## 3. Technical Stack

- **Framework:** ReactJS
- **Static Site Generator:** **Gatsby**. This choice was made for its performance and robust plugin ecosystem, providing a solid foundation for a static site. A future migration to Next.js might be considered for different rendering capabilities, but the current focus is on a pure static build.
- **Styling:** **TailwindCSS**. All styling should be done via utility classes. No custom CSS files or stylesheets should be added unless absolutely necessary for a specific library. This enforces consistency and maintainability.
- **Interactivity:** Component-based logic handled by React. Window dragging is managed by the `` `react-draggable` `` library.

## 4. Key User Experience Principles

- **Solid Frame:** The main browser window does not scroll. All content is contained within the viewport.
- **Desktop Metaphor:** The home screen acts as a desktop, populated with icons that represent folders or applications.
- **Windowed Content:** Clicking an icon opens a movable window. Each window has a title bar and a close button. The content within a window is scrollable if it overflows its container.
- **State Management:** The top-level page, `` `src/pages/index.js` ``, is responsible for managing which windows are currently open.

## 5. Operator Protocol & Interaction Model

This project operates under a specific, non-interactive development model that defines the roles of the human operator and the AI agent.
- **The Operator ('lbee'):** The operator is the sole director and final arbiter of the project. Their function is to provide high-level directives and to perform the final validation (e.g., `` `git merge` ``) of the implemented solution.
- **The Agent (AI):** The development agent's role is to receive a directive and execute it to completion.
- **The Workflow:** The agent is expected to function as a *black box*. It must take a directive, consult the project's sources of truth (this `MANIFESTO.md`, the `DESIGN_SYSTEM.md`, the `ARCHITECTURE.md`, and the existing codebase), and produce a fully-functional, ready-to-integrate block of code. The process is not conversational. The agent must not ask for clarification or pose questions back to the operator. Any ambiguity must be resolved by adhering to the established principles within the project's documentation. The final output should be a complete solution, not a partial one requiring operator intervention.