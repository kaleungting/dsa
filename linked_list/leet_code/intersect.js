// function intersect(nums1, nums2) {
//     let result = [];
//     let setNum1 = new Set(nums1);
//     let setNum2 = new Set(nums2);

//     let [smallSet, largeSet] = (setNum1.length < setNum2.length) ? [setNum1, setNum2] : [setNum2, setNum1];

//     smallSet.forEach(num => {
//         if (largeSet.has(num)){
//             result.push(num);
//         }
//     });

//     return result;
// }

// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]

// set1 = {1,2}
// set2 = {2}

// var isIsomorphic = function (s, t) {
//     let newS = new Set(s.split(""))
//     let newT = new Set(t.split(""))

//     return newS.length
// };

// console.log(isIsomorphic("ab","aa"))

//mergeSort, bubble, bsearch, quickSort, radixSort, countingSort

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      let ele = left.shift();
      result.push(ele);
    } else {
      let ele = right.shift();
      result.push(ele);
    }
  }

  return [...result, ...left, ...right];
}

console.log(mergeSort([2, 3, 1, 5, 7, 3, 6, 10, 8]));
