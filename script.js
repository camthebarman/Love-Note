/* Does Cory Still Love Me? — a very scientific love detector. */

const FIRST_QUESTION = "Does Cory Still Love Me?";

/* The 12 escalating "are you sure" prompts. */
const SURE_PROMPTS = [
  "Are you sure?",
  "Are you super sure?",
  "Are you super duper sure?",
  "Are you super duper mega sure?",
  "Are you super duper mega ultra sure?",
  "Are you super duper mega ultra extra sure?",
  "Are you super duper mega ultra extra pinky-promise sure?",
  "Are you super duper mega ultra extra pinky-promise cross-your-heart sure?",
  "Are you sure sure sure sure sure?",
  "Are you sure to the power of a million sures?",
  "Are you so sure that the sures ran out of room?",
  "Are you the surest human who has ever been sure?"
];

/* 13 answers: one for the first ask, plus one per "are you sure" click. */
const STEPS = [
  { answer: "YES!",                 note: "The machine did not even have to think about it.",        colors: ["#fffb00", "#ff2d95", "#ff8fd4", "#7a5cff"] },
  { answer: "YEP. STILL YES.",      note: "Checked twice. Same result.",                              colors: ["#00ffe1", "#00337a", "#5ee7ff", "#1d4dff"] },
  { answer: "ABSOLUTELY!",          note: "Now with 40% more exclamation.",                           colors: ["#fff200", "#ff5400", "#ffb347", "#ff2d6f"] },
  { answer: "100% CONFIRMED YES",   note: "Independently verified by three separate hearts.",         colors: ["#b6ff00", "#0b6b00", "#9dffb0", "#00b3a4"] },
  { answer: "OH HECK YES",          note: "The readings are going off the charts.",                   colors: ["#ff9df5", "#5d0080", "#ffb3f0", "#8a2be2"] },
  { answer: "YES, YES, A THOUSAND TIMES YES", note: "We are running out of ways to say it.",          colors: ["#ffd6a5", "#c1121f", "#ffb4a2", "#e5383b"] },
  { answer: "AFFIRMATIVE. LOVE DETECTED.", note: "Official readout from the Love Department.",        colors: ["#7dffaf", "#004b23", "#aaffc3", "#2d6a4f"] },
  { answer: "WITHOUT A SINGLE DOUBT", note: "Not one. We looked everywhere.",                         colors: ["#fffb00", "#7209b7", "#c77dff", "#3a0ca3"] },
  { answer: "YESSSSSSSSSS",         note: "The S key got stuck. It is fine. It is accurate.",         colors: ["#ff4d6d", "#2b0a3d", "#ffccd5", "#ff4d6d"] },
  { answer: "SÍ · OUI · JA · HAI · YES", note: "Confirmed in five languages, just to be thorough.",   colors: ["#4cc9f0", "#03045e", "#90e0ef", "#0077b6"] },
  { answer: "YES TO THE MOON AND BACK", note: "Round trip. Twice. With snacks.",                      colors: ["#f8f9fa", "#22223b", "#4a4e69", "#9a8c98"] },
  { answer: "INFINITE, UNSTOPPABLE YES", note: "The scale broke. We are just estimating now.",        colors: ["#ffea00", "#d00000", "#ff9e00", "#d00000"] },
  { answer: "YES. FOREVER. OBVIOUSLY. 💖", note: "You asked 13 times. The answer never once flinched.", colors: ["#ffe600", "#ff006e", "#ff8fd4", "#ff006e"] }
];

const askBtn = document.getElementById("askBtn");
const resetBtn = document.getElementById("resetBtn");
const answerEl = document.getElementById("answer");
const sublineEl = document.getElementById("subline");
const counterEl = document.getElementById("counter");
const heartsEl = document.getElementById("hearts");

const HEART_CHARS = ["💖", "💕", "💗", "❤️", "💘", "💞", "🥰", "✨"];

let step = 0; // how many times the question has been answered

askBtn.addEventListener("click", ask);
resetBtn.addEventListener("click", reset);

function ask() {
  const current = STEPS[step];

  answerEl.textContent = current.answer;
  sublineEl.textContent = current.note;
  paint(current.colors);
  replay(answerEl, "pop");
  replay(askBtn, "wiggle");
  rainHearts(6 + step * 2);

  step += 1;

  if (step < STEPS.length) {
    askBtn.textContent = SURE_PROMPTS[step - 1];
    counterEl.textContent = `Certainty level ${step} of ${STEPS.length}`;
  } else {
    askBtn.hidden = true;
    counterEl.textContent = "Maximum certainty reached. Case closed. 🔒";
    resetBtn.hidden = false;
    resetBtn.focus();
    rainHearts(40);
  }
}

function reset() {
  step = 0;
  answerEl.textContent = "";
  sublineEl.textContent = "";
  counterEl.textContent = "";
  askBtn.textContent = FIRST_QUESTION;
  askBtn.hidden = false;
  resetBtn.hidden = true;
  paint(["#fffb00", "#ff2d95", "#ff8fd4", "#7a5cff"]);
  askBtn.focus();
}

function paint([answerColor, answerShadow, bgA, bgB]) {
  const root = document.documentElement.style;
  root.setProperty("--answer", answerColor);
  root.setProperty("--answer-shadow", answerShadow);
  root.setProperty("--bg-a", bgA);
  root.setProperty("--bg-b", bgB);
}

/* Restart a CSS animation class even if it is already applied. */
function replay(el, className) {
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
}

function rainHearts(count) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${18 + Math.random() * 34}px`;
    heart.style.setProperty("--spin", `${Math.random() * 720 - 360}deg`);

    const duration = 2.5 + Math.random() * 2.5;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${Math.random() * 0.6}s`;

    heartsEl.appendChild(heart);
    setTimeout(() => heart.remove(), (duration + 1) * 1000);
  }
}
