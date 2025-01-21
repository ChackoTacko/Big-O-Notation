// O(n^2)

class Solution {
    static bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j +1 ]] = [arr[j + 1], arr[j]]
                } 
            }
        }
    }
} 

const arr = [64, 34, 25, 12, 22, 11, 90]
Solution.bubbleSort(arr)
console.log("Sorted array is:", arr)