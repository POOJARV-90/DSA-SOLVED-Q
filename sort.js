let arr = [3, 6, 8, 9, 1];
let temp;
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    } return arr
}

const SortArray = sort(arr);
console.log(SortArray)