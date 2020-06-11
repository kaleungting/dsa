// Given a non - empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

//     Example 1:

// Input: [1, 2, 3, 4, 5]
// Output: Node 3 from this list(Serialization: [3, 4, 5])
// The returned node has value 3.(The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
//     ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
//         Example 2:

// Input: [1, 2, 3, 4, 5, 6]
// Output: Node 4 from this list(Serialization: [4, 5, 6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast.next !== null && fast.next.next === null) {
    //checks to see if linked list is even number, if even list, then fast reaches only to second to last node, but u have to return slow.next
    return slow.next;
  }
  return slow; //fast will have reached the final node, and the slow is in the middle of the list
};
