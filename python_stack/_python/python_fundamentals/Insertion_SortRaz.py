arr = [8,5,2,6,9,3,1,4,0,7,3,6,7,89,4,2,34,33333,1,3,5,67,78,6,0,0,1,3]

def insertionSort(arr):
    for i in range(1, len(arr)):
        k = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > k:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = k
    return arr
print(insertionSort(arr))
