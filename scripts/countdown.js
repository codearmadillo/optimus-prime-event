const clock = document.getElementById("countdown");
const target = new Date("2023-03-27T15:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    let diff = target - now;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    diff -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    clock.querySelector("#countdown-days .value").textContent = days.toString();
    clock.querySelector("#countdown-hours .value").textContent = hours.toString();
    clock.querySelector("#countdown-minutes .value").textContent = minutes.toString();
    clock.querySelector("#countdown-seconds .value").textContent = seconds.toString();
}, 1000);