/* eslint-disable no-else-return */
function fibIteration(num) {
    const array = [];
    if (num === 0) {
        return array;
    } else if (num === 1) {
        array.push(0);
        return array;
    } else {
        array.push(0);
        array.push(1);
        if (num === 2) {
            return array;
        }
    }
    let sum = 0;
    for (let i = 2; i < num; i++) {
        sum = array[i - 1] + array[i -2];
        array.push(sum);
        sum = 0;
    }

    return array;
}

console.log(fibIteration(8));

function fibRec(num) { 
    if (num <= 0) { return []}
    if (num === 1) { return [0]}
    if (num === 2) { return [0, 1]}
    return fibRec(num - 1).concat([fibRec(num - 1)[num -2] + fibRec(num -1)[num -3]]);
}

console.log(fibRec(10));