export default function dfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (head === null) {
        return false;
    }

    if (head.value === needle) {
        return true;
    }

    let next;

    if (head.value < needle) {
        next = head.right;
    } else {
        next = head.left;
    }

    return dfs(next, needle);
}
