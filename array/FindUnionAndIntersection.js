// 6)Find the Union and Intersection of the two sorted arrays.
const findUnionAndIntersection = (firstArray, secondArray) => {
    // Logic :- Merge 2 Arrays & remove duplicates thats it

    const mergedArray = [...firstArray, ...secondArray];
    // console.log("mergedArray ===> ", mergedArray)

    let result = [];
    let unionArray = [];
    // Below Union exceeds time
    for (let i = 0; i < mergedArray.length; i++) {
        if (!unionArray.includes(mergedArray[i])) {
            unionArray.push(mergedArray[i])
        }
    }
    for (let num of firstArray) {

        if (secondArray.includes(num) && !result.includes(num)) {
            result.push(num)
        }
    }

    return { union: unionArray, intersection: result }
}
console.log(findUnionAndIntersection([6, 2], [85, 25, 1, 32, 54, 6]))
