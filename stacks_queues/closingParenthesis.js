//Time O(N), space O(N)
function findClose(str, start) {
  let tracker = [];
  for (let i = start; i < str.length; i++) {
    if (str[i] === "(") {
      tracker.push(str[i]);
    } else if (str[i] === ")") {
      tracker.pop();
    }
    if (tracker.length === 0) {
      return i;
    }
  }
  return null;
}

// let str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
//return i when tracker.length === 0

//Time O(N), space O(1)
function findClose1(str, start) {
  let tracker = 0;
  for (let i = start; i < str.length; i++) {
    if (str[i] === "(") {
      tracker += 1;
    } else if (str[i] === ")") {
      tracker -= 1;
    }
    if (tracker === 0) {
      return i;
    }
  }
  return null;
}

let str =
  "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
console.log(findClose1(str, 10));
