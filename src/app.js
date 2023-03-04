class Watch {
    constructor() {
        this.clock = document.querySelector(".clock");
        this.yearInRealLife = document.querySelector(".year");
        setInterval(this.clockTimer, 1000);
    }


    clockTimer = () => {
        const date = new Date();
        let time = [date.getHours(), date.getMinutes(), date.getFullYear()];

        if (time[0] < 10) time[0] = `0${time[0]}`;
        if (time[1] < 10) time[1] = `0${time[1]}`;
        const current_time = [time[0], time[1]].join(':');

        this.clock.innerHTML = current_time;
        this.yearInRealLife.innerHTML = time[2];
    }
}

const watch = new Watch();