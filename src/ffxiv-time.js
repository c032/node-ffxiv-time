const FACTOR = 144 / 7;

function format(timePart) {
    return `0${timePart}`.substr(-2);
}

function getTime(msSinceEpoch = Date.now()) {
    let ms = msSinceEpoch;
    if (ms instanceof Date) {
        ms = ms.getTime();
    }

    const t = new Date(ms * FACTOR);

    const hours = t.getHours();
    const minutes = t.getMinutes();

    const time = `${format(hours)}:${format(minutes)}`;
    Object.setPrototypeOf(time, {
        hours,
        minutes,
    });

    return time;
}

module.exports = {
    FACTOR,
    getTime,
};
