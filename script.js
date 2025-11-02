function secondHighest(arr) {
  // If array has less than 2 elements, return -Infinity
  if (arr.length < 2) return -Infinity;

  // Remove duplicates
  let uniqueArr = [...new Set(arr)];

  // If all elements are same, return -Infinity
  if (uniqueArr.length < 2) return -Infinity;

  // Sort in descending order and return the second element
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}

// Example Test Cases
console.log(secondHighest([5, 1, 2, 3, 4]));  // 4
console.log(secondHighest([-1, -2, -3, -4, -5]));  // -2
console.log(secondHighest([]));  // -Infinity
console.log(secondHighest([1]));  // -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));  // -Infinity
