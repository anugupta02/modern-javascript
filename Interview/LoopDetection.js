function breakLoopAnywhere(list) {
    var seen = new Set, node = list.head;
    while (!seen.has(node.next)) {
        seen.add(node);
        node = node.next;
    }
    node.next = null;
    return seen.size;
}
