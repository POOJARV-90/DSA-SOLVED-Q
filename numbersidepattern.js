function printPattern(rows) {
    for (let i = rows; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern  += j;

        }
        console.log(pattern);
    }
}

printPattern(4);

function printStarPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

printStarPyramid(10);

