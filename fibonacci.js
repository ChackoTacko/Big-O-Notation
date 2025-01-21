// O(2^n)
class Solution {
    static fibonacci(n) {
        if (n === 0) return 0
        if (n === 1) return 1
        return Solution.fibonacci(n - 1) + Solution.fibonacci(n - 2) 
    } 
}

const n = 6;
console.log(`Fibonacci number at position ${n} is ${Solution.fibonacci(n)}`)