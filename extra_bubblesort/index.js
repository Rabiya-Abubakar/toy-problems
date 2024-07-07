// Solution.js
function bubbleSort(arr) {
    let len = arr.length; // Get the length of the array
    for (let i = 0; i < len; i++) { // Outer loop for each pass
        for (let j = 0; j < len - 1 - i; j++) { // Inner loop for comparisons
            if (arr[j] > arr[j + 1]) { // Compare adjacent elements
                let temp = arr[j]; // Swap if current element is greater than next element
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; // Return the sorted array
}

// Sample usage
const inputArray = [5, 6, 1, 3, 4, 2];
console.log("Sorted Array:", bubbleSort(inputArray)); // Output the sorted array


