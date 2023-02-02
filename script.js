function updateTime() {
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");

    const clock = new Date();

    hours.innerHTML = clock.getHours()
    minutes.innerHTML = clock.getMinutes()
    seconds.innerHTML = clock.getSeconds()

}
setInterval(updateTime,1000)