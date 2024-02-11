"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = exports.Time = exports.FACTOR = void 0;
exports.FACTOR = 144 / 7;
class Time {
    t;
    hours;
    minutes;
    constructor(d) {
        const ms = d.getTime();
        this.t = new Date(ms * exports.FACTOR);
        this.hours = this.t.getHours();
        this.minutes = this.t.getMinutes();
    }
    toString() {
        return `${format(this.hours)}:${format(this.minutes)}`;
    }
}
exports.Time = Time;
function format(timePart) {
    return `0${timePart}`.substr(-2);
}
function getTime(jsTime = Date.now()) {
    if (jsTime instanceof Date) {
        return new Time(jsTime);
    }
    if (Number.isInteger(jsTime)) {
        const d = new Date(jsTime);
        return new Time(d);
    }
    throw new Error(`Can't create time from value: ${jsTime}`);
}
exports.getTime = getTime;
