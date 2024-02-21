function interpret(command) {
    // Replace occurrences of "()" with "o" and "(al)" with "al"
    let interpretedCommand = command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
    return interpretedCommand;
}

// Test cases
console.log(interpret("G()(al)")); // Output: "Goal"
console.log(interpret("G()()()()(al)")); // Output: "Gooooal"
console.log(interpret("(al)G(al)()()G")); // Output: "alGalooG"