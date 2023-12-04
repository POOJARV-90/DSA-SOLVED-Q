function calculateStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

const myString = "Hello, World!";
const stringLength = calculateStringLength(myString);

console.log("Length of the string:", stringLength);
