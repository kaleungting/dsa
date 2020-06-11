// 203. Remove Linked List Elements
// Easy

// Remove all elements from a linked list of integers that have value val.

//     Example:

// Input: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, val = 6
// Output: 1 -> 2 -> 3 -> 4 -> 5

var removeElements = function (head, val) {
  let newHead = new ListNode("DUMMY"); //create a dummy list
  newHead.next = head; //basically copy the linkedList but with dummy in front
  let p1 = newHead; //set a pointer
  while (p1.next) { //while pointer.next exists
    if (p1.next.val === val) { //check to see if val of next node is the target
      p1.next = p1.next.next; //reassign pointer to skip the target
    } else {
      p1 = p1.next; //advance pointer normally
    }
  }
  return newHead.next; //return the COPIED LIST minus the dummy in front
};
