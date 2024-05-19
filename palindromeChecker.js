function isPalindrome(str) {
    // Step 1: Remove non-alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Step 3: Compare the cleaned string with the reversed string
    return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
