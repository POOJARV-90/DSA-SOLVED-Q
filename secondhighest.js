// function SecondHighNumber(arr) {
//     let max =arr[0];
//     let secondMax = null;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             secondMax = max;
//             max = arr[i]
//         }
//         else if (arr[i] < max && (secondMax === null || arr[i] > secondMax)) {
//             secondMax = arr[i]
//         }
//     }
//     return secondMax
// }

function SecondHighNumber(arr){

    let largest = arr[0]
    let Second = arr[0]

    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i]>largest){
            Second = largest
            largest = arr[i]
        }else if(arr[i]>Second) {
            Second=arr[i]

        }
    }
    return Second
}

const number = [4,3,6,2,8,1]
const secHighNum = SecondHighNumber(number)
console.log(secHighNum)