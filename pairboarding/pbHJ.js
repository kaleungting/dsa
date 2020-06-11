// Given an array A of non - negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3, 1, 2, 4]
// Output: [2, 4, 3, 1]
// The outputs[4, 2, 3, 1], [2, 4, 1, 3], and[4, 2, 1, 3] would also be accepted.

//iterate through array
//check if that number is an even number
//if it is, then unshift it into a results array
//if it is odd, then push into results array

var sortArrayByParity = function (A) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result.unshift(A[i]);
    } else {
      result.push(A[i]);
    }
  }

  return result;
};

function sortArrayByParity2(A) {
  let evens = [];
  let odds = [];
  A.forEach((ele) => {
    if (ele % 2 === 0) {
      evens.push(ele);
    } else {
      odds.push(ele);
    }
  });
  return [...evens, ...odds];
}

//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

//You may assume that the array is non - empty and the majority element always exist in the array.

//Example 1:

//Input: [3, 2, 3]
//Output: 3
//Example 2:
//
//Input: [2, 2, 1, 1, 1, 2, 2]
//Output: 2

var majorityElement = function (nums) {
  let counter = {};

  for (let i = 0; i < nums.length; i++) {
    let ele = num[i];
    if (!counter[ele]) {
      counter[ele] = 1;
    } else {
      counter[ele] += 1;
      if (counter[ele] > nums.length / 2) {
        return ele;
      }
    }
  }
};

//create hash
// iterate through the array, initializing key if it doesnt exist, and +1 if it already exists
// run an if statement that checks to see if the value of that key is greater than nums.length /2, return key

// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array.If there are multiple lucky integers return the largest of them.If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2, 2, 3, 4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
//     Example 3:

// Input: arr = [2, 2, 2, 3, 3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
//     Example 4:

// Input: arr = [5]
// Output: -1
// Example 5:

// Input: arr = [7, 7, 7, 7, 7, 7, 7]
// Output: 7

//create an obj
//count the number of nums within input
//return the last num in sorted key

var findLucky = function (arr) {
  const nums = {};

  arr.forEach((num) => {
    if (!nums[num]) nums[num] = 0;
    nums[num]++;
  });

  const result = [];
  Object.entries(nums).forEach(([key, val]) => {
    if (Number(key) === val) result.push(key);
  });

  return !result.length ? -1 : result.sort((a, b) => a - b)[result.length - 1];
};

//Number(key)

var findLucky = function (arr) {
  let counter = {};
  let luckyNum = -1;
  for (let i = 0; i < nums.length; i++) {
    let ele = num[i];
    if (!counter[ele]) {
      counter[ele] = 1;
    } else {
      counter[ele] += 1;
      if (counter[ele] === ele && ele > luckyNum) {
        luckyNum = ele;
      } else {
        luckyNum = -1;
      }
    }
  }
  return luckyNum;
};
