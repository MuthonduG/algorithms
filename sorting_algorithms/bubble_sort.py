def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Track if any elements were swapped in this iteration
        swapped = False
        # Last i elements are already in place, so inner loop can avoid checking them
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        # If no elements were swapped in the inner loop, then the array is already sorted
        if not swapped:
            break
    print(arr)


arr = [5, 9, 10, 2, 23, 1, 4 ]
bubble_sort(arr)