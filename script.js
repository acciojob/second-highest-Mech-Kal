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
