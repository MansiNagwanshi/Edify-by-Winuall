function getUniqueValues(arr) {
    // Use a Set to store unique values
    let uniqueValues = new Set(arr);
    
    // Convert the Set back to an array
    return Array.from(uniqueValues);
}


let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8];
let uniqueArr = getUniqueValues(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
