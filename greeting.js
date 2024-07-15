function greet(name) {
    if (name == "") {
        return "Hello there";
    }
    if (name == undefined) {
        return "Hello there";
    }
    if (name == null) {
        return "Hello there";
    }

    if (name === name.toUpperCase()) {
        return "HELLO " + name;
    }


    return "Hello," + name;
}

module.exports = greet;