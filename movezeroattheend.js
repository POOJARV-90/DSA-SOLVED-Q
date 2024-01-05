function moveZeroesToEnd(arr) {
    // Initialize a variable to keep track of the position to insert non-zero elements
    let nonZeroIndex = 0;
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is non-zero, move it to the front
      if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
    }
  
    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
  // Example usage
  let arr = [14, 0, 76, 0, 45, 0, 9, 4, 0, 5];
  let result = moveZeroesToEnd(arr);
  
  console.log(`Original Array: ${arr.join(', ')}`);
  console.log(`Array with Zeroes at the End: ${result.join(', ')}`);
  