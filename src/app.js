function clockTimer() {
    const date = new Date();

    let time = [date.getHours(), date.getMinutes(), date.getFullYear()];


    if (time[0] < 10) time[0] = `0${time[0]}`;
    if (time[1] < 10) time[1] = `0${time[1]}`;
    const current_time = [time[0], time[1]].join(':');

    const clock = document.querySelector(".clock");
    const yearInRealLife = document.querySelector(".year");

    clock.innerHTML = current_time;
    yearInRealLife.innerHTML = time[2];

    setTimeout("clockTimer()", 1000);
}

clockTimer();