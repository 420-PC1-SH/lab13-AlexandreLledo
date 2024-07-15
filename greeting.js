function greet(name) {
    let isArray = false;
    if (name == "") {
        return "Hello there";
    }
    if (name == undefined) {
        return "Hello there";
    }
    if (name == null) {
        return "Hello there";
    }
    if (typeof name === 'string' && name === name.toUpperCase()) {
        return "HELLO " + name;
    }
    if (Array.isArray(name)) {
        return "Hello, " + name[0] + " and " + name[1];
    }


    return "Hello," + name;
}

module.exports = greet;