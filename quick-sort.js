// O(n * logn) on average, O(n^2) worst case
class Solution {
    static quickSort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[Math.floor(arr.length/2)]
        let left = arr.filter(x => x < pivot)
        let middle = arr.filter(x => x === pivot)
        let right = arr.filter(x => x > pivot)
        return [...Solution.quickSort(left), ...middle, ...Solution.quickSort(right)]
    }
}