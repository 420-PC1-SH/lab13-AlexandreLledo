const greet = require('./greeting');

describe("greeting test", function () {

    test("name is return", function () {
        let hello = greet("Alex");
        expect(hello).toEqual("Hello,Alex");
    })

    test("name is empty", function () {
        let hello = greet("");
        expect(hello).toEqual("hello there");
    })
})