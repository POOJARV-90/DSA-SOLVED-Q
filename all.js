//aadition to the target and find its index value
// function three(one , get){
//     // console.log("three");

//     for (let i = 0; i < one.length; i++) {
//        for (let j = i + 1; j < one.length; j++) {
//        if(one[i]+one[j] == get){
//         return [i , j]
//        }
        
//        }
        
//     }

//   }

//   const one1 = [ 0,1,2,4,5,6]
//   const get1 = 1
//   console.log(three(one1 , get1));
  



//duplicate from array


// Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


// var nums = [1,1,2,3,3]

//   function removeduplictae (nums) {
    
//   for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] == nums[i + 1]) {
//         nums.splice(i + 1, 1 ,"_");
//           i--;
//       }
//   }
// };
//  removeduplictae(nums)
// console.log(nums);


// ------------------------------
    // 27. Remove Element : Given an integer array nums and an integer val, remove all occurrences of val 
    // in nums in-place. The order
    //  of the elements may be changed. Then return the number of elements in nums which are not equal to val.


// function removeElement(nums, val) {
//     let k = 0; // Initialize the count of elements not equal to val.
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) { 
//             // If the current element is not equal to val, copy it to the first available position.
//             nums[k] = nums[i];
//             k++; // Increment the count of elements not equal to val.
//         }
//     }
    
//     // The elements not equal to val are now stored at the beginning of the array.
//     return k; // Return the count of such elements.
// }


// // Example usage:
// const nums = [0,1,2,2,3,4,2,2,3,3,3];
// const val = 2;
// const k = removeElement(nums, val);
// console.log(k); // Output: 2
// console.log(nums); // Output: [2, 2, _, _] (the remaining elements are not important)



// ............add 1 in last digit............................


// function plusOne(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] !== 9) {
//             digits[i]++;
//             return digits;
//         } else {
//             digits[i] = 0;
//         }
//     }
    
//     digits.unshift(1);
    
//     return digits;
// }

// // Test cases
// const example1 = [1, 2, 3];
// const example2 = [4, 3, 2, 1];
// const example3 = [9];

// console.log(plusOne(example1)); // Output: [1, 2, 4]
// console.log(plusOne(example2)); // Output: [4, 3, 2, 2]
// console.log(plusOne(example3)); // Output: [1, 0]


//-------------- Search Insert Position
// --------------------------------------------------------------------


// var searchInsert = function(nums, target) {
//     let count = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] === target){
//       return i
//     }else {
//       if(nums[i] < target){
//          count++;
//       }
//     }
//   }
//   return count
// };

