const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const apologyImg = document.getElementById("apology-img");

// Event listener untuk tombol "Iya"
yesBtn.addEventListener("click", () => {
  apologyImg.style.display = "block";
});

// Event listener untuk tombol "Gaa"
noBtn.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
