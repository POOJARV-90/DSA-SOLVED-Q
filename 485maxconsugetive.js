// nums[0] = 1: Increment currentCount to 1.
// nums[1] = 1: Increment currentCount to 2.
// nums[2] = 0: Reset currentCount to 0.
// nums[3] = 1: Increment currentCount to 1.
// nums[4] = 1: Increment currentCount to 2.
// nums[5] = 1: Increment currentCount to 3.
const nums = [1, 1, 0, 1, 1, 1];
function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;      // Maximum consecutive count
  let currentCount = 0;  // Current consecutive count

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    //   console.log(maxCount,"maxCount",currentCount ,"currentCoun")
    } else {
      currentCount = 0;
    //   console.log(currentCount)
    }
  }

  return maxCount;
}

// Example usage:

const result = findMaxConsecutiveOnes(nums);
console.log(result);  // Output: 3
