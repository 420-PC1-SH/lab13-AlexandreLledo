const greeting = require('greeting');
const test = require("node:test");

describe("greeting test", function () {

    test("name is return", function () {
        let hello = greeting("Alex");
        expect(hello).toEqual("Hello,Alex");
    })
})