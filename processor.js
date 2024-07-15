function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let id = Number(parts[0]);
    let rawData = parts[1];
    let content = rawData.slice(1, rawData.length - 1);

    if (isNaN(id)) {
        throw new Error('Data is invalid ; id should be a number');
    }

    if (rawData[0] !== "<" && rawData[rawData.length - 1] !== ">") {
        throw new Error('Data is invalid ; should contain "<" and ">"');
    }
    if (rawData[0] !== "<") {
        throw new Error('Data is invalid ; should contain "<"');
    }
    if (rawData[rawData.length - 1] !== ">") {
        throw new Error('Data is invalid ; should contain ">"');
    }
    if (isNaN(content)) {
        throw new Error('Data is invalid ; rawData should be a number');
    }
    return {
        id: id,
        rawData: rawData
    };
}

module.exports = processor;