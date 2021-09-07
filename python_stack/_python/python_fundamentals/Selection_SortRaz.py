arr = [8,5,2,6,9,3,1,4,0,7,3,6,7,89,4,2,34,33333,1,3,5,67,78,6,0,0,1,3]

def selectionSort(arr):
    for j in range(len(arr)):
        minDx = j
        for i in range(j+1,len(arr)):
            if arr[i] < arr[minDx]:
                minDx = i
        arr[j], arr[minDx] = arr[minDx], arr[j]

    return arr

print(selectionSort(arr))
