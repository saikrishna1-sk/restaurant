// Favorite button toggle
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// Loyalty stamps
let filled = 0; // Example starting value
const total = 5;
const stamps = document.querySelectorAll(".stamp");
const stampText = document.querySelector("#loyalty p");

document.querySelector("#loyalty .btn").addEventListener("click", () => {
  const pin = document.querySelector("#loyalty input").value;
  if (pin === "1234") { // simple demo PIN
    if (filled < total) {
      stamps[filled].classList.add("filled");
      filled++;
      stampText.textContent = `You have ${filled}/${total} stamps, ${total-filled} more to go!`;
    } else {
      alert("🎉 Congratulations! You've earned a reward!");
    }
  } else {
    alert("❌ Wrong PIN!");
  }
});
