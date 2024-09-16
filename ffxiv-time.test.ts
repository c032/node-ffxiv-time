import { describe, it } from "node:test";
import { strict as assert } from "node:assert";

import { getTime } from "./ffxiv-time";

interface PlainObject {
	[key: string]: unknown | undefined;
}

interface TestCase<TInput, TExpectedValue> {
	input: TInput;
	expectedValue: TExpectedValue;
}

function assertString(v: unknown): string {
	if (typeof v !== "string") {
		throw new Error(`not a string: ${v}`);
	}

	return v;
}

describe("ffxiv-time", () => {
	const tt: PlainObject = {
		1627312769435: "10:06",
	};

	const testCases = Object.keys(tt).map<TestCase<number, string>>((key) => ({
		input: Number.parseInt(key, 10),
		expectedValue: assertString(tt[key]),
	}));

	for (const { input, expectedValue } of testCases) {
		const msSinceEpoch = input;

		describe(`getTime(${msSinceEpoch}).toString()`, () => {
			const printableValue = JSON.stringify(expectedValue);

			it(`returns ${printableValue}`, () => {
				const actualValue = getTime(msSinceEpoch).toString();

				assert.equal(actualValue, expectedValue);
			});
		});
	}
});
