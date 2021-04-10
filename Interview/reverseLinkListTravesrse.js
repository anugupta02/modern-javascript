const reverseList = (head) => {
    //initiate previous as null
    let previous = null
    //initiate next without assigning
    let next
    //keep iteration while head is not null
    while(head){
        //store the current node's next node
        next = head.next
        //reassign head's next with previous node
        head.next = previous
        //reassign previous with reversed current node
        previous = head
        //reassign head with next node
        head = next
    }
    //after reversing return previous list
    return previous
};
