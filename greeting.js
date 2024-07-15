function greet(name) {
    if (name == "") {
        return "hello there";
    }
    if (name == null) {
        return "hello there";
    }

    return "Hello," + name;
}

module.exports = greet;