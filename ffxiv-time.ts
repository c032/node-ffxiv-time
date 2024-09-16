export const FACTOR = 144 / 7;

export class Time {
	private readonly t: Date;

	public readonly hours: number;
	public readonly minutes: number;

	constructor(d: Date) {
		const ms = d.getTime();

		this.t = new Date(ms * FACTOR);

		this.hours = this.t.getHours();
		this.minutes = this.t.getMinutes();
	}

	public toString(): string {
		return `${format(this.hours)}:${format(this.minutes)}`;
	}
}

function format(timePart: number): string {
	return `0${timePart}`.substr(-2);
}

export function getTime(jsTime: number | Date = Date.now()): Time {
	if (jsTime instanceof Date) {
		return new Time(jsTime);
	}

	if (Number.isInteger(jsTime)) {
		const d = new Date(jsTime);

		return new Time(d);
	}

	throw new Error(`Can't create time from value: ${jsTime}`);
}
