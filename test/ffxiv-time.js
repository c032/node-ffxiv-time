const assert = require('assert');

const { getTime } = require('../src/ffxiv-time');

describe('ffxiv-time', () => {
    const tt = {
        1627312769435: '10:06',
    };

    Object.keys(tt)
        .map((key) => ({
            msSinceEpoch: key,
            expectedValue: tt[key],
        }))
        .forEach(({ msSinceEpoch, expectedValue }) => {
            describe(`getTime(${msSinceEpoch})`, () => {
                const printableValue = JSON.stringify(expectedValue);

                it(`returns ${printableValue}`, () => {
                    const actualValue = getTime(msSinceEpoch);

                    assert.strictEqual(actualValue, expectedValue);
                });
            });
        });
});
