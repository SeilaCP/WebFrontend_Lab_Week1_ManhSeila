function max(objects) {
  let results = [];
  let maxValue = 0;

  // Find the maximum votes
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].votes > maxValue) {
      maxValue = objects[i].votes;
    }
  }

  // Collect all voters with the maximum votes
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].votes === maxValue) {
      results.push(objects[i].voter);
    }
  }

  return results;
}

function winner(array) {
  const results = [];
  while (array.length > 0) {
    let firstVoter = array[0];
    let value = challenge4(array, firstVoter);
    results.push({ voter: firstVoter, votes: value });
  }

  console.log(results);
  let win = max(results);
  var str = "";
  for (let i = 0; i < win.length; i++) {
    if (i == 0) {
      str += win[i] + " ";
    } else if (i == win.length - 1) {
      str += "and " + win[i] + " ";
    } else {
      str += win[i] + ", ";
    }
  }

  if (win.length > 1) {
    console.log(str + "are the winner.\n");
  } else if (win.length == 1) {
    console.log(str + "is the winner.\n");
  } else if (win.length == 2) {
    console.log(str + "both are the winner.\n");
  } else {
    console.log("There is not vote yet\n");
  }
}

function challenge4(text, char) {
  // Your code
  let position = 0;
  let num = 0;
  position = text.indexOf(char);
  while (position !== -1) {
    num++;
    text.splice(position, 1);
    position = text.indexOf(char, position);
  }
  return num;
}

votes1 = ["A", "B", "A", "C", "A"];
votes2 = ["A", "B", "B", "C", "A"];
votes3 = [];

winner(votes1);
winner(votes2);
winner(votes3);
