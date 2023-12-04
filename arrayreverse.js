let array = [2, 3, 1, 4, 5, 8];

function reversearray(array) {
    let ReverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        ReverseArray.push(array[i])
    }
    return ReverseArray
}

console.log(reversearray(array))


//Secoond Way

function ArrayReverse(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;

        start++;
        end--
    }
    return arr
}

const num=[4,8,7,9,0]
const ArrReverse=ArrayReverse(num)
console.log(ArrReverse)