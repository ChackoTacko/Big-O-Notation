// O(logn)

class Solution {
    static binarySearch(arr, x) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] < x) {
                low = mid + 1
            } else if (arr[mid] > x) {
                high  = mid -1 
            } else {
                return mid
            }
        }

        return -1;
    }
}

const arr = [2,3,4,10,40];
const x = 10;
console.log(Solution.binarySearch(arr, x));