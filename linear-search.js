// O(n)
const linearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}

const arr = [3,5,7,9,11];
const x = 7
console.log(linearSearch(arr, x));