const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const copy = utils.trimProperties(input);
    expect(copy).toEqual(expected);
    expect(copy).not.toBe(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    expect(utils.trimPropertiesMutation(input)).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "foo", bar: "bar", baz: "baz" };
    expect(utils.trimPropertiesMutation(input)).toEqual(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const integers = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const judgment = utils.findLargestInteger(integers);
    expect(judgment).toEqual(3);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh counter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const result = counter.countDown();
    expect(result).toEqual(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
    expect(counter.countDown()).toEqual(1);
    expect(counter.countDown()).toEqual(0);
    expect(counter.countDown()).toEqual(0);
    expect(counter.countDown()).toEqual(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    // console.log(seasons);
    expect(seasons.next()).toEqual("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual("summer");
    expect(seasons.next()).toEqual("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual("summer");
    expect(seasons.next()).toEqual("fall");
    expect(seasons.next()).toEqual("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual("summer");
    expect(seasons.next()).toEqual("fall");
    expect(seasons.next()).toEqual("winter");
    expect(seasons.next()).toEqual("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual("summer");
    expect(seasons.next()).toEqual("fall");
    expect(seasons.next()).toEqual("winter");
    expect(seasons.next()).toEqual("spring");
    expect(seasons.next()).toEqual("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    function repeat(number) {
      for (var i = 0; i < number; i++) {
        var result = seasons.next();
      }
      return result;
    }
    const result = repeat(40);
    expect(result).toEqual("spring");
    expect(repeat(40)).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    const result = focus.drive(100);
    expect(result).toEqual(100);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(100);
    expect(focus.tank).not.toEqual(20);
  });
  test("[17] refueling allows to keep driving", () => {
    expect(focus.drive(600)).toEqual(600);
    expect(focus.drive(1)).toEqual(600);
    expect(focus.refuel(99)).toEqual(600);
    expect(focus.refuel(10)).toEqual(10);
    expect(focus.drive(10)).toEqual(610);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    expect(focus.tank).toEqual(20);
    focus.refuel(100);
    expect(focus.tank).toEqual(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toEqual(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const result = await utils.isEvenNumberAsync(3);
    expect(result).toEqual(false);
    expect(result).not.toEqual(true);
  });
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    expect(await utils.isEvenNumberAsync("foo")).toContain(
      "number must be a number"
    );
  });
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    expect(await utils.isEvenNumberAsync(NaN)).toContain(
      "number must be a number"
    );
  });
});
