// Set your target date here
const targetDate = new Date("2025-12-31T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    let diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("daysLeft").textContent = "0";
        document.getElementById("hoursLeft").textContent = "0";
        document.getElementById("minutesLeft").textContent = "0";
        document.getElementById("secondsLeft").textContent = "0";
        return;
    }

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    const days = Math.floor(diff / msInDay);
    diff -= days * msInDay;

    const hours = Math.floor(diff / msInHour);
    diff -= hours * msInHour;

    const minutes = Math.floor(diff / msInMinute);
    diff -= minutes * msInMinute;

    const seconds = Math.floor(diff / msInSecond);

    document.getElementById("daysLeft").textContent = days;
    document.getElementById("hoursLeft").textContent = hours;
    document.getElementById("minutesLeft").textContent = minutes;
    document.getElementById("secondsLeft").textContent = seconds;
}

// run every 1 second
setInterval(updateTimer, 1000);
updateTimer(); // initial call