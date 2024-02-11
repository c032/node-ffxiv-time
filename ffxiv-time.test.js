"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const ffxiv_time_1 = require("./ffxiv-time");
function assertString(v) {
    if (typeof v !== "string") {
        throw new Error(`not a string: ${v}`);
    }
    return v;
}
(0, node_test_1.describe)("ffxiv-time", () => {
    const tt = {
        1627312769435: "10:06",
    };
    Object.keys(tt)
        .map((key) => ({
        input: parseInt(key, 10),
        expectedValue: assertString(tt[key]),
    }))
        .forEach(({ input, expectedValue }) => {
        const msSinceEpoch = input;
        (0, node_test_1.describe)(`getTime(${msSinceEpoch}).toString()`, () => {
            const printableValue = JSON.stringify(expectedValue);
            (0, node_test_1.it)(`returns ${printableValue}`, () => {
                const actualValue = (0, ffxiv_time_1.getTime)(msSinceEpoch).toString();
                node_assert_1.strict.equal(actualValue, expectedValue);
            });
        });
    });
});
