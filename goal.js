//changed the function definition
function interpret(command) {
    let interpretedCommand = '';
    let i = 0;
    while (i < command.length) {
        if (command[i] === 'G') {
            interpretedCommand += 'G';
            i++;
        } else if (command[i] === '(' && command[i + 1] === ')') {
            interpretedCommand += 'o';
            i += 2;
        } else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
            interpretedCommand += 'al';
            i += 4;
        }
    }
    return interpretedCommand;
}


// Test cases
console.log(interpret("G()(al)")); // Output: "Goal"
console.log(interpret("G()()()()(al)")); // Output: "Gooooal"
console.log(interpret("(al)G(al)()()G")); // Output: "alGalooG"
