// Given two integer arrays nums1 and nums2, return an array of their 
// intersection. Each element in the result must be unique and you may 
// return the result in any order.
// Output: [2]

// nums1 = [1,2,2,1] 
// nums2 = [2,2]

nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
var intersection = function (nums1, nums2) {
    let empty = [];
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
           empty.push(nums1[i]);
        //    console.log(empty)
        }
      }
    }
    return [...new Set(empty)];
    // return empty;
  };

  let result = intersection(nums1, nums2);
  console.log(result);