const reverseList = (head, previous = null) => {

    //base case
    if(!head) return previous
    //variable to store next node
    let temp = head.next
    //reverse the node
    head.next = previous
    //recursion starts
    return reverseList(temp, head)
};
