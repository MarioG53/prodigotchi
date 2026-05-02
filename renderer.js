let points = 0;
let time = 0;
let interval = null;

function updateUI() {
  document.getElementById('points').innerText = points;
  document.getElementById('time').innerText = time;

  const pet = document.getElementById('pet');

  if (points > 50) {
    pet.innerText = "😊";
  } else if (points > 20) {
    pet.innerText = "🙂";
  } else {
    pet.innerText = "😐";
  }
}

function startSession() {
  if (interval) return;

  interval = setInterval(() => {
    time++;
    points++;
    updateUI();
  }, 1000);
}

function stopSession() {
  clearInterval(interval);
  interval = null;
}

function feedPet() {
  if (points >= 10) {
    points -= 10;
    document.getElementById('pet').innerText = "😋";
    updateUI();
  }
}