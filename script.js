const weddingDate = new Date("2027-12-10T15:00:00+08:00");

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function formatValue(value, size = 2) {
  return String(value).padStart(size, "0");
}

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    elements.days.textContent = "000";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elements.days.textContent = formatValue(days, 3);
  elements.hours.textContent = formatValue(hours);
  elements.minutes.textContent = formatValue(minutes);
  elements.seconds.textContent = formatValue(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
