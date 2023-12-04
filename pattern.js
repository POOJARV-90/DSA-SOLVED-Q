// Function to draw the pattern using a while loop
function drawPattern() {
    var rows = 5;  // Number of rows in the pattern
    var i = 1;

    while (i <= rows) {
        if (i % 2 !== 0) {
            console.log("**");
            // console.log(i,"hee");
        } else {
            // console.log(i,"hee");
            console.log("*");
        }
        i++;
    }
}

// Call the function to draw the pattern
drawPattern();

