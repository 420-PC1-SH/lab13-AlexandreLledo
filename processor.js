function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];

    if (rawData[0] !== "<" && rawData[rawData.length - 1] !== ">") {
        throw new Error('Data is invalid ; should contain "<" and ">"');
    }
    if (rawData[0] !== "<") {
        throw new Error('Data is invalid ; should contain "<"');
    }
    if (rawData[rawData.length - 1] !== ">") {
        throw new Error('Data is invalid ; should contain ">"');
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;