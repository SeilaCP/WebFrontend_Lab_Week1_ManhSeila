function challenge2(array) {
  let reverseString = [];

  // Your code
  for (let i = array.length - 1; i > 0; i--) {
    reverseString.push(array[i]);
  }
  return reverseString;
}

array1 = [14, 15, 16, 20];
array2 = [5, 4, 3, 2, 1];
array3 = [];

console.log(challenge2(array1));
console.log(challenge2(array2));
console.log(challenge2(array3));
