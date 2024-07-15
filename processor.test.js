const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => {
            processor("9701<489584872710>");
        }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("converts id to a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<487297403495720912>");
        expect(result.rawData).not.toEqual(undefined);
    });

    test("throws error if '<' not found as first characters", function () {
        const expectedError = new Error('Data is invalid ; should contain "<"');
        expect(() => {
            processor("9701::489584872710>");
        }).toThrow(expectedError);
    });

    test("throws error if '>' not found as last characters", function () {
        const expectedError = new Error('Data is invalid ; should contain ">"');
        expect(() => {
            processor("9701::<489584872710");
        }).toThrow(expectedError);
    });

    test("throws error if '<' and '>' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "<" and ">"');
        expect(() => {
            processor("9701::489584872710");
        }).toThrow(expectedError);
    });

    test("throws error if id can't be a number", function () {
        const expectedError = new Error('Data is invalid ; id should be a number');
        expect(() => {
            processor("alo::<489584872710>");
        }).toThrow(expectedError);
    });

    test("throws error if rawData have character", function () {
        const expectedError = new Error('Data is invalid ; rawData should be a number');
        expect(() => {
            processor("9701::<48958d4872710>");
        }).toThrow(expectedError);
    })
});