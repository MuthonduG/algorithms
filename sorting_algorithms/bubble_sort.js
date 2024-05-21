function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Outer loop to iterate over the entire array
    for (let i = 0; i < n; i++) {
        swapped = false;
        
        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        
        // If no elements were swapped, break out of the loop
        if (!swapped) {
            break;
        }
    }

    console.log(arr);
}

let arr = [5, 9, 10, 2, 23, 1, 4 ]

bubbleSort(arr)