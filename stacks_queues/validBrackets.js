function validBrackets(str) {
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let tracker = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let last = tracker[tracker.length - 1];
    if (!Object.keys(brackets).includes(char) && brackets[last] !== char) {
      return false;
    } else if (Object.keys(brackets).includes(char)) {
      tracker.push(char);
    } else if (brackets[last] === char) {
      tracker.pop();
    }
  }

  if (tracker.length !== 0) {
    return false;
  }
  return true;
}

console.log(validBrackets("{[]()}"));
console.log(validBrackets("{[(])}"));
console.log(validBrackets("{[}"));
console.log(validBrackets("({}[]{[]})"));

//if it's open bracket push,
//if it's a close bracket, it must be === to the closing of the previous bracket (brackets[last])
