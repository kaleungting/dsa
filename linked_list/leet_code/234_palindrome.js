// Given a singly linked list, determine if it is a palindrome.

//     Example 1:

// Input: 1 -> 2
// Output: false
// Example 2:

// Input: 1 -> 2 -> 3 -> 3 -> 2 -> 1
// Output: true

var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;

  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next; //slow is moving a 1x
    fast = fast.next.next; //fast is moving 2x the speed
  }
  //when fast is to the end, then slow is right at the mid-point... then that's when you reverse the right half of the list
  slow.next = reverseList(slow.next); //using helper to reverse list (3 - 3 - 2 - 1)
  slow = slow.next; //advance it (now the list is at the beginning of reverse list) 1 - 2 - 3
  while (slow) {
    if (head.val !== slow.val) return false;
    head = head.next; //start from the beginning of the list
    slow = slow.next; //start from the reversed half of the list
  }
  return true;
};

var reverseList = function (head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// 1 - 2 - 3 - 1   2   3
//                     s;
// 1 - 2 - 3 - 3 - 2 - 1;
//                 f;
//         h;

1 - 2 - 3 - 4 - 5 - 6
        s
                f