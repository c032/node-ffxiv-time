export declare const FACTOR: number;
export declare class Time {
    private readonly t;
    readonly hours: number;
    readonly minutes: number;
    constructor(d: Date);
    toString(): string;
}
export declare function getTime(jsTime?: number | Date): Time;
