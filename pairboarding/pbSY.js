// function barryString(str) {
//   let newArr = [];
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "_" && arr[i + 1] === "_") {
//       newArr.push(".");
//       i += 1;
//     } else if (arr[i] === "_") {
//       newArr.push(" ");
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(barryString("Soldier_76"));
// console.log(barryString("D__VA"));

function replacer(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "_" && arr[i + 1] === "_") {
      arr[i] = ".";
      arr[i + 1] = "";
      i += 1;
    } else if (arr[i] === "_") {
      arr[i] = " ";
    }
  }
  return arr.join("");
}

console.log(replacer("Soldier_76"));
console.log(replacer("D__VA"));
