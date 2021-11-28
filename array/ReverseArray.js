const reverseArrayIteration = () => {
    let arr = [1,2,3];
    let n = arr.length, start = 0 , end = n-1, temp;

    while(start < end){ 
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    
        start++
        end--
    }

    return arr
}
// console.log(reverseArrayIteration())
// Way : Iterative way 
// TC: O(n) ==> Only 1 loop is there. Array size grows, time grows

const reverseArray = (arr, n, start, end) => {

    if(start > end){
        return arr
    }

    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    reverseArray(arr, n, start + 1, end - 1);

    // start | End
    // 0     | 3
    // 1     | 2
    // 2     | 1
}
const reverseArrayRecursion = () => {
    let arr = [1,2,3,4,5,6,7,8];
    let n = arr.length, start = 0 , end = n-1;

    reverseArray(arr, n, start, end)
    return arr

}
console.log(reverseArrayRecursion())
// Time Complexity : O(n)