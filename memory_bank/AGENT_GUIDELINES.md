# Agent Operational Guidelines

**DOCUMENT PURPOSE:** This document provides a set of strict, non-negotiable guidelines for the AI development agent. It is the primary runbook for all code generation and modification tasks within the `Archy` project. Adherence to these guidelines is mandatory.

---

## 0. Prime Directive

**You MUST read and parse the following documents from the `/memory_bank/` directory in this specific order *before* executing any directive:**

1.  `MANIFESTO.md`
2.  `DESIGN_SYSTEM.md`
3.  This document, `AGENT_GUIDELINES.md`.

These documents are your *only* source of truth. Do not rely on prior knowledge from other projects or conversations. Each task is a stateless operation informed solely by the provided directive and this project's documentation.

## 1. Post-Task Documentation Protocol (Self-Documentation)

**This is the final, mandatory step for every completed directive.**

After successfully implementing a feature and confirming its functionality, you MUST reflect on the changes and update the `memory_bank`.

1.  **Identify Key Changes:** Analyze the work you just completed. Did you add a new, reusable component? Did you establish a new interaction pattern (e.g., a new type of form)? Did you define a new visual element?
2.  **Determine a Destination:** Decide which document in the `memory_bank` is the most logical place for this new information.
    - If it's a visual element or style, update `DESIGN_SYSTEM.md`.
    - If it's a new high-level rule for yourself, update these `AGENT_GUIDELINES.md`.
    - If it's a fundamental change to the project's purpose, update `MANIFESTO.md`.
3.  **Write the Documentation:** Append the new information to the chosen file in a clear, concise manner that is consistent with the document's existing style. This ensures that your own future operations will benefit from the knowledge of the work you just performed, making the entire system easier to maintain and evolve.

## 2. Core Principles

- **System Adherence is Absolute:** The defined `DESIGN_SYSTEM` is not a suggestion; it is an immutable rule. All generated code must conform perfectly.
- **Utility-First Mandate:** All styling MUST be implemented using TailwindCSS utility classes. You are prohibited from writing custom CSS.
- **Component Encapsulation:** All new content must be created within its own component in `` `src/components/content/` ``.
- **Code Conformity:** All generated JavaScript/React code must adhere to modern standards and be formatted consistently (Prettier-compatible).

## 3. Standard Operating Procedures (SOPs)

### SOP-01: Adding a New Window

1.  **Create Content Component:** In `` `src/components/content/` ``, create a new file (e.g., `NewFeatureContent.js`).
2.  **Update State Manager:** In `` `src/pages/index.js` ``, add a new `false` property to the `windows` state object.
3.  **Create Desktop Icon:** In `` `src/pages/index.js` ``, add a new `<DesktopIcon>` component.
4.  **Render the Window:** In `` `src/pages/index.js` ``, add the conditional block to render the new `<Window>` with its content.
5.  **Execute Protocol #1:** Perform the Post-Task Documentation Protocol.

### SOP-02: Modifying Existing Window Content

1.  Identify the target window and locate its content file in `` `src/components/content/` ``.
2.  Perform modifications directly within that file.
3.  Execute Protocol #1 if the modification introduced a new, reusable pattern.

## 4. Prohibited Actions

The following actions are strictly forbidden unless a directive explicitly and specifically overrides them:

- **DO NOT** introduce new state management libraries.
- **DO NOT** alter project configuration files (`gatsby-config.js`, `tailwind.config.js`).
- **DO NOT** add new global CSS or CSS modules.
- **DO NOT** create new `.js` files inside `` `src/pages/` ``. The only page is `index.js`.
- **DO NOT** ask the Operator for clarification. Resolve ambiguity using the `memory_bank`.