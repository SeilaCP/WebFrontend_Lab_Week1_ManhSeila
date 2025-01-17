function challenge3(array) {
  let average = 0;
  // Your code
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return array.length == 0 ? 0 : average / array.length;
}

array1 = [85, 90, 78, 92];
array2 = [10, 20, 30];
array3 = [];

console.log(challenge3(array1));
console.log(challenge3(array2));
console.log(challenge3(array3));
