function mathOperation(opName, a, b, callback) {
    let result = callback(a, b);
    console.log(`${opName} ${result}`);
}

mathOperation('Addition', 10, 20, function (a, b) {
    return a + b;
});

mathOperation('Subtraction', 20, 10, function (a, b) {
    return a - b;
});

mathOperation('Multiplication', 20, 10, function (a, b) {
    return a * b;
});

mathOperation('Division', 20, 10, function (a, b) {
    return a / b;
});