function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love typescript"; }
    console.log("I am making a ".concat(size, " T-shirt with the message \"").concat(message, "\"."));
}
make_shirt();
