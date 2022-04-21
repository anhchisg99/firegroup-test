def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key


def func_Sort(arr):
    setArr = set(arr)
    listArr = list(setArr)
    insertionSort(listArr)
    tstArr = listArr[::-1]
    print(tstArr[0:5])

#test case
arr = [3,4,5,3,2,3,10,11]
arr1 = [14,12,38,17,10,36,12,29,45,34,48,22]
arr2 = [10,11,2,30,22,6,8,9,11,12,22]
func_Sort(arr)


def frequency(arr):

    for x in range(len(arr)-1):
        for y in range(x+1,len(arr)):
            if(arr[x] == arr[y]):
                print(arr[x])


arr3 = [3,7,3,5,8,7]
arr2 = [None, "hello", True, None]
arr1 = [False, "up", "down", "left", "right", True, False]
#Test Case
frequency(arr1)
frequency(arr2)
frequency(arr3)











# sortedArr = arr[0:5]
# print(arr)
