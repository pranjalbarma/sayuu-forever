// Personalize the messages and photo captions in index.html.
// This file controls the envelope, floating hearts, and proposal button.

const openLetter = document.getElementById("openLetter");
const openText = document.getElementById("openText");
const intro = document.getElementById("intro");
const story = document.getElementById("story");
const particles = document.getElementById("particles");

function openStory() {
  openLetter.classList.add("open");
  openText.textContent = "Your letter is opening…";
  window.setTimeout(() => {
    intro.classList.add("hidden");
    story.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 750);
}

openLetter.addEventListener("click", openStory);
openText.addEventListener("click", openStory);

// Create a few floating heart and sparkle characters.
const symbols = ["♡", "✦", "♥", "·"];

for (let i = 0; i < 28; i++) {
  const particle = document.createElement("span");
  particle.className = "particle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${9 + Math.random() * 13}s`;
  particle.style.animationDelay = `${Math.random() * 12}s`;
  particle.style.fontSize = `${10 + Math.random() * 16}px`;
  particles.appendChild(particle);
}

// A playful final response when she taps YES.
const yesButton = document.getElementById("yesButton");
const answer = document.getElementById("answer");

yesButton.addEventListener("click", () => {
  answer.classList.remove("hidden");
  yesButton.textContent = "YOU JUST MADE MY DAY ♡";
  launchConfettiHearts();
});

function launchConfettiHearts() {
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.className = "particle";
    heart.textContent = "♥";
    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.bottom = "10%";
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    particles.appendChild(heart);
    window.setTimeout(() => heart.remove(), 6500);
  }
}

document.getElementById("replayButton").addEventListener("click", () => {
  story.classList.add("hidden");
  intro.classList.remove("hidden");
  openLetter.classList.remove("open");
  openText.textContent = "Open my letter ↗";
  window.scrollTo({ top: 0, behavior: "smooth" });
});
