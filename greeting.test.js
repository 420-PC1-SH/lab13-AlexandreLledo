const greeting = require('./greeting');

describe("greeting test", function () {

    test("name is return", function () {
        let hello = greeting("Alex");
        expect(hello).toEqual("Hello,Alex");
    })
})