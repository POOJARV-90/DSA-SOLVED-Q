// 217  Contains Duplicate
// let nums = [1,3, 2, 3,2 ]; //[1,1,2,3]


// function containsDuplicate(nums) {

//     // nums.sort((a, b) => a - b);
//     for (let i = 0; i <= nums.length - 1; i++) {

//         if (nums[i] === nums[i + 1]) {
//             return true;
//         }
//     }
//     return false;

// }


// let hasDuplicates = containsDuplicate(nums);
// console.log(hasDuplicates); 



let nums = [1, 2, 3, 1];
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}


let hasDuplicates = containsDuplicate(nums);
console.log(hasDuplicates); 


