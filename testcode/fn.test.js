const fn = require("./fn");

test("fn add test", () => {
  expect(fn.add(1, 3)).toBe(4);
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Jamong", 23)).toEqual({
    name: "Jamong",
    age: 23
  });
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
