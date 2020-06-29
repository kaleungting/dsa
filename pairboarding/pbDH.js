//329

var isSubsequence = function (s, t) {
  if (t.length < s.length) return false;
  if (s.length === 0 || t.length === 0) return true;

  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) j++;
    if (j === s.length) return true;
  }
  return false;
};

//a boomerang is a set of 3 points that is all distinct and not in a straight line
//given a list of 3 lists on a plane, return if the list is a boomerang

//i.e.
//[[1,1],[2,3],[3,2]] return true
//[[1,1],[2,2],[3,3]] return false (1st point difference is [1,1], 2nd point diff is also [1,1]) return false
//the length of the points is always 3, since 2d array, each subarr = length of 2
//points between each number is between 0 - 100 [0,100],[50,50],[3,4]

//[1,0],[2,0],[3,0]  (1st point difference is [1,0], 2nd point diff is also [1,0]) return false ([0,13],[1,13])
//[1,0],[50,0],[70,0] false bc it's still a straight line

function isBoomerang(arr) {
  let diffArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = [arr[i + 1][0] - arr[i][0], arr[i + 1][1] - arr[i][1]];
    diffArr.push(diff);
  }

  for (let i = 0; i < diffArr.length - 1; i++) {
    if (diffArr[i][0] - diffArr[i + 1][0] === 0) return false;
    if (diffArr[i][1] - diffArr[i + 1][1] === 0) return false;
  }
  return true;
}

// 849. Maximize Distance to Closest Person


// ugly Number
//ugly numbers' prime factors are 2,3,5

//8 --> true 2*2*2
//14 --> false 2*7

function uglyNumber(num){
  let ugly = new Set([2,3,5]);

  for (let i = 2; i < num; i++){
    if (num % i === 0 && !ugly.has(i)) return false;
  }
  return true;

}