function secondHighest(arr) {
  // Convert all input values to numbers
  arr = arr.map(Number);

  // If array has less than 2 elements, return -Infinity
  if (arr.length < 2) return -Infinity;

  // Remove duplicates
  let uniqueArr = [...new Set(arr)];

  // If all elements are the same, return -Infinity
  if (uniqueArr.length < 2) return -Infinity;

  // Sort numbers in descending order
  uniqueArr.sort((a, b) => b - a);

  // Return the second highest number
  return uniqueArr[1];
}

function Main() {
  var n = prompt("Enter the number of elements");
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr[i] = prompt("Enter element " + (i + 1));
  }

  alert(secondHighest(arr));
}

Main();
