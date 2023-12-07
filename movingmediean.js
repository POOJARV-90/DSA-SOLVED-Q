function MovingMedian(arr) {
    const windowSize = arr[0];
    const numbers = arr.slice(1);
    const result = [];
  
    function calculateMedian(subArray) {
      const sortedArray = subArray.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedArray.length / 2);
  
      if (sortedArray.length % 2 === 0) {
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
      } else {
        return sortedArray[middle];
      }
    }
  
    for (let i = 1; i <= numbers.length; i++) {
      const subArr = numbers.slice(Math.max(0, i - windowSize), i);
      result.push(calculateMedian(subArr));
    }
  
    return result.join(",");
  }
  // Example usage with readline (assuming readline is properly implemented)
  console.log(MovingMedian(readline()));
  
  