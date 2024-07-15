const greet = require('./greeting');

describe("greeting test", function () {

    test("name is return", function () {
        let hello = greet("Alex");
        expect(hello).toEqual("Hello,Alex");
    })

    describe('name has something in it', function () {

        test("name is empty", function () {
            let hello = greet("");
            expect(hello).toEqual("Hello there");
        });

        test("name is null", function () {
            let name = null;
            let hello = greet(name);
            expect(hello).toEqual("Hello there");
        });

        test("name is undefined", function () {
            let name;
            let hello = greet(name);
            expect(hello).toEqual("Hello there");
        })

    });

    test('name all in upperCase', function () {
        let name = "ALEX";
        let hello = greet(name);
        expect(hello).toEqual("HELLO ALEX");
    })

})