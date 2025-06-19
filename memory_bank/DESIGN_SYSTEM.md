# Archy Design System

**DOCUMENT PURPOSE:** This document is the single source of truth for the visual identity and user interface components of the `Archy` project. Its purpose is to ensure a consistent, predictable, and visually coherent user experience. All styling must derive from these defined parameters.

---

## 1. Color Palette

Colors are semantic and are referenced by their role. Use the specified TailwindCSS utility class for implementation.

| Role                  | Semantic Name         | Tailwind Utility      | Description                               |
| --------------------- | --------------------- | --------------------- | ----------------------------------------- |
| Primary Background    | `--color-bg-primary`  | `` `bg-gray-800` ``   | The main desktop background.              |
| Window Background     | `--color-bg-window`   | `` `bg-gray-900` ``   | The background of all window content.     |
| Window Bar            | `--color-bg-bar`      | `` `bg-gray-700` ``   | The title bar of a window.                |
| Primary Text          | `--color-text-primary`| `` `text-white` ``    | The default text color.                   |
| Secondary Text        | `--color-text-secondary`| `` `text-gray-300` `` | For less important text or details.       |
| Accent / Link         | `--color-accent-1`    | `` `text-green-400` `` | For interactive elements, links, summaries. |
| Secondary Accent      | `--color-accent-2`    | `` `text-cyan-400` ``  | For secondary highlights (e.g., "btw, I use Arch"). |
| Action (Danger)       | `--color-action-danger` | `` `bg-red-500` ``    | For destructive actions, like the close button. |
| Hover / Interactive   | `--color-bg-hover`    | `` `bg-white/10` ``  | Background for hovered interactive items. |

## 2. Typography

- **Primary Font Family:** Monospace. The entire UI uses a monospace font stack to achieve a consistent, terminal-like aesthetic.
  - **Implementation:** `` `font-mono` ``

- **Typographic Scale:**
  - **Heading 1:** For main window titles. (`--font-size-h1`) -> `` `text-xl font-bold` ``
  - **Heading 2:** For sub-sections within a window. (`--font-size-h2`) -> `` `text-lg font-bold` ``
  - **Body (Default):** For all standard paragraph text. (`--font-size-body`) -> `` `text-base` ``
  - **Small / Meta:** For labels or less important text. (`--font-size-sm`) -> `` `text-sm` ``

## 3. Spacing & Sizing

The layout is governed by a consistent spacing scale based on a `4px` base unit.

- **Desktop Padding:** The main desktop area has a global padding on all sides. (`--space-6`) -> `` `p-8` ``
- **Window Padding:** Content inside windows has consistent internal padding. (`--space-4`) -> `` `p-4` ``
- **Icon Spacing:** Icons on the desktop are spaced vertically. (`--space-4`) -> `` `space-y-4` ``
- **Intra-Window Spacing:** Elements within a window should use margins for separation. (`--space-2`, `--space-4`) -> `` `mb-2` ``, `` `mb-4` ``

## 4. Layout & Elements

- **Borders:** Windows have a subtle border to separate them from the background.
  - **Implementation:** `` `border border-gray-700` ``

- **Rounding:** Consistent corner rounding is applied to elements.
  - **Windows:** `` `rounded-lg` ``
  - **Buttons (e.g., close):** `` `rounded-full` ``

- **Shadows:** Windows cast a shadow to give them depth and lift them off the desktop.
  - **Implementation:** `` `shadow-2xl` ``

## 5. Component States

Interactivity must be communicated through visual feedback.

- **Hover:** All interactive elements (Desktop Icons, links, buttons, dropdown summaries) MUST have a hover state.
  - **Example (Icons):** `` `hover:bg-white/10` ``
  - **Example (Links):** `` `hover:text-green-300` ``
  - **Example (Close Button):** `` `hover:bg-red-700` ``

- **Focus:** While not explicitly designed yet, interactive elements that can be focused via keyboard (e.g., form inputs) MUST have a visible focus ring in the future.