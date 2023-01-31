function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    const middleIndex = Math.ceil(array.length / 2);
    const firstHalf = mergeSort(array.splice(0, middleIndex));
    const secondHalf = mergeSort(array.splice(-middleIndex));
    const len = firstHalf.length + secondHalf.length;
    while (array.length !== len) {
        if (firstHalf.length === 0) {
            array.push(secondHalf.shift());
        } else if (secondHalf.length === 0) {
            array.push(firstHalf.shift());
        } else if (firstHalf[0] > secondHalf[0]){
            array.push(secondHalf.shift());
        } else {
            array.push(firstHalf.shift());
        }
    }
    return array;
}
console.log(mergeSort([1, 6, 7, 3, 4, 2, 9, 8, 15, 12, 18, 99, 54]));
