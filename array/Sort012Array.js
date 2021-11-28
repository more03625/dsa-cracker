const sortArray = (arr) => {
    // Dutch national Flag algo.

    let low = 0, mid = 0, high = arr.length - 1, temp;

    while (mid <= high) {
        if (arr[mid] === 0) {
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else if (arr[mid] === 2) {
            temp = arr[mid]
            arr[mid] = arr[high];
            arr[high] = temp
            high--
        } else {
            return { error: 'Given Wrong array! Array should contain only 0, 1, 2' }
        }
    }
    return arr

}
console.log(sortArray([0, 1, 1, 0, 1, 2, 1, 2, 0, 1, 0, 1]))