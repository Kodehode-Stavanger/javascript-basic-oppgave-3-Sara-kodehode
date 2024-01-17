const {
	cities,
	people,
	diceRoller,
	wordCleaner,
	helloChecker,
	doubleSwap,
	averageAge,
	combinedAge
  } = require("../javascript.js");

  describe("Task 1: People Array Loop tests", () => {
	it("Otto should be untouched", () => {
		const otto = people.find((p) => p.name === "Otto");
		expect(otto.city).toBeUndefined();
		expect(otto.title).toBeUndefined();
		expect(otto.age).toEqual(36);
		expect(otto.hobbies).toEqual(["movies", "cinema", "music"]);
	});

	it("All people except Otto have a city and title", () => {
		for (const person of people) {
			if (person.name !== "Otto") {
				expect(cities.includes(person.city)).toBe(true);
				expect(["Mr.", "Ms."].includes(person.title)).toBe(true);
				expect(person.hobbies[0]).toEqual("coding");
			}
		}
	});

	it("All people except Otto are older by 2 years", () => {
		for (const person of people) {
			if (person.name !== "Otto") {
				expect(person.age).toBeGreaterThanOrEqual(20);
			}
		}
	});
	it("Task 1: EXTRA CREDIT (not mandatory)", () => {
		expect(combinedAge).toBe(184);
		expect([26, 23]).toContain(Math.floor(averageAge));
	});
});

describe("Task 2: diceRoller tests", () => {
	test("diceRoller tests", () => {
		expect(diceRoller(5, 6).length).toBe(5);
		expect(diceRoller(9, 6).length).toBe(9);
		const d6 = [...Array(7).keys()].slice(1);
		expect(diceRoller(50, 6).every((e) => d6.includes(e))).toBe(true);
	});
	test("EXTRA CREDIT diceRoller tests", () => {
		expect(diceRoller(5, 3).length).toBe(5);
		expect(diceRoller(20, 20).length).toBe(20);
		const bigRange = [...Array(1001).keys()].slice(1);
		const bigRoll = diceRoller(1000, 1000);
		expect(bigRoll.every((e) => bigRange.includes(e))).toBe(true);
		expect(bigRoll.some((e) => e > 6)).toBe(true);
	});
});

describe("Task 3: wordCleaner", () => {
	test("wordCleaner tests", () => {
		const example = [
			" thIS",
			"teXt  ",
			" nEeds ",
			"to",
			"BE",
			"cleANED   ",
			" Up"
		];
		expect(wordCleaner(example)).toBe("this text needs to be cleaned up");
	});
});

describe("Task 4: helloChecker", () => {
	// unit testing activates once the function returns anything with any of these params
	const doesHelloCheckerReturn =
		helloChecker("") ||
		helloChecker("It's always polite to say hello") ||
		helloChecker("Ciao signore!") ||
		helloChecker("Powiedz mi czesc") ||
		helloChecker("Sag HALLO zur mir") ||
		helloChecker("Salut mon ami");
	if (doesHelloCheckerReturn || doesHelloCheckerReturn === "") {
		test("detects hello in English", () => {
			expect(helloChecker("It's always polite to say hello")).toBe(
				"HELLO detected in english."
			);
		});

		test("detects hello in Italian", () => {
			expect(helloChecker("Ciao signore!")).toBe("HELLO detected in italian.");
		});

		test("detects hello in Spanish", () => {
			expect(helloChecker("Puedes decir hola")).toBe(
				"HELLO detected in spanish."
			);
		});

		test("detects hello in Polish", () => {
			expect(helloChecker("Powiedz mi czesc")).toBe(
				"HELLO detected in polish."
			);
		});

		test("detects hello in German", () => {
			expect(helloChecker("Sag HALLO zur mir")).toBe(
				"HELLO detected in german."
			);
		});

		test("detects hello in French", () => {
			expect(helloChecker("Salut mon ami")).toBe("HELLO detected in french.");
		});

		test('returns "no HELLO detected." when no match is found', () => {
			expect(helloChecker("")).toBe("No HELLO detected.");
		});
	}
});

describe("Task 5: doubleSwap", () => {
	if (doubleSwap("", "", "") !== undefined) {
		test("should swap i and s in 'this is a string'", () => {
			const result = doubleSwap("this is a string", "i", "s");
			expect(result).toBe("thsi si a itrsng");
		});

		test("should swap # and a in 'm#ybe #nother #ppro#ch is necess#ry'", () => {
			const result = doubleSwap(
				"m#ybe #nother #ppro#ch is necess#ry",
				"#",
				"a"
			);
			expect(result).toBe("maybe another approach is necessary");
		});

		test("should swap o and t in 'what is the point of this?'", () => {
			const result = doubleSwap("what is the point of this?", "o", "t");
			expect(result).toBe("whao is ohe ptino tf ohis?");
		});

		test("should swap g and ! in 'CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!'", () => {
			const result = doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!");
			expect(result).toBe("C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg");
		});

		test("should swap l and e in 'let's do one last test'", () => {
			const result = doubleSwap("let's do one last test", "l", "e");
			expect(result).toBe("elt's do onl east tlst");
		});
	}
});
