function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    //Recurse

    //Pre
    path.push(curr.value);
    // Recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
