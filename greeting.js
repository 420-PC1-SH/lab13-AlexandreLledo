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

    let nameUpperCase = name.toUpperCase();
    if (name === nameUpperCase) {
        return "HELLO " + name;
    }


    return "Hello," + name;
}

module.exports = greet;