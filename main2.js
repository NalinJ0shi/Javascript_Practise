function findCube(num) {
    if (num <= 0) {
        return "Please provide a positive integer";
    }
    return num * num * num;
}

// Example usage
console.log(findCube(5));  // Output: 125
console.log(findCube(3));  // Output: 27
console.log(findCube(10)); // Output: 1000