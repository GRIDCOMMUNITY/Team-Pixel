# Kanban Board

> A drag-and-drop task board with live stats.

Hack Day Haldia x GRID community - 6-hour build challenge

**Repo:** `team-pixel` | **Stack:** HTML + vanilla JavaScript | **Difficulty:** Medium-Hard | **Time:** 6 hours

## Brief
Teams live in boards. Build a Kanban app that feels smooth and shows how work is flowing.

## Core tasks (must-do)
- [ ] Multiple boards; add, rename and reorder columns
- [ ] Cards with title, description, label and due date; add / edit / delete
- [ ] Drag and drop between and within columns
- [ ] Everything persists in localStorage
- [ ] Search and filter by text, label or due date
- [ ] Stats panel with a chart: cards per column, overdue, completed per day
- [ ] Responsive layout and keyboard-accessible controls

## Bonus tasks (only after the core works)
- [ ] WIP limits with warnings
- [ ] Undo / redo
- [ ] Import / export a board as JSON
- [ ] Checklists inside cards

## What is already here
- `index.html` - base page
- `script.js` - state, `save()` / `load()` (localStorage), `render()` and TODO function stubs
- `package.json` - `npm start` serves this folder

## Run locally
```bash
npm start   # or simply open index.html in your browser
```

## Deploy
Any static host works (for example GitHub Pages, Netlify or Vercel). There is no build step.

## Suggested pacing
- Hour 1: read this README, agree on a plan and split the work
- Hours 2-4: build the core tasks
- Hour 5: integrate, polish, then bonus tasks if time allows
- Hour 6: deploy, open the Pull Request, submit on the MLH platform (OrganizerHQ)

## Submission checklist
- [ ] All core tasks work end to end
- [ ] Project is deployed and the live link opens
- [ ] Pull Request created on the Voyage GitHub repository assigned to your team
- [ ] Project submitted on the MLH platform (OrganizerHQ) - instructions are shared at the start of the event

## Rules
- Build new features on top of this starter project and integrate them.
- Teams of 3-4; every member must be present.
- AI tools and open-source / open-weight models are fully allowed.
