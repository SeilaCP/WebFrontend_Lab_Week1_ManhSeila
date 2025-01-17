function challenge5(text) {
  // Your code
  let position = 0;
  let num = 0;
  text = text.trim();

  position = text.indexOf(" ");
  while (position != -1) {
    num++;
    position = text.indexOf(" ", position + 1);
  }
  return num + 1;
}

console.log(challenge5("hello world"));
console.log(challenge5("this is the best day"));
console.log(challenge5("a bb ccc ddddddd e"));
