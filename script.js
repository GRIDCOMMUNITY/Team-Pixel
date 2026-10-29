// Kanban Board - Hack Day Haldia x GRID community starter. Build the core tasks from README.md.
const KEY = "hackday-haldia-team-pixel";
const $ = (sel) => document.querySelector(sel);

// App state - reshape it to fit your project.
let state = { items: [] };

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage blocked */ }
}

function load() {
  try { state = JSON.parse(localStorage.getItem(KEY)) || state; } catch (e) { /* ignore */ }
}

function render() {
  // TODO: draw your UI into #app
}

// ---- TODO(core): fill these in -------------------------------------------
// TODO(core): create / edit a card
function addCard() {
}

// TODO(core): move a card to another column or position
function moveCard() {
}

// TODO(core): remove a card
function deleteCard() {
}

// TODO(core): search + label + due-date filters
function applyFilters() {
}

// TODO(core): draw columns and cards
function renderBoard() {
}

// TODO(core): draw the stats chart
function renderStats() {
}


document.addEventListener("DOMContentLoaded", () => {
  load();
  $("#status").textContent = "script.js loaded.";
  render();
});
