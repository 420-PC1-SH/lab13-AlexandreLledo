function greet(name) {
    if (name == "") {
        return "hello there";
    }


    return "Hello," + name;
}

module.exports = greet;