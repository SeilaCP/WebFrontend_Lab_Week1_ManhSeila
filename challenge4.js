function challenge4(text, char) {
  // Your code
  let position = 0;
  let num = 0;

  position = text.indexOf(char);
  while (position !== -1) {
    num++;
    position = text.indexOf(char, position + 1);
  }
  return num;
}

console.log(challenge4("hello world", "o"));
console.log(challenge4("aaa bbb a", "a"));
console.log(challenge4("abc", "d"));
