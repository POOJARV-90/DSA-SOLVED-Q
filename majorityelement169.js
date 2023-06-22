
//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.


 nums =[2,2,1,3,1,2,2,5,5,5,5]; 




// var majorityElement = function(nums) {
//   let majority = nums[0];
//   let votes = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (votes === 0) {
//       votes++;
//       majority = nums[i];
//     } else if (majority === nums[i]) {
//       votes++;
//     } else {
//       votes--;
//     }
//   }

//   return majority;
// };


// console.log(majorityElement(nums)); 

// ---------------------------------------------------------------


var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};


console.log(majorityElement(nums));  


