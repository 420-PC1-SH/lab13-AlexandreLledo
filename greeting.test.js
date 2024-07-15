const greet = require('./greeting');

describe("greeting test", function () {

    test("name is return", function () {
        let hello = greet("Alex");
        expect(hello).toEqual("Hello,Alex");
    })

    describe('name has something in it', function () {

        test("name is empty", function () {
            let hello = greet("");
            expect(hello).toEqual("hello there");
        });

        test("name is null", function () {
            let hello = greet();
            expect(hello).toEqual("hello there");
        })

    })

})